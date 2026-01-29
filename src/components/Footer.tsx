import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className= "bg-black border-t border-white/5 pt-16 pb-8 px-6 text-white" >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12" >
            <div className="space-y-4" >
                <Link to="/" className = "inline-block" >
                    <img src="/assets/logo.png" alt = "SiaCore Logo" className = "h-12 w-auto object-contain" />
                        </Link>
                        < p className = "text-sm text-gray-400 leading-relaxed" >
                            Your ultimate destination for trendy, bold, and girly fashion.Empowering your style journey since forever.
          </p>
                                < div className = "flex items-center gap-4" >
                                    <a
              href="https://instagram.com"
    target = "_blank"
    rel = "noopener noreferrer"
    className = "w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors shadow-lg shadow-pink-500/20"
        >
        <Instagram className="w-5 h-5" />
            </a>
            </div>
            </div>

            < div >
            <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-sm text-white" > Shop </h4>
                < ul className = "space-y-4 text-sm text-gray-400 font-medium" >
                    <li><Link to="/shop?category=clothing" className = "hover:text-primary transition-colors whitespace-nowrap" > Clothing < /Link></li >
                        <li><Link to="/shop?category=shoes" className = "hover:text-primary transition-colors whitespace-nowrap" > Shoes < /Link></li >
                            <li><Link to="/shop?category=accessories" className = "hover:text-primary transition-colors whitespace-nowrap" > Accessories < /Link></li >
                                <li><Link to="/shop" className = "hover:text-primary transition-colors whitespace-nowrap" > New Arrivals < /Link></li >
                                    </ul>
                                    </div>

                                    < div >
                                    <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-sm text-white" > Help </h4>
                                        < ul className = "space-y-4 text-sm text-gray-400 font-medium" >
                                            <li><Link to="/contact" className = "hover:text-primary transition-colors whitespace-nowrap" > Contact Us < /Link></li >
                                                <li><Link to="/about" className = "hover:text-primary transition-colors whitespace-nowrap" > About Us < /Link></li >
                                                    <li><a href="#" className = "hover:text-primary transition-colors whitespace-nowrap" > Shipping Info < /a></li >
                                                        <li><a href="#" className = "hover:text-primary transition-colors whitespace-nowrap" > Size Guide < /a></li >
                                                            </ul>
                                                            </div>

                                                            < div >
                                                            <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-sm text-white whitespace-nowrap" > Stay in Touch </h4>
                                                                < p className = "text-xs text-gray-500 mb-4" > Join our pink list for 10 % off your first order! 🎀</p>
                                                                    < form className = "flex gap-2" >
                                                                        <input
              type="email"
    placeholder = "Your email..."
    className = "flex-1 px-4 py-2 rounded-full border border-white/10 bg-white/5 focus:outline-none focus:ring-1 focus:ring-primary text-sm text-white placeholder:text-gray-600"
        />
        <button className="px-6 py-2 rounded-full bg-primary text-white text-[10px] font-bold hover:bg-primary-dark transition-all uppercase tracking-widest shadow-lg shadow-pink-500/20" >
            Join
            </button>
            </form>
            </div>
            </div>

            < div className = "max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-gray-500 uppercase tracking-[0.2em]" >
                <p>© 2026 SIACORE.ALL RIGHTS RESERVED.</p>
                    < div className = "flex gap-8" >
                        <a href="#" className = "hover:text-primary transition-colors" > Privacy Policy </a>
                            < a href = "#" className = "hover:text-primary transition-colors" > Terms of Service </a>
                                </div>
                                </div>
                                </footer>
  );
};
