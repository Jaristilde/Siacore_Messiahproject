import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    return (
        <AnimatePresence>
        { isOpen && (
            <>
            <motion.div
            initial= {{ opacity: 0 }
}
animate = {{ opacity: 1 }}
exit = {{ opacity: 0 }}
onClick = { onClose }
className = "fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
    />
    <motion.div
            initial={ { x: '100%' } }
animate = {{ x: 0 }}
exit = {{ x: '100%' }}
transition = {{ type: 'spring', damping: 25, stiffness: 200 }}
className = "fixed right-0 top-0 bottom-0 w-full max-w-md bg-black z-[101] shadow-2xl flex flex-col border-l border-white/10"
    >
    <div className="p-8 border-b border-white/10 flex items-center justify-between" >
        <div className="flex items-center gap-3" >
            <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-display font-bold uppercase tracking-widest italic text-white" > Your Bag </h2>
                    </div>
                    < button
onClick = { onClose }
className = "p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-primary"
    >
    <X className="w-6 h-6" />
        </button>
        </div>

        < div className = "flex-1 overflow-y-auto p-8 space-y-8" >
        {
            cart.length === 0 ? (
                <div className= "h-full flex flex-col items-center justify-center text-center space-y-4" >
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-white/10" />
                        </div>
                        < p className="text-gray-500 font-display italic" > Your bag is empty, babe! 🎀</p>
            < button
onClick = {() => { onClose(); navigate('/shop'); }}
className = "text-primary font-bold text-xs uppercase tracking-widest border-b border-primary pb-1"
    >
    Start Shopping
        </button>
        </div>
              ) : (
    cart.map((item) => (
        <div key= {`${item.id}-${item.size}`} className = "flex gap-4" >
        <div className="w-24 h-32 rounded-2xl overflow-hidden bg-white/5 flex-shrink-0 border border-white/5" >
    <img src={ item.image } alt = { item.name } className = "w-full h-full object-cover" />
    </div>
    < div className = "flex-1 flex flex-col justify-between" >
    <div>
    <div className="flex justify-between items-start mb-1" >
    <h3 className="font-display font-bold text-sm uppercase tracking-tight text-white" > { item.name } </h3>
    < button 
                            onClick = {() => removeFromCart(item.id, item.size)}
        className = "text-gray-500 hover:text-red-400 transition-colors"
        >
        <Trash2 className="w-4 h-4" />
        </button>
        </div>
    < p className = "text-[10px] text-gray-500 uppercase tracking-widest mb-1" > Size: { item.size } </p>
    < p className = "font-display font-bold text-primary text-sm" > ${ item.price } </p>
    </div>
    < div className = "flex items-center justify-between" >
    <div className="flex items-center border border-white/10 rounded-full px-3 py-1 scale-90 -ml-2 bg-white/5" >
    <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} className = "p-1 text-gray-500 hover:text-primary" >
    <Minus className="w-3 h-3" />
    </button>
    < span className = "w-8 text-center text-xs font-bold text-white" > { item.quantity } </span>
    < button onClick = {() => updateQuantity(item.id, item.size, item.quantity + 1)} className = "p-1 text-gray-500 hover:text-primary" >
    <Plus className="w-3 h-3" />
    </button>
    </div>
    </div>
    </div>
    </div>
    ))
              )}
</div>

{
    cart.length > 0 && (
        <div className="p-8 border-t border-white/10 bg-white/5 space-y-6" >
            <div className="space-y-2" >
                <div className="flex justify-between text-sm" >
                    <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold" > Subtotal </span>
                        < span className = "font-display font-bold text-white" > ${ cartTotal } </span>
                            </div>
                            < div className = "flex justify-between text-sm" >
                                <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold" > Shipping </span>
                                    < span className = "text-primary font-bold text-[10px] uppercase tracking-widest" > Calculated at checkout </span>
                                        </div>
                                        </div>
                                        < button
    onClick = {() => { onClose(); navigate('/checkout'); }
}
className = "w-full h-14 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-pink-500/20 uppercase tracking-widest text-xs flex items-center justify-center gap-3"
    >
    Checkout Now
        < ArrowRight className = "w-4 h-4" />
            </button>
            </div>
            )}
</motion.div>

    </>
      )}
</AnimatePresence>
  );
};
