import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, File, Cpu, ShieldCheck, Zap, Fingerprint, Search, Sparkles, Database, BrainCircuit, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ScanUpload() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [scanPhase, setScanPhase] = useState("idle"); // idle | analyzing | synthesizing
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const technicalSteps = [
    { label: "Neural Ingestion", icon: <Database size={14} /> },
    { label: "Voxel Segmentation", icon: <Activity size={14} /> },
    { label: "Anomaly Mapping", icon: <Fingerprint size={14} /> },
    { label: "Risk Synthesis", icon: <BrainCircuit size={14} /> }
  ];

  const handleFile = (e) => {
    const selectedFile = e.target.files?.[0] || e.dataTransfer?.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setScanPhase("idle");
    }
  };

  const startAnalysis = async () => {
    if (!file) return;

    setScanPhase("analyzing");
    
    // Create FormData for upload
    const formData = new FormData();
    formData.append("image", file);

    try {
      // Start the simulated UI steps
      let step = 0;
      const stepInterval = setInterval(() => {
        if (step < technicalSteps.length - 1) {
          step++;
          setActiveStep(step);
        } else {
          clearInterval(stepInterval);
        }
      }, 800);

      // Perform actual API request
      const response = await fetch("/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Analysis Failed");
      }

      const data = await response.json();
      
      // Ensure the UI animation mimics at least some processing time
      setTimeout(() => {
        setScanPhase("synthesizing");
        setTimeout(() => {
          navigate("/result", {
            state: {
                fileUrl: URL.createObjectURL(file),
                heatmapUrl: data.heatmap_url, // Relative path from backend (/static/...)
                prediction: data.prediction,
                confidence: 94.8 // Mocked for now as backend doesn't return it
            }
          });
        }, 1500);
      }, 3500); // Minimum wait time for effect

    } catch (error) {
      console.error("Error analyzing image:", error);
      alert("Analysis failed. Please check backend connection.");
      setScanPhase("idle");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-teal-500/30 font-sans overflow-hidden flex flex-col items-center pt-32 p-6">
      
      {/* --- CINEMATIC AMBIANCE --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="w-full max-w-5xl relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            <ShieldCheck size={12} /> HIPAA Compliant Node
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"> Analyze Clinical Data.</span>
          </h1>
        </motion.div>

        {/* --- MAIN INTERFACE --- */}
        <motion.div 
          layout
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="relative bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-2 overflow-hidden shadow-2xl"
        >
          <div className="bg-slate-950/50 rounded-[3.8rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {/* STATE: UPLOAD */}
              {scanPhase === "idle" && (
                <motion.div 
                  key="upload-ui"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex flex-col items-center"
                >
                  {!file ? (
                    <div 
                      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={(e) => { e.preventDefault(); handleFile(e); }}
                      className={`relative w-full h-96 rounded-[3rem] border-2 border-dashed transition-all duration-500 flex flex-col items-center justify-center group cursor-pointer
                        ${isDragging ? 'border-teal-500 bg-teal-500/5 scale-[0.98]' : 'border-slate-800 hover:border-slate-600'}`}
                    >
                      <input type="file" id="file-up" className="hidden" onChange={handleFile} />
                      <label htmlFor="file-up" className="absolute inset-0 cursor-pointer flex flex-col items-center justify-center">
                        <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-teal-500/50 transition-all duration-500 shadow-2xl">
                          <Upload className="text-teal-500" size={32} />
                        </div>
                        <h3 className="text-2xl font-bold  mb-2 bg-gradient-to-r from-teal-400 to-blue-500 ">Initialize Dataset</h3>
                        <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">DICOM • JPEG • PNG</p>
                      </label>
                      {/* Decorative corner accents */}
                      <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-slate-700" />
                      <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-slate-700" />
                    </div>
                  ) : (
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-md text-center">
                      <div className="bg-slate-900/80 p-6 rounded-3xl border border-white/10 mb-10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-teal-500/10 rounded-xl text-teal-500"><File size={24} /></div>
                          <div className="text-left">
                            <p className="font-bold text-white truncate max-w-[150px]">{file.name}</p>
                            <p className="text-[10px] text-slate-500 font-mono">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <button onClick={() => setFile(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={18} /></button>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        onClick={startAnalysis}
                        className="w-full py-6 bg-teal-500 text-black font-black text-xl rounded-full shadow-[0_0_40px_rgba(20,184,166,0.3)] hover:shadow-teal-500/50 transition-all flex items-center justify-center gap-3"
                      >
                        RUN NEURAL SCAN <Zap size={20} fill="currentColor" />
                      </motion.button>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* STATE: ANALYZING (SCANNING) */}
              {scanPhase === "analyzing" && (
                <motion.div 
                  key="scanning-ui"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-10"
                >
                  <div className="relative w-64 h-64 mb-16">
                    {/* The Scanning Eye */}
                    <div className="absolute inset-0 border-4 border-teal-500/20 rounded-full" />
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-10px] border border-dashed border-teal-500/40 rounded-full" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Search size={80} className="text-teal-400" strokeWidth={1} />
                      </motion.div>
                    </div>
                    {/* The Scan Beam */}
                    <motion.div 
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute left-[-20%] right-[-20%] h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent z-10 shadow-[0_0_15px_#2dd4bf]"
                    />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {technicalSteps.map((step, i) => (
                      <div key={i} className={`p-4 rounded-2xl border transition-all duration-500 ${activeStep >= i ? 'bg-teal-500/10 border-teal-500/50 text-white' : 'bg-white/5 border-white/5 text-slate-600'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          {step.icon}
                          <span className="text-[10px] font-bold uppercase tracking-widest">Phase 0{i+1}</span>
                        </div>
                        <p className="text-sm font-bold">{step.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STATE: SYNTHESIZING (LAZY LOAD RESULT) */}
              {scanPhase === "synthesizing" && (
                <motion.div 
                  key="lazy-ui"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-96 text-center"
                >
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-teal-500 mb-8"
                  >
                    <Sparkles size={64} />
                  </motion.div>
                  <h2 className="text-3xl font-serif font-bold text-white mb-4">Finalizing Insights</h2>
                  <p className="text-slate-500 font-mono text-sm max-w-sm">
                    Compiling volumetric data and generating diagnostic heatmaps for radiologist review...
                  </p>
                  <div className="mt-8 flex gap-2">
                    {[0, 1, 2].map(i => (
                      <motion.div 
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                        className="w-2 h-2 rounded-full bg-teal-500"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
        
        {/* Footer Meta */}
        <div className="mt-12 flex justify-between items-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] px-10">
          <span>Node ID: PX-992</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Neural Link Stable</span>
          <span>Latency: 14ms</span>
        </div>
      </div>
    </div>
  );
}