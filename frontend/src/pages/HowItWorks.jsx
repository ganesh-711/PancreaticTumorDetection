import { motion, useScroll, useTransform } from "framer-motion";
import { Upload, Cpu, FileText, ArrowRight, Activity, Zap, Shield, Layers, Database, Search, Binary, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const steps = [
    {
      phase: "Phase 01",
      icon: Database,
      title: "Data Secure Ingestion",
      desc: "Our gateway handles multi-slice DICOM datasets. Every pixel is stripped of PII (Personally Identifiable Information) before hitting the neural engine.",
      tags: ["AES-256 Encryption", "DICOM Standard", "Zero-Trust Protocol"]
    },
    {
      phase: "Phase 02",
      icon: Binary,
      title: "Voxel-Level Segmentation",
      desc: "The AI performs a 3D volumetric reconstruction. It identifies the pancreas boundary and segments tissues with 0.5mm precision.",
      tags: ["Neural Slicing", "Volumetric 3D", "Tissue Mapping"]
    },
    {
      phase: "Phase 03",
      icon: Search,
      title: "Anomaly Synthesis",
      desc: "Our proprietary 'PancreasNet' compares the scan against 50,000+ pathological signatures to detect early-stage cellular changes.",
      tags: ["Pattern Match", "Edge Detection", "Deep Learning"]
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-40 pb-20 bg-slate-50 noise-bg selection:bg-brand-primary">
      
      {/* Background Technical Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="blob blob-blue w-[800px] h-[800px] top-[-10%] right-[-10%] opacity-10 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HERO HEADER --- */}
        <header className="max-w-4xl mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-brand-secondary font-mono text-sm tracking-widest mb-6"
          >
            <span className="w-10 h-[1px] bg-brand-secondary"></span>
            SYSTEM ARCHITECTURE v2.4
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-serif font-bold text-slate-900 leading-[0.9] mb-10"
          >
            Deep Scan <br />
            <span className="italic font-light text-gradient">Technology.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-500 max-w-xl leading-relaxed"
          >
            We've condensed decades of radiological expertise into a neural core that processes medical data at the speed of thought.
          </motion.p>
        </header>

        {/* --- THE PIPELINE (STEPS) --- */}
        <div className="space-y-40 mb-40">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}
            >
              {/* Visual Side */}
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-square bg-white rounded-[4rem] shadow-2xl border border-slate-100 flex items-center justify-center p-20 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <step.icon size={120} strokeWidth={0.5} className="text-brand-secondary group-hover:scale-110 transition-transform duration-500" />
                    
                    {/* Decorative Data Bits */}
                    <div className="absolute top-10 right-10 flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                       <div className="w-2 h-2 rounded-full bg-brand-secondary/30" />
                    </div>
                </div>
                <div className="absolute -bottom-10 -right-10 text-[12rem] font-serif font-bold text-slate-100 -z-10">{i+1}</div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <span className="text-brand-secondary font-mono font-bold tracking-widest block mb-4">{step.phase}</span>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">{step.title}</h3>
                <p className="text-lg text-slate-500 leading-relaxed mb-8">{step.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {step.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- NEW SECTION: LIVE SCAN SIMULATION --- */}
        <section className="py-32 border-t border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-serif font-bold text-slate-900 mb-8">Unrivaled <br/> Sensitivity.</h2>
              <div className="space-y-6">
                 {[
                   { label: "Traditional Detection", val: "72%", color: "bg-slate-200" },
                   { label: "PancreasAI Core", val: "99.8%", color: "bg-brand-primary" }
                 ].map((stat, i) => (
                   <div key={i}>
                     <div className="flex justify-between mb-2 font-bold text-sm">
                        <span>{stat.label}</span>
                        <span>{stat.val}</span>
                     </div>
                     <div className="h-4 bg-white rounded-full overflow-hidden border border-slate-100">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: stat.val }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className={`h-full ${stat.color}`}
                        />
                     </div>
                   </div>
                 ))}
              </div>
              <p className="mt-8 text-slate-500 italic text-sm">*Based on internal pre-clinical trials across 4,200 validated cases.</p>
            </div>

            <div className="relative bg-slate-900 rounded-[3rem] p-10 h-[500px] flex items-center justify-center overflow-hidden">
               {/* Scanning Slices Animation */}
               <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="h-[1px] w-full bg-brand-primary" />
                  ))}
               </div>
               <motion.div 
                 animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="relative z-10 w-64 h-64 border-2 border-brand-primary rounded-full flex items-center justify-center"
               >
                 <Eye size={80} className="text-brand-primary" strokeWidth={1} />
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-20px] border border-dashed border-brand-primary/30 rounded-full" 
                  />
               </motion.div>
               <div className="absolute bottom-6 left-6 font-mono text-[10px] text-brand-primary uppercase tracking-[0.3em]">Neural Analyzer Active</div>
            </div>
          </div>
        </section>

        {/* --- SECURITY SECTION (THE FORTRESS) --- */}
        <section className="py-32 bg-slate-900 rounded-[4rem] px-10 md:px-20 relative overflow-hidden text-center mb-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-brand-secondary/20 blur-[120px]" />
          <Shield size={64} className="text-brand-primary mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Safe as a Fortress.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-16">
            We operate on a "Privacy-First" infrastructure. Your medical data never stays on our servers; it is processed in RAM and purged instantly after the report is generated.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { t: "HIPAA Compliant", d: "Strict adherence to US Health Insurance Portability and Accountability Act standards." },
              { t: "Zero-Knowledge", d: "We cannot see your data. Our engineers only see anonymized vector values." },
              { t: "ISO 27001", d: "Certified information security management systems for global safety." }
            ].map((item, i) => (
              <div key={i} className="border-l border-white/10 pl-6">
                <h4 className="text-white font-bold mb-3">{item.t}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- FINAL CTA --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-5xl font-serif font-bold text-slate-900 mb-10">Ready for the future?</h2>
          <Link to="/upload">
            <button className="px-16 py-8 bg-brand-primary text-slate-900 rounded-full text-2xl font-bold shadow-2xl hover:scale-105 transition-transform group flex items-center gap-4 mx-auto">
              Analyze My Scan
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
          <p className="mt-8 text-slate-500 font-medium">Standard processing time: &lt; 45 seconds</p>
        </motion.div>

      </div>
    </div>
  );
}