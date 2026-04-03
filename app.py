import sys
import os
from flask import Flask, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
import torch
from PIL import Image
from torchvision import transforms
from flask_cors import CORS

# =======================
# PATHS & IMPORTS
# =======================

ROOT_DIR = os.path.abspath(os.path.dirname(__file__))
sys.path.append(ROOT_DIR)

from src.model import CNNModel
from src.gradcam import generate_heatmap

# =======================
# FLASK APP
# =======================

app = Flask(__name__)
CORS(app)   # allow React frontend to access the API

UPLOAD_FOLDER = os.path.join(ROOT_DIR, "uploads")
STATIC_FOLDER = os.path.join(ROOT_DIR, "static")

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(STATIC_FOLDER, exist_ok=True)

# =======================
# MODEL LOADING
# =======================

device = "cuda" if torch.cuda.is_available() else "cpu"

model = CNNModel(num_classes=2).to(device)
model.load_state_dict(
    torch.load(os.path.join(ROOT_DIR, "saved_models/pancreas_model.pth"),
               map_location=device)
)
model.eval()

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

# =======================
# API ROUTES
# =======================

@app.route("/")
def home():
    return jsonify({"message": "Pancreas Cancer Detection API Running"})


@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files["image"]
    filename = secure_filename(file.filename)
    img_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(img_path)

    # Image preprocessing
    img = Image.open(img_path).convert("RGB")
    x = transform(img).unsqueeze(0).to(device)

    with torch.no_grad():
        out = model(x)
        probabilities = torch.nn.functional.softmax(out, dim=1)
        cancer_prob = probabilities[0][0].item()
        normal_prob = probabilities[0][1].item()
        
        # Class 0 was learned as Cancer, Class 1 was learned as Normal
        if cancer_prob > 0.50:
            prediction = "Cancer"
            confidence_val = cancer_prob
        else:
            prediction = "Normal"
            confidence_val = normal_prob

    # Generate GradCAM heatmap
    heatmap_path = generate_heatmap(img_path)

    # Copy heatmap to backend/static/ folder
    final_heatmap_path = os.path.join(STATIC_FOLDER, "heatmap.jpg")
    os.replace(heatmap_path, final_heatmap_path)

    return jsonify({
        "prediction": prediction,
        "confidence": round(confidence_val * 100, 2),
        "heatmap_url": "/static/heatmap.jpg"
    })


@app.route("/static/<path:filename>")
def serve_static(filename):
    return send_from_directory(STATIC_FOLDER, filename)


# =======================
# MAIN
# =======================

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
