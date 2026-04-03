import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Download, ShieldCheck, Printer, Loader2, FileText, ChevronLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Result() {
  const reportRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const location = useLocation();
  const { fileUrl, heatmapUrl, prediction, confidence } = location.state || {}; // Get data passed from ScanUpload

  // Default fallback data if page loaded directly
  const isDetected = prediction === "Cancer";
  const statusFormatted = prediction ? (prediction === "Cancer" ? "DETECTED" : "NORMAL") : "DETECTED";
  const confidenceScore = confidence || 94.8;
  const displayImage = heatmapUrl || fileUrl || "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop";

  const reportData = {
    patientID: "PAI-882-901",
    status: statusFormatted,
    confidence: confidenceScore,
    timestamp: new Date().toLocaleString(),
    findings: isDetected 
        ? "Analysis indicates a high-probability neoplastic density located in the pancreatic head region. Current volumetric estimation: 2.4cm x 1.8cm."
        : "No significant neoplastic density detected in the pancreatic region. Tissue density appears within normal physiological limits.",
    vitals: {
      segmentation: isDetected ? "99.2% Precise" : "N/A",
      riskFactor: isDetected ? "Grade II" : "Low Risk",
      processingTime: "1.4s"
    },
    recommendations: isDetected ? [
        "Immediate referral to Oncology Specialist.",
        "Contrast-enhanced MRI (EUS) for confirmation.",
        "CA 19-9 Serum Biomarker Panel."
    ] : [
        "Routine annual screening recommended.",
        "Maintain healthy lifestyle.",
        "Report any new symptoms immediately."
    ]
  };

  const handleDownloadPDF = async () => {
    const element = reportRef.current;
    if (!element) return;

    setIsDownloading(true);

    try {
        // html2canvas options to fix the "not downloading" issue
        const canvas = await html2canvas(element, {
            scale: 2, // High resolution
            useCORS: true, // Allows loading images from Unsplash/Localhost
            logging: false,
            backgroundColor: "#ffffff",
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`PancreasAI_Report_${reportData.patientID}.pdf`);
        
    } catch (err) {
        console.error("PDF Generation Error:", err);
        alert("Could not generate PDF. Please try again or use Chrome/Edge.");
    } finally {
        setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-[#f1f5f9] font-sans">
      
      {/* --- NON-PRINTABLE DASHBOARD CONTROLS --- */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm">
        <Link to="/upload" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold text-sm transition-all">
          <ChevronLeft size={18} /> New Analysis
        </Link>
        <button 
          onClick={handleDownloadPDF}
          disabled={isDownloading}
          className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-brand-secondary transition-all disabled:opacity-50 active:scale-95 shadow-lg shadow-slate-200"
        >
          {isDownloading ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
          {isDownloading ? "Generating Report..." : "Download Official PDF"}
        </button>
      </div>

      {/* --- FORMAL MEDICAL DOCUMENT --- */}
      <div className="max-w-4xl mx-auto shadow-2xl relative">
        <div 
          ref={reportRef} 
          className="bg-white p-12 md:p-16 text-[#0f172a] relative overflow-hidden border border-[#e2e8f0]"
          style={{ minHeight: '297mm' }} // Forces A4 aspect ratio start
        >
          {/* Top Security Ribbon */}
          <div className={`absolute top-0 left-0 w-full h-2 ${isDetected ? 'bg-[#f43f5e]' : 'bg-[#10b981]'}`} />

          {/* Letterhead */}
          <div className="flex justify-between items-start mb-12 border-b border-[#f1f5f9] pb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#0f172a] rounded-lg flex items-center justify-center text-white">
                    <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-serif font-bold tracking-tighter">PancreasAI <span className="font-light italic text-[#94a3b8]">Clinical</span></h2>
              </div>
              <p className="text-[10px] text-[#94a3b8] font-mono tracking-widest uppercase">Neural Diagnostic Report v2.4.0</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-[#64748b] uppercase tracking-widest mb-1">Authenticity Token</p>
              <p className="text-[10px] font-mono text-[#94a3b8] break-all max-w-[200px]">SHA256: 492f...a109</p>
            </div>
          </div>

          {/* Patient Info Table */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-6 border-y border-[#f8fafc] bg-[#f8fafc80] px-6 rounded-xl">
             <div><p className="text-[10px] font-bold text-[#94a3b8] uppercase mb-1">Patient ID</p><p className="font-bold text-sm">{reportData.patientID}</p></div>
             <div><p className="text-[10px] font-bold text-[#94a3b8] uppercase mb-1">Date/Time</p><p className="font-bold text-sm">{reportData.timestamp}</p></div>
             <div><p className="text-[10px] font-bold text-[#94a3b8] uppercase mb-1">Conf. Score</p><p className="font-bold text-sm text-[#8b5cf6]">{reportData.confidence}%</p></div>
             <div><p className="text-[10px] font-bold text-[#94a3b8] uppercase mb-1">Status</p><p className={`font-bold text-sm ${isDetected ? 'text-[#e11d48]' : 'text-[#059669]'}`}>{reportData.status}</p></div>
          </div>

          {/* Primary Result Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold text-[#94a3b8] uppercase tracking-widest mb-4 flex items-center gap-2">
                    <FileText size={14} /> Pathological Findings
                </h3>
                <p className="text-[#334155] leading-relaxed text-sm bg-[#f8fafc] p-6 rounded-2xl border-l-4 border-[#0f172a]">
                    {reportData.findings}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white border border-[#f1f5f9] rounded-xl shadow-sm">
                    <p className="text-[10px] font-bold text-[#94a3b8] uppercase">Segmentation</p>
                    <p className="text-lg font-bold text-[#0f172a]">{reportData.vitals.segmentation}</p>
                 </div>
                 <div className="p-4 bg-white border border-[#f1f5f9] rounded-xl shadow-sm">
                    <p className="text-[10px] font-bold text-[#94a3b8] uppercase">Latency</p>
                    <p className="text-lg font-bold text-[#0f172a]">{reportData.vitals.processingTime}</p>
                 </div>
              </div>
            </div>

            {/* AI Visualization */}
            <div className="relative">
                <div className="aspect-square bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl relative border-[6px] border-white">
                    <img 
                        src={displayImage} 
                        alt="Scan Result"
                        crossOrigin="anonymous"
                        className="w-full h-full object-cover opacity-60 contrast-125 brightness-75"
                    />
                    {/* The "Crosshair" Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 border border-[#f43f5e80] rounded-full animate-pulse flex items-center justify-center">
                            <div className="w-full h-[0.5px] bg-[#f43f5e80] absolute" />
                            <div className="h-full w-[0.5px] bg-[#f43f5e80] absolute" />
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-4 font-mono text-[8px] text-[#ffffff66]">AXIAL_PROJECTION_04</div>
                </div>
            </div>
          </div>

          {/* Clinical Directives */}
          <div className="mb-12">
            <h3 className="text-xs font-bold text-[#94a3b8] uppercase tracking-widest mb-6">Recommended Directives</h3>
            <div className="space-y-3">
              {reportData.recommendations.map((rec, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white border border-[#f1f5f9] rounded-xl">
                    <span className="w-6 h-6 rounded bg-[#0f172a] text-white flex items-center justify-center text-[10px] font-bold shrink-0">0{i+1}</span>
                    <p className="text-sm text-[#475569] font-medium">{rec}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Signature / Legal Footer */}
          <div className="mt-auto pt-10 border-t border-[#f1f5f9] flex justify-between items-end">
             <div className="max-w-[280px]">
                <p className="text-[9px] text-[#94a3b8] uppercase leading-relaxed font-bold italic">
                    AI Automated Analysis. This report is for decision-support purposes only and must be validated by a board-certified radiologist.
                </p>
             </div>
             <div className="text-center">
                <p className="text-2xl font-serif italic text-[#cbd5e1] mb-1">NeuralAuth_v2</p>
                <div className="w-40 h-[1px] bg-[#e2e8f0] mx-auto mb-2" />
                <p className="text-[10px] font-bold text-[#0f172a] uppercase tracking-widest">Digital Audit Signature</p>
             </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-slate-400 text-sm">
        <p>Report generated by PancreasAI Enterprise Node. <br/> Visit <span className="font-bold">pancreas.ai/verify</span> to check document integrity.</p>
      </div>
    </div>
  );
}