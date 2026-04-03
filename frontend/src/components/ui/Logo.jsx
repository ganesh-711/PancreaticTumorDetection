import { motion } from "framer-motion";

export function Logo({ className = "w-6 h-6", textClassName = "text-xl", link = true }) {
  const content = (
    <div className="flex items-center gap-3 group">
        <div className="w-10 h-10 flex items-center justify-center bg-slate-900 rounded-xl relative overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
            <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
            />
            <LogoSvg className={`${className} text-white relative z-10`} />
        </div>
        <span className={`font-bold text-slate-900 tracking-tight font-serif ${textClassName}`}>
        Pancreas<span className="text-brand-secondary">AI</span>
        </span>
    </div>
  );

  return content;
}

export function LogoIcon({ className = "w-6 h-6", containerClass = "w-10 h-10" }) {
    return (
        <div className={`${containerClass} flex items-center justify-center bg-slate-900 rounded-xl relative overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300`}>
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             <LogoSvg className={`${className} text-white relative z-10`} />
        </div>
    )
}

export function LogoSvg({ className = "w-6 h-6", ...props }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05" />
        <path d="M12 22.08V12" />
    </svg>
  );
}
