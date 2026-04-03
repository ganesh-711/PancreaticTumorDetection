import { ArrowUpRight, Activity, ShieldCheck, Zap, Users, HelpCircle, ChevronDown, CheckCircle, Play, HeartPulse, BrainCircuit, Target, ScanEye } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "Is my data secure?", a: "Absolutely. We rely on HIPAA-compliant cloud storage and end-to-end encryption for all uploaded medical data." },
    { q: "How accurate is the AI model?", a: "Our models utilize state-of-the-art deep learning architectures validated on thousands of clinical cases, achieving a 99.8% detection sensitivity in pre-clinical trials." },
    { q: "What file formats are supported?", a: "We support standard medical imaging formats including DICOM, as well as high-quality JPEG and PNG exports from CT/MRI scanners." },
    { q: "Can I use this for official diagnosis?", a: "PancreasAI is a decision support tool designed to assist medical professionals. It should not replace a doctor's final diagnosis." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full flex flex-col min-h-screen text-slate-900 font-sans selection:bg-brand-primary selection:text-slate-900 noise-bg overflow-hidden">
        
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
         <div className="blob blob-mint w-[500px] h-[500px] top-[-10%] left-[-10%] animate-pulse"></div>
         <div className="blob blob-violet w-[600px] h-[600px] bottom-[10%] right-[-10%] delay-2000"></div>
         <div className="blob blob-blue w-[400px] h-[400px] top-[40%] left-[20%] opacity-20 delay-1000"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/50 shadow-sm"
        >
             <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
             <span className="font-bold text-slate-600 tracking-wide uppercase text-xs">AI-Powered Diagnostics</span>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-serif font-medium leading-[1.05] mb-8 text-slate-900"
        >
            Precision <span className="text-gradient font-light italic">Healthcare</span> <br />
            meets <br />
            <span className="relative inline-block">
                Neural Intelligence.
                <div className="absolute -bottom-2 right-0 w-full h-4 bg-brand-primary/30 -z-10 skew-x-12"></div>
            </span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-xl text-slate-600 mb-12 leading-relaxed"
        >
            Experience the future of oncology with our <span className="text-brand-secondary font-semibold">multi-modal AI</span>. 
            Instant analysis, color-coded risk maps, and clinical-grade accuracy.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-6"
        >
            <Link to="/upload">
                <button className="btn-vibrant flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl">
                    Start Analysis
                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <ArrowUpRight size={18} />
                    </span>
                </button>
            </Link>
            <Link to="/how-it-works" className="font-bold text-slate-700 flex items-center gap-2 hover:text-brand-secondary transition-colors group">
                <span className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-brand-secondary transition-colors shadow-sm">
                    <Play size={16} fill="currentColor" className="ml-1" />
                </span>
                Watch Demo
            </Link>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-32 w-full px-6 relative"
        >
            <div className="relative mx-auto max-w-6xl group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 via-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none z-10" />
                    <div className="aspect-[16/9] w-full">
                        <EmblaCarousel />
                    </div>
                    <motion.div 
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="absolute top-6 right-6 z-20 flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10"
                    >
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-blue-100/80">
                            System Live: Neural Core
                        </span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto z-10 relative">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
            <motion.div variants={itemVariants} className="p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-sm border border-white/50 flex flex-col justify-between h-64 lg:col-span-2 glass-card-hover group">
                <div>
                     <span className="w-12 h-12 bg-blue-50 text-brand-tertiary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Activity />
                     </span>
                    <h3 className="text-5xl font-serif font-bold mb-2 text-slate-900 group-hover:text-brand-tertiary transition-colors">10k+</h3>
                    <p className="text-slate-500 font-medium">Scans analyzed successfully across 50+ clinics.</p>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-brand-tertiary to-brand-secondary"
                    ></motion.div>
                </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="p-8 bg-gradient-to-br from-brand-primary to-emerald-400 rounded-3xl shadow-lg flex flex-col justify-center text-center h-64 hover:scale-105 transition-transform duration-300">
                <h3 className="text-5xl font-serif font-bold text-slate-900 mb-2">99.8%</h3>
                <p className="text-slate-900/80 font-bold uppercase tracking-wider text-sm">Accuracy Rate</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="p-8 bg-slate-900 rounded-3xl shadow-lg flex flex-col justify-center text-center h-64 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-5xl font-serif font-bold mb-2 relative z-10">24/7</h3>
                <p className="text-slate-400 relative z-10">AI Availability</p>
            </motion.div>
        </motion.div>
      </section>

      {/* NEW SECTION: THE PIPELINE (How it Works) */}
      <section className="py-24 px-4 max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">From pixels to <span className="italic font-light">prediction.</span></h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">Our neural pipeline processes thousands of data points in milliseconds to provide clinical clarity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -z-10"></div>
          {[
            { step: "01", title: "Data Ingestion", desc: "Upload DICOM or high-res imaging via our secure, encrypted gateway.", icon: <ShieldCheck className="text-blue-500"/> },
            { step: "02", title: "Neural Synthesis", desc: "State-of-the-art CNNs segment the pancreas and identify anomalies.", icon: <BrainCircuit className="text-purple-500"/> },
            { step: "03", title: "Risk Mapping", desc: "Get a color-coded heatmap with localized probability scores.", icon: <Target className="text-emerald-500"/> },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-2xl">
                {item.icon}
              </div>
              <span className="text-brand-secondary font-mono font-bold mb-2">{item.step}</span>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: VISUALIZATION REVEAL */}
      <section className="py-24 px-4 z-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-white flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700">
                <ScanEye size={16} />
                <span className="font-bold uppercase text-[10px] tracking-widest">Clinical Visualization</span>
            </div>
            <h2 className="text-5xl font-serif font-bold mb-8 text-slate-900">See the <span className="text-blue-600">invisible</span> with Heatmap Overlays.</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our AI generates a <strong>Pixel-Level Probability Map</strong>, highlighting specific regions of interest that require a radiologist's immediate attention.
            </p>
            
            <ul className="space-y-4">
              {['Automated Volumetric Analysis', 'Lesion Localization', 'Vascular Involvement Detection'].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                  </div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1603555501671-8f96b3fce8b5?w=900&auto=format&fit=crop" 
                alt="AI Analysis Preview" 
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-1 bg-brand-primary shadow-[0_0_15px_rgba(87,242,167,1)] z-20"
              />
            </div>
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-6 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-30 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></div>
                <span className="text-sm font-bold text-slate-800">Anomaly Detected: 8.2mm</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-4 max-w-7xl mx-auto z-10">
          <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3 sticky top-32">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                      <h2 className="text-5xl font-serif font-bold mb-6 text-slate-900">
                          Why we are <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">different.</span>
                      </h2>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          Conventional methods take days and lack deep insight. We take seconds and see the invisible.
                      </p>
                       <Link to="/upload">
                        <button className="px-8 py-4 border-2 border-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2 group">
                            Learn more
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                       </Link>
                  </motion.div>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                        { icon: Zap, title: "Speed", desc: "Instantaneous processing of complex DICOM data.", color: "text-amber-500", bg: "hover:bg-amber-50 hover:border-amber-200" },
                        { icon: ShieldCheck, title: "Privacy", desc: "Enterprise-grade encryption for all patient data.", color: "text-emerald-500", bg: "hover:bg-emerald-50 hover:border-emerald-200" },
                        { icon: Users, title: "Team", desc: "Seamless sharing between radiologists and oncologists.", color: "text-blue-500", bg: "hover:bg-blue-50 hover:border-blue-200" },
                        { icon: HeartPulse, title: "Care", desc: "Designed to improve patient outcomes and reduce anxiety.", color: "text-rose-500", bg: "hover:bg-rose-50 hover:border-rose-200" },
                  ].map((feat, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                        className={`p-8 bg-white/70 backdrop-blur-md rounded-[2rem] border border-white shadow-sm transition-all duration-300 group ${feat.bg}`}
                      >
                          <div className={`p-3 rounded-xl bg-white w-fit shadow-sm mb-6 ${feat.color}`}>
                              <feat.icon size={28} />
                          </div>
                          <h3 className="text-2xl font-bold font-serif mb-3 text-slate-900">{feat.title}</h3>
                          <p className="text-slate-500 leading-relaxed">{feat.desc}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden z-10 w-full">
          <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                      <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Doctors' Feedback</span>
                      <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                          "A pivotal step forward in oncology."
                      </h2>
                      <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-full bg-slate-800 overflow-hidden border-2 border-brand-primary">
                              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
                          </div>
                          <div>
                              <p className="font-bold text-white text-lg">Dr. James Alistair</p>
                              <p className="text-sm text-slate-500">Head of Radiology, Metro General</p>
                          </div>
                      </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                      {[
                          { text: "The heatmap visualization is a game changer for explaining diagnoses to patients.", author: "Dr. Emily Chen", location: "SF Memorial" },
                          { text: "Finally, an AI tool that seamlessly integrates with our DICOM workflow.", author: "Dr. Mark Thorne", location: "London Health" }
                      ].map((card, i) => (
                          <motion.div key={i} whileHover={{ scale: 1.02 }} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                              <p className="text-lg text-slate-200 mb-6 italic">"{card.text}"</p>
                              <p className="font-bold text-white text-sm">{card.author} — <span className="text-slate-500 font-normal">{card.location}</span></p>
                          </motion.div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 max-w-4xl mx-auto w-full z-10 relative">
          <h2 className="text-5xl font-serif font-bold text-center mb-16">Common questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm overflow-hidden">
                    <button onClick={() => toggleFaq(i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-primary/5 transition-colors group">
                        <span className="font-bold text-xl font-serif">{faq.q}</span>
                        <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-all ${openFaq === i ? 'rotate-180 bg-brand-primary' : ''}`}>
                            <ChevronDown size={18} />
                        </div>
                    </button>
                    <AnimatePresence>
                        {openFaq === i && (
                            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">{faq.a}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
          </div>
      </section>

      <section className="py-24 px-4 z-10 relative">
  <motion.div 
    whileHover={{ y: -5 }}
    className="max-w-7xl mx-auto bg-white border border-slate-100 rounded-[3rem] p-12 md:p-24 text-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden"
  >
    {/* Subtle Pattern Background */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>

    <div className="relative z-10">
      <div className="w-20 h-20 bg-brand-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
        <Target className="text-brand-secondary" size={40} />
      </div>
      <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6">
        Ready to get started?
      </h2>
      <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto">
        Join over 50+ medical centers currently pilot-testing our AI core for early pancreatic detection.
      </p>
      <Link to="/upload">
        <button className="px-12 py-6 bg-slate-900 text-white rounded-2xl text-xl font-bold shadow-2xl hover:bg-brand-secondary transition-colors duration-300">
          Launch Dashboard
        </button>
      </Link>
    </div>
  </motion.div>
</section>
    </div>
  );
}

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const images = [
    "https://images.unsplash.com/photo-1652787544912-137c7f92f99b?q=80&w=2670&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2671&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1603555501671-8f96b3fce8b5?w=900&auto=format&fit=crop", 
  ];

  return (
    <div className="w-full h-full bg-slate-900 overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((img, index) => (
          <div className="flex-shrink-0 w-full h-full relative" key={index}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
            <img src={img} alt={`Scan ${index + 1}`} className="w-full h-full object-cover opacity-90" />
          </div>
        ))}
      </div>
    </div>
  );
};