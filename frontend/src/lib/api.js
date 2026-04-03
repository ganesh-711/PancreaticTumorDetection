export async function predict(file) {
const form = new FormData();
form.append("image", file);


const res = await fetch("http://127.0.0.1:5000/predict", {
method: "POST",
body: form,
});


return res.json();
}