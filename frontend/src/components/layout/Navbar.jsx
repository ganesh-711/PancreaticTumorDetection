import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../ui/Logo";

const NAV_ITEMS = [
  { path: "/#services", label: "Services", hasDropdown: true },
  { path: "/how-it-works", label: "Expertise", hasDropdown: true },
  { path: "/insights", label: "Cases" },
  { path: "/suggestions", label: "Suggestions" },
  
  { path: "/about", label: "About" },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    open: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1], // Spring-like ease
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}
      >
        <div className={`
            rounded-full px-6 py-3 max-w-6xl w-full flex items-center justify-between
            transition-all duration-500
            ${scrolled 
                ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/20 border border-white/50' 
                : 'bg-white shadow-md shadow-slate-200/50 border border-slate-100'
            }
        `}>
            
            {/* LOGO - Modern Animated */}
            <Link to="/" className="mr-8 z-50">
               <Logo />
            </Link>

            {/* DESKTOP MENU - Staggered Hover */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 group relative py-2"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={14} className="text-slate-400 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA & MOBILE TOGGLE */}
            <div className="flex items-center gap-4 pl-4 lg:pl-8">
                 <div className="hidden lg:flex items-center gap-4">
                     <span className="text-sm font-bold text-slate-900">Start Analysis</span>
                     <Link to="/upload">
                        <motion.button 
                            whileHover={{ scale: 1.05, rotate: 3 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-slate-900 shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all border border-brand-primary/50"
                        >
                            <ArrowUpRight size={20} strokeWidth={2.5} />
                        </motion.button>
                     </Link>
                 </div>

                {/* MOBILE MENU BUTTON */}
                <button
                className="lg:hidden text-slate-900 p-2 ml-auto z-50 relative"
                onClick={() => setIsOpen(!isOpen)}
                >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <Menu size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
                </button>
            </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden lg:hidden z-40"
            >
              <div className="flex flex-col p-6 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <motion.div key={item.label} variants={itemVariants}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-lg font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                      >
                        {item.label}
                      </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="pt-4 mt-2 border-t border-slate-100">
                    <Link to="/upload" onClick={() => setIsOpen(false)} className="flex items-center justify-between p-4 bg-slate-900 rounded-xl group active:scale-95 transition-transform">
                        <span className="font-bold text-white">Start Analysis</span>
                        <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-slate-900">
                            <ArrowUpRight size={18} />
                        </div>
                    </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}