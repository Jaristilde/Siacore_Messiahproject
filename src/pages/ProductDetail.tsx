import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const product = products.find((p) => p.id === id);

    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className= "min-h-screen pt-32 text-center" >
            <h2 className="text-2xl font-display font-bold" > Product not found 🎀</h2>
                < button onClick = {() => navigate('/shop')} className = "mt-4 text-primary font-bold underline" > Back to shop </button>
                    </div>
    );
  }

const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
        alert('Please select a size first! 🎀');
        return;
    }
    addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize || 'One Size',
        quantity,
        category: product.category,
    });
    alert('Added to cart! ✨');
};

return (
    <div className= "min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto bg-black text-white" >
    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 mb-8" >
        <Link to="/" className = "hover:text-primary transition-colors" > Home </Link>
            < ChevronRight className = "w-3 h-3" />
                <Link to="/shop" className = "hover:text-primary transition-colors" > Shop </Link>
                    < ChevronRight className = "w-3 h-3" />
                        <span className="text-gray-300" > { product.name } </span>
                            </div>

                            < div className = "grid grid-cols-1 lg:grid-cols-2 gap-16" >
                                {/* Image Gallery */ }
                                < motion.div
initial = {{ opacity: 0, x: -20 }}
animate = {{ opacity: 1, x: 0 }}
className = "space-y-4"
    >
    <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl" >
        <img src={ product.images[0] } alt = { product.name } className = "w-full h-full object-cover" />
            </div>
            < div className = "grid grid-cols-4 gap-4" >
            {
                product.images.map((img, idx) => (
                    <div key= { idx } className = "aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/5 cursor-pointer hover:border-primary transition-colors" >
                    <img src={ img } alt = {`${product.name} ${idx}`} className = "w-full h-full object-cover" />
                        </div>
            ))}
</div>
    </motion.div>

{/* Product Info */ }
<motion.div
          initial={ { opacity: 0, x: 20 } }
animate = {{ opacity: 1, x: 0 }}
className = "flex flex-col"
    >
    <div className="mb-8" >
        <div className="flex items-center gap-2 mb-4" >
            <div className="flex text-primary" >
                { [...Array(5)].map((_, i) => <Star key={ i } className = "w-4 h-4 fill-current" />) }
                </div>
                < span className = "text-[10px] font-bold text-gray-500 uppercase tracking-widest" > (24 Reviews)</span>
                    </div>
                    < h1 className = "text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-tighter italic" >
                        { product.name }
                        </h1>
                        < p className = "text-3xl font-display font-bold text-primary" > ${ product.price } </p>
                            </div>

                            < p className = "text-gray-400 mb-10 leading-relaxed max-w-md font-medium" >
                                { product.description }
                                </p>

                                < div className = "space-y-8 mb-12" >
                                    <div>
                                    <div className="flex justify-between items-center mb-4" >
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400" > Select Size </span>
                                            < button className = "text-[10px] font-bold text-primary uppercase tracking-widest border-b border-primary" > Size Guide </button>
                                                </div>
                                                < div className = "flex flex-wrap gap-3" >
                                                {
                                                    product.sizes.map((size) => (
                                                        <button
                    key= { size }
                    onClick = {() => setSelectedSize(size)}
className = {`w-14 h-14 rounded-2xl flex items-center justify-center text-xs font-bold transition-all border ${selectedSize === size
        ? 'bg-primary border-primary text-white shadow-lg shadow-pink-500/20 scale-110'
        : 'bg-white/5 border-white/10 text-gray-400 hover:border-primary hover:text-primary'
    }`}
                  >
    { size }
    </button>
                ))}
</div>
    </div>

    < div >
    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block" > Quantity </span>
        < div className = "flex items-center border border-white/10 rounded-full px-4 py-2 w-fit bg-white/5" >
            <button onClick={ () => setQuantity(Math.max(1, quantity - 1)) } className = "p-2 text-gray-400 hover:text-primary" > -</button>
                < span className = "w-12 text-center font-bold text-sm text-white" > { quantity } </span>
                    < button onClick = {() => setQuantity(quantity + 1)} className = "p-2 text-gray-400 hover:text-primary" > +</button>
                        </div>
                        </div>
                        </div>

                        < div className = "flex gap-4 mb-12" >
                            <button
              onClick={ handleAddToCart }
className = "flex-1 h-14 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-pink-500/20 uppercase tracking-widest text-xs flex items-center justify-center gap-3"
    >
    <ShoppingBag className="w-4 h-4" />
        Add to Bag
            </button>
            < button className = "w-14 h-14 border border-white/10 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all" >
                <Heart className="w-5 h-5" />
                    </button>
                    </div>

                    < div className = "grid grid-cols-2 gap-4 py-8 border-t border-white/10" >
                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-500" >
                            <ShieldCheck className="w-5 h-5 text-primary" />
                                Secure Checkout
                                    </div>
                                    < div className = "flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-500" >
                                        <ShoppingBag className="w-5 h-5 text-primary" />
                                            Free Shipping over $100
                                                </div>
                                                </div>
                                                </motion.div>
                                                </div>
                                                </div>

  );
};

export default ProductDetail;
