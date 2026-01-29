import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { CartDrawer } from './CartDrawer';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const { cartCount } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
        <motion.nav
                initial= {{ y: -100 }
}
animate = {{ y: 0 }}
className = "fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4"
    >
    <div className="max-w-7xl mx-auto flex items-center justify-between relative h-16" >
        {/* Left: Navigation and Menu */ }
        < div className = "flex items-center gap-6" >
            <button className="lg:hidden p-2 hover:text-primary transition-colors text-white" >
                <Menu className="w-6 h-6" />
                    </button>
                    < div className = "hidden lg:flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500" >
                        <Link to="/shop" className = "hover:text-primary transition-colors" > Shop All </Link>
                            < Link to = "/shop?category=clothing" className = "hover:text-primary transition-colors" > Clothing </Link>
                                < Link to = "/shop?category=shoes" className = "hover:text-primary transition-colors" > Shoes </Link>
                                    </div>
                                    </div>

{/* Center: Centered Larger Logo */ }
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center" >
    <Link to="/" className = "flex items-center group" >
        <motion.img 
                                whileHover={ { scale: 1.05 } }
src = "/assets/logo.png"
alt = "SiaCore Logo"
className = "h-16 md:h-20 w-auto object-contain drop-shadow-xl"
    />
    </Link>
    </div>

{/* Right: Actions */ }
<div className="flex items-center gap-4" >
    <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mr-4" >
        <Link to="/shop?category=accessories" className = "hover:text-primary transition-colors" > Accessories </Link>
            </div>
            < button className = "p-2 hover:text-primary transition-colors text-gray-400" >
                <Search className="w-5 h-5" />
                    </button>
                    < a href = "https://instagram.com" target = "_blank" rel = "noopener noreferrer" className = "p-2 hover:text-primary transition-colors hidden sm:block text-gray-400" >
                        <Instagram className="w-5 h-5" />
                            </a>
                            < button
onClick = {() => setIsCartOpen(true)}
className = "p-2 hover:text-primary transition-colors relative text-white"
    >
    <ShoppingBag className="w-5 h-5" />
        { cartCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[9px] flex items-center justify-center rounded-full font-bold shadow-lg shadow-pink-500/20 italic" >
                { cartCount }
                </span>
                            )}
</button>
    </div>
    </div>
    </motion.nav>
    < CartDrawer isOpen = { isCartOpen } onClose = {() => setIsCartOpen(false)} />
        </>
    );
};
