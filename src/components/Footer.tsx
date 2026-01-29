import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className= "bg-accent-nude/30 border-t border-pink-100 pt-16 pb-8 px-6" >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12" >
            <div className="space-y-4" >
                <Link to="/" className = "inline-block" >
                    <img src="/assets/logo.png" alt = "SiaCore Logo" className = "h-12 w-auto object-contain" />
                        </Link>
                        < p className = "text-sm text-gray-600 leading-relaxed" >
                            Your ultimate destination for trendy, bold, and girly fashion.Empowering your style journey since forever.
          </p>
                                < div className = "flex items-center gap-4" >
                                    <a
              href="https://instagram.com"
    target = "_blank"
    rel = "noopener noreferrer"
    className = "w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
        >
        <Instagram className="w-5 h-5" />
            </a>
            </div>
            </div>

            < div >
            <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-sm" > Shop </h4>
                < ul className = "space-y-4 text-sm text-gray-600" >
                    <li><Link to="/shop?category=clothing" className = "hover:text-primary transition-colors whitespace-nowrap" > Clothing < /Link></li >
                        <li><Link to="/shop?category=shoes" className = "hover:text-primary transition-colors whitespace-nowrap" > Shoes < /Link></li >
                            <li><Link to="/shop?category=accessories" className = "hover:text-primary transition-colors whitespace-nowrap" > Accessories < /Link></li >
                                <li><Link to="/shop" className = "hover:text-primary transition-colors whitespace-nowrap" > New Arrivals < /Link></li >
                                    </ul>
                                    </div>

                                    < div >
                                    <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-sm" > Help </h4>
                                        < ul className = "space-y-4 text-sm text-gray-600" >
                                            <li><Link to="/contact" className = "hover:text-primary transition-colors whitespace-nowrap" > Contact Us < /Link></li >
                                                <li><Link to="/about" className = "hover:text-primary transition-colors whitespace-nowrap" > About Us < /Link></li >
                                                    <li><a href="#" className = "hover:text-primary transition-colors whitespace-nowrap" > Shipping Info < /a></li >
                                                        <li><a href="#" className = "hover:text-primary transition-colors whitespace-nowrap" > Size Guide < /a></li >
                                                            </ul>
                                                            </div>

                                                            < div >
                                                            <h4 className="font-display font-bold mb-6 uppercase tracking-widest text-sm whitespace-nowrap" > Stay in Touch </h4>
                                                                < p className = "text-xs text-gray-500 mb-4" > Join our pink list for 10 % off your first order! 🎀</p>
                                                                    < form className = "flex gap-2" >
                                                                        <input
              type="email"
    placeholder = "Your email..."
    className = "flex-1 px-4 py-2 rounded-full border border-pink-100 focus:outline-none focus:ring-1 focus:ring-primary text-sm"
        />
        <button className="px-6 py-2 rounded-full bg-primary text-white text-[10px] font-bold hover:bg-primary-dark transition-all uppercase tracking-widest" >
            Join
            </button>
            </form>
            </div>
            </div>

            < div className = "max-w-7xl mx-auto pt-8 border-t border-pink-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-gray-400 uppercase tracking-[0.2em]" >
                <p>© 2026 SIACORE.ALL RIGHTS RESERVED.</p>
                    < div className = "flex gap-8" >
                        <a href="#" className = "hover:text-primary" > Privacy Policy </a>
                            < a href = "#" className = "hover:text-primary" > Terms of Service </a>
                                </div>
                                </div>
                                </footer>
  );
};
