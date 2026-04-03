import { motion } from "framer-motion";
import { HeartPulse, Salad, Activity, AlertCircle, CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Suggestions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const categories = [
    {
      title: "Dietary Guidelines",
      icon: <Salad className="text-emerald-500" size={32} />,
      description: "Nutrition plays a vital role in pancreatic health.",
      tips: [
        "Include cruciferous vegetables like broccoli and cauliflower.",
        "Choose lean proteins (fish, poultry, beans) over red meat.",
        "Limit sugary drinks and processed foods.",
        "Stay hydrated with water and herbal teas."
      ],
      color: "bg-emerald-50 border-emerald-100"
    },
    {
      title: "Lifestyle Changes",
      icon: <Activity className="text-blue-500" size={32} />,
      description: "Active living reduces cancer risks significantly.",
      tips: [
        "Aim for at least 30 minutes of moderate exercise daily.",
        "Maintain a healthy weight to reduce pancreatic stress.",
        "Quit smoking immediately; it's a major risk factor.",
        "Limit alcohol consumption to moderate levels."
      ],
      color: "bg-blue-50 border-blue-100"
    },
    {
      title: "Screening & Prevention",
      icon: <ShieldCheck className="text-purple-500" size={32} />,
      description: "Early detection saves lives. Know when to check.",
      tips: [
        "Consult a doctor if you have a family history of pancreatic cancer.",
        "Monitor for symptoms like persistent abdominal pain or jaundice.",
        "Regular check-ups if you have diabetes or chronic pancreatitis.",
        "Genetic counseling may be recommended for high-risk individuals."
      ],
      color: "bg-purple-50 border-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-secondary font-bold text-sm uppercase tracking-wider">
             <HeartPulse size={16} />
             <span>Health & Wellness</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Proactive Health <span className=" bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">Suggestions</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
             Empower yourself with evidence-based recommendations to support pancreatic health and overall well-being.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[2rem] border ${cat.color} shadow-sm hover:shadow-md transition-all duration-300 bg-white/60 backdrop-blur-sm`}
            >
              <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">{cat.title}</h3>
              <p className="text-slate-600 mb-6">{cat.description}</p>
              <ul className="space-y-3">
                {cat.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="flex-shrink-0 text-brand-secondary mt-1" size={18} />
                    <span className="leading-snug">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Warning Section */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <AlertCircle size={200} className="text-red-500" />
             </div>
             <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
                 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 text-red-500">
                     <AlertCircle size={32} />
                 </div>
                 <div>
                     <h3 className="text-2xl font-bold text-red-900 mb-2">When to see a doctor immediately</h3>
                     <p className="text-red-800/80 text-lg mb-6 leading-relaxed">
                         If you experience sudden, unexplained weight loss, persistent upper abdominal pain that radiates to your back, or yellowing of your skin and eyes (jaundice), seek immediate medical attention. These could be early warning signs.
                     </p>
                     <Link to="/upload">
                        <button className="flex items-center gap-2 font-bold text-red-700 hover:text-red-900 transition-colors group">
                            Start a preliminary AI analysis
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                     </Link>
                 </div>
             </div>
        </motion.div>
      </div>
    </div>
  );
}
