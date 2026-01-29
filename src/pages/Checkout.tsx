import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Truck, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, cartTotal } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            alert('Order placed successfully! 🎀 Thank you for shopping with SIACORE.');
            setIsProcessing(false);
            navigate('/');
        }, 2000);
    };

    if (cart.length === 0) {
        return (
            <div className= "min-h-screen pt-32 text-center" >
            <h2 className="text-2xl font-display font-bold" > Your bag is empty 🎀</h2>
                < button onClick = {() => navigate('/shop')} className = "mt-4 text-primary font-bold underline" > Go back to shop </button>
                    </div>
    );
  }

return (
    <div className= "min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto" >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" >
        {/* Checkout Form */ }
        < motion.div initial = {{ opacity: 0, y: 20 }} animate = {{ opacity: 1, y: 0 }}>
            <button onClick={ () => navigate(-1) } className = "flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors mb-8" >
                <ArrowLeft className="w-3 h-3" /> Back
                    </button>

                    < h1 className = "text-4xl font-display font-bold mb-12 uppercase tracking-tighter italic" > Checkout </h1>

                        < form onSubmit = { handleCheckout } className = "space-y-8" >
                            <div className="space-y-4" >
                                <h3 className="text-xs font-bold uppercase tracking-widest border-b border-pink-50 pb-2" > Shipping Information </h3>
                                    < div className = "grid grid-cols-2 gap-4" >
                                        <input required type = "text" placeholder = "First Name" className = "w-full px-6 py-4 rounded-2xl border border-pink-50 bg-pink-50/10 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                                            <input required type = "text" placeholder = "Last Name" className = "w-full px-6 py-4 rounded-2xl border border-pink-50 bg-pink-50/10 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                                                </div>
                                                < input required type = "email" placeholder = "Email Address" className = "w-full px-6 py-4 rounded-2xl border border-pink-50 bg-pink-50/10 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                                                    <input required type = "text" placeholder = "Address" className = "w-full px-6 py-4 rounded-2xl border border-pink-50 bg-pink-50/10 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                                                        </div>

                                                        < div className = "space-y-4" >
                                                            <div className="flex items-center justify-between border-b border-pink-50 pb-2" >
                                                                <h3 className="text-xs font-bold uppercase tracking-widest" > Payment </h3>
                                                                    < div className = "flex gap-2" >
                                                                        <CreditCard className="w-4 h-4 text-gray-400" />
                                                                            <div className="w-6 h-4 bg-gray-200 rounded" />
                                                                                <div className="w-6 h-4 bg-gray-200 rounded" />
                                                                                    </div>
                                                                                    </div>
                                                                                    < p className = "text-[10px] text-gray-400 uppercase tracking-[0.2em]" > Secure encrypted checkout guaranteed ✨</p>
                                                                                        </div>

                                                                                        < button
disabled = { isProcessing }
className = "w-full h-16 bg-black text-white font-bold rounded-2xl hover:bg-gray-900 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4"
    >
    { isProcessing? 'Processing...': 'Complete Purchase' }
    </button>
    </form>
    </motion.div>

{/* Order Summary */ }
<motion.div 
          initial={ { opacity: 0, x: 20 } }
animate = {{ opacity: 1, x: 0 }}
className = "lg:bg-pink-50/30 lg:p-12 lg:rounded-[3rem] h-fit"
    >
    <h3 className="text-xs font-bold uppercase tracking-widest mb-8" > Order Summary </h3>
        < div className = "space-y-6 mb-8 max-h-96 overflow-y-auto pr-4" >
        {
            cart.map((item) => (
                <div key= {`${item.id}-${item.size}`} className = "flex gap-4" >
                    <div className="w-16 h-20 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0" >
                        <img src={ item.image } alt = { item.name } className = "w-full h-full object-cover" />
                            </div>
                            < div className = "flex-1 flex flex-col justify-center" >
                                <h4 className="font-display font-bold text-xs uppercase tracking-tight" > { item.name } </h4>
                                    < p className = "text-[10px] text-gray-400 uppercase tracking-widest" > Qty: { item.quantity } | Size: { item.size } </p>
                                        </div>
                                        < div className = "flex items-center font-display font-bold text-sm" > ${ item.price * item.quantity } </div>
                                            </div>
            ))}
</div>

    < div className = "space-y-4 pt-8 border-t border-pink-100" >
        <div className="flex justify-between text-sm" >
            <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold" > Subtotal </span>
                < span className = "font-display font-bold" > ${ cartTotal } </span>
                    </div>
                    < div className = "flex justify-between text-sm" >
                        <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold" > Shipping </span>
                            < span className = "text-primary font-bold text-[10px] uppercase tracking-widest" > FREE </span>
                                </div>
                                < div className = "flex justify-between text-lg pt-4" >
                                    <span className="font-display font-bold uppercase tracking-widest text-xs" > Total </span>
                                        < span className = "font-display font-bold text-primary" > ${ cartTotal } </span>
                                            </div>
                                            </div>
                                            </motion.div>
                                            </div>
                                            </div>
  );
};

export default Checkout;
