import { motion, useScroll, useTransform } from "framer-motion";
import { HeartPulse, Sparkles, ShieldCheck, Microscope, Fingerprint, Waves, ArrowRight, Dna } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax values for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fffdfa] text-stone-800 font-sans selection:bg-rose-100 overflow-hidden">
      
      {/* --- ORGANIC BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div style={{ y: y1, rotate }} className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-teal-100/50 rounded-[40%_60%_70%_30%/40%_50%_60%_40%] blur-3xl animate-pulse" />
        <motion.div style={{ y: y2 }} className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-rose-100/50 rounded-[30%_70%_40%_60%/50%_40%_30%_70%] blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt-tip.png')] opacity-20" />
      </div>

      {/* --- HERO SECTION: THE HUMAN TOUCH --- */}
      <section className="relative pt-48 pb-32 px-6 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-3 rounded-full bg-white shadow-xl shadow-teal-900/5 border border-teal-50"
        >
          <Dna className="text-teal-600 animate-spin-slow" size={32} />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-serif font-light leading-none tracking-tight mb-10 text-stone-900"
        >
          Care with <br />
          <span className="italic text-teal-600 font-normal">Biological Insight.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-xl text-xl text-stone-500 font-light leading-relaxed mb-12"
        >
          PancreasAI blends soft-touch care with hard-science AI to detect early anomalies with a human heart.
        </motion.p>

        <Link to="/upload">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-12 py-6 bg-stone-900 text-stone-50 rounded-full text-xl font-medium shadow-2xl hover:bg-teal-700 transition-colors flex items-center gap-4"
          >
            Begin Journey <ArrowRight size={20} />
          </motion.button>
        </Link>
      </section>

      {/* --- THE RIBBON FLOW --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { icon: Microscope, title: "Precision Analysis", desc: "Our neural core identifies patterns at the cellular level.", color: "bg-teal-50" },
            { icon: ShieldCheck, title: "Total Privacy", desc: "Your data is treated with the same sanctity as a doctor-patient visit.", color: "bg-rose-50" },
            { icon: Sparkles, title: "Clear Answers", desc: "No more waiting weeks. Get clinical-grade results in seconds.", color: "bg-amber-50" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className={`w-20 h-20 ${item.color} rounded-[2rem] flex items-center justify-center mb-8 transition-all duration-500 group-hover:rounded-full group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-black/5`}>
                <item.icon className="text-stone-800" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- INTERACTIVE FROSTED SECTION --- */}
      <section className="py-32 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto rounded-[4rem] overflow-hidden relative border border-white bg-white/30 backdrop-blur-3xl shadow-2xl flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 p-16 md:p-24 flex flex-col justify-center">
            <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-6">Patient Centric</span>
            <h2 className="text-5xl md:text-7xl font-serif font-light text-stone-900 mb-8 leading-tight">
              A dashboard <br/> designed for <span className="italic">peace of mind.</span>
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-10">
              We translated cold data into intuitive visual heatmaps. Now, you can see exactly what your doctor sees, presented with clarity and empathy.
            </p>
            <div className="flex gap-4">
               <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                  <Waves size={24} />
               </div>
               <span className="text-sm font-medium text-stone-400 self-center">Fluid Visualization v1.0</span>
            </div>
          </div>

          <div className="lg:w-1/2 bg-teal-900/5 p-12 relative overflow-hidden flex items-center justify-center">
              {/* This simulates a biological scan overlay */}
              <div className="relative w-full aspect-square max-w-md">
                 <div className="absolute inset-0 border-[20px] border-white rounded-full shadow-inner z-20"></div>
                 <motion.div 
                    animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 bg-gradient-to-br from-teal-200 via-rose-100 to-teal-50 rounded-full blur-md opacity-60"
                 />
                 <div className="absolute inset-0 flex items-center justify-center z-30">
                    <HeartPulse size={80} className="text-stone-800 opacity-20 animate-pulse" />
                 </div>
              </div>
          </div>
        </div>
      </section>

      {/* --- STATISTICS: GENTLE CARDS --- */}
      <section className="py-24 px-6 bg-stone-900 text-stone-50 rounded-t-[5rem] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            {[
              { label: "Clinic Partners", val: "120+" },
              { label: "Successful Screens", val: "45,000" },
              { label: "Early Detection", val: "94%" },
              { label: "AI Reliability", val: "99.8%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="border-l border-stone-800 pl-8"
              >
                <h4 className="text-stone-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">{stat.label}</h4>
                <span className="text-5xl font-serif italic">{stat.val}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA: SOFT EXIT --- */}
      <section className="py-32 px-6 text-center z-10 relative bg-stone-900">
        <div className="max-w-4xl mx-auto">
           <Fingerprint className="text-teal-400 mx-auto mb-8 animate-pulse" size={48} />
           <h2 className="text-5xl md:text-7xl font-serif text-white mb-12">Every scan tells a story. Let's find yours.</h2>
           <Link to="/upload">
              <button className="px-16 py-8 bg-teal-500 text-stone-900 rounded-full text-2xl font-bold hover:bg-white transition-all shadow-[0_0_50px_rgba(20,184,166,0.3)]">
                Start Analysis
              </button>
           </Link>
        </div>
      </section>

      <footer className="py-12 bg-stone-900 text-stone-600 text-center border-t border-stone-800">
        <p className="text-xs uppercase tracking-widest">PancreasAI © 2026 — Designed for Life</p>
      </footer>
    </div>
  );
}