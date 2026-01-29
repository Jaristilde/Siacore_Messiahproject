import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
      initial= {{ opacity: 0, y: 20 }
}
whileInView = {{ opacity: 1, y: 0 }}
viewport = {{ once: true }}
className = "group"
    >
    <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-gray-100 mb-4" >
        <img
          src={ product.images[0] }
alt = { product.name }
className = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
{
    product.isNew && (
        <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
            New
            </div>
        )
}
    < div className = "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100" >
        <button 
            onClick={ () => window.location.href = `/product/${product.id}` }
className = "px-6 py-2 bg-white text-black text-xs font-bold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
    >
    Quick View
        </button>
        </div>
        </div>

        < div className = "space-y-1" >
            <div className="flex justify-between items-start" >
                <h3 className="font-display font-medium text-gray-900 group-hover:text-primary transition-colors cursor-pointer" onClick = {() => window.location.href = `/product/${product.id}`}>
                    { product.name }
                    </h3>
                    < p className = "font-display font-bold text-gray-900" > ${ product.price } </p>
                        </div>
                        < p className = "text-[10px] text-gray-400 uppercase tracking-widest" > { product.category } </p>
                            </div>
                            </motion.div>
  );
};
