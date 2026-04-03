import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Heart, Shield, Award, ArrowRight, Microchip, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const team = [
    { name: "Dr. Sarah Chen", role: "Chief Medical Officer", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop", size: "lg" },
    { name: "James Wilson", role: "AI Research", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop", size: "sm" },
    { name: "Elena Rodriguez", role: "Data Scientist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop", size: "sm" },
  ];

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen selection:bg-brand-primary">
      
      {/* --- SCROLL PROGRESS INDICATOR --- */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* --- SECTION 1: THE ELEGANT HERO --- */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px]" 
          />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-8">
              Established 2024
            </span>
            <h1 className="text-7xl md:text-[10rem] font-serif leading-none text-slate-900 mb-12">
              Humanity <br />
              <span className="italic font-light text-gradient">Enhanced.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed"
          >
            We are bridging the gap between clinical intuition and computational precision to redefine what's possible in oncology.
          </motion.p>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary to-transparent" />
        </motion.div>
      </section>

      {/* --- SECTION 2: THE VISION (PULSE) --- */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <motion.div 
                whileInView={{ scale: [0.9, 1.05, 1] }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" alt="Laboratory" />
                <div className="absolute inset-0 bg-brand-secondary/20 mix-blend-overlay" />
              </motion.div>
              {/* Animated Rings behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                <div className="absolute inset-0 border border-brand-primary/30 rounded-[3rem] animate-[ping_3s_linear_infinite]" />
                <div className="absolute inset-[-20px] border border-brand-primary/10 rounded-[4rem] animate-[ping_4s_linear_infinite_1s]" />
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-serif font-bold text-slate-900 mb-8">Our Mission</h2>
              <div className="space-y-12">
                {[
                  { icon: Zap, title: "Velocity", text: "Reducing diagnostic lead times from weeks to seconds." },
                  { icon: Globe, title: "Accessibility", text: "Democratizing expert-level oncology globally." },
                  { icon: Microchip, title: "Innovation", text: "Pushing the boundaries of multi-modal deep learning." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-brand-secondary">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE TEAM BENTO --- */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-6xl font-serif font-bold text-slate-900 mb-6">Expertise <br/> meets <span className="text-brand-primary italic">empathy.</span></h2>
            </div>
            <div className="hidden md:block">
               <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />)}
                  </div>
                  <span className="text-sm font-bold text-slate-500">+12 Researchers</span>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`relative rounded-[2.5rem] overflow-hidden group shadow-xl ${
                  member.size === 'lg' ? 'md:col-span-7 h-[500px]' : 'md:col-span-5 h-[500px]'
                }`}
              >
                <img src={member.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={member.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <p className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-2">{member.role}</p>
                  <h3 className="text-3xl font-bold text-white">{member.name}</h3>
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: 'auto', opacity: 1 }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-300 mt-4 text-sm leading-relaxed">
                      Dedicated to pioneering new methodologies in medical imaging and AI-driven therapeutics.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE VALUES (HORIZONTAL) --- */}
      <section className="py-32 px-4 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="text-5xl font-serif font-bold text-white mb-8">Our Core DNA</h2>
              <p className="text-slate-400">The principles that guide every line of code we write and every clinical trial we conduct.</p>
            </div>
            <div className="md:w-2/3 flex gap-8 overflow-x-auto pb-10 scrollbar-hide">
              {[
                { icon: Heart, title: "Compassion", desc: "Technology is just a tool; the patient is the purpose." },
                { icon: Shield, title: "Trust", desc: "Data integrity is non-negotiable and patient-owned." },
                { icon: Award, title: "Precision", desc: "We strive for zero-error clinical excellence." }
              ].map((val, i) => (
                <div key={i} className="min-w-[350px] bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-md">
                   <val.icon className="text-brand-primary mb-6" size={40} />
                   <h3 className="text-2xl font-bold text-white mb-4">{val.title}</h3>
                   <p className="text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: FINAL CTA --- */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto bg-brand-primary rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(87,242,167,0.3)]">
          {/* Abstract SVG Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-slate-900 mb-12">
              Building the future <br/> of <span className="italic font-light">precision care.</span>
            </h2>
            <Link to="/careers">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-6 bg-slate-900 text-white rounded-full text-xl font-bold flex items-center gap-4 mx-auto shadow-2xl transition-all"
              >
                Join the Team
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer className="py-12 px-4 border-t border-slate-200 text-center">
        <p className="text-slate-400 text-sm tracking-widest uppercase">© 2026 PancreasAI Neural Core. All Rights Reserved.</p>
      </footer>

    </div>
  );
}