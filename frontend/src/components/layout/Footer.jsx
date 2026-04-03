import { Linkedin, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '../ui/Logo'

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/">
                <Logo textClassName="text-2xl" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Revolutionizing early detection through advanced AI analysis. Saving lives with pixels and patterns.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-primary hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              {['How It Works', 'Insights', 'Stories', 'Research'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-slate-500 hover:text-brand-primary transition-colors flex items-center gap-2 group font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-brand-primary transition-colors font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="font-bold text-slate-900 text-lg mb-6">Stay Updated</h3>
            <p className="text-slate-500 text-sm mb-4">Join our newsletter for the latest breakthroughs.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all pr-12 shadow-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-brand-primary rounded-md text-white hover:bg-brand-secondary transition-colors shadow-md">
                <ArrowRight size={16} />
              </button>
            </form>
          </div> */}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 PancreasAI Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-slate-500 text-xs flex items-center gap-2 font-medium bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}