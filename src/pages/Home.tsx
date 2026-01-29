import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ChatBubble } from '../components/ChatBubble';
import { Link } from 'react-router-dom';

const Home = () => {
    const featured = products.slice(0, 4);

    return (
        <div className= "overflow-hidden" >
        {/* Hero Section */ }
        < section className = "relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 lg:pt-40" >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10" >

                {/* Left: Text Content (Still Centered for mobile, left-aligned for desktop) */ }
                < motion.div
    initial = {{ opacity: 0, x: -50 }
}
animate = {{ opacity: 1, x: 0 }}
transition = {{ duration: 0.8 }}
className = "text-center lg:text-left order-2 lg:order-1"
    >
    <div className="mb-8 hidden lg:block" >
        <img src="/assets/logo.png" alt = "SiaCore Logo" className = "h-24 w-auto object-contain drop-shadow-md" />
            </div>

            < span className = "inline-block px-4 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-[0.2em] mb-6" >
                Official Siacore Ambassador ✨
</span>

    < h1 className = "text-6xl md:text-8xl font-display font-bold text-gray-900 leading-[0.8] tracking-tighter mb-8" >
        BE BOLD. < br />
            BE < span className = "text-primary italic" > YOU.</span>
                </h1>

                < p className = "text-gray-500 text-lg mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed" >
                    Curated fashion for the boldest generation.Discover the signature Siacore look worn by the best.
            </p>

                        < div className = "flex flex-wrap justify-center lg:justify-start gap-4" >
                            <Link to="/shop" className = "px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-pink-200 uppercase tracking-widest text-xs" >
                                Shop The Collection
                                    </Link>
                                    < Link to = "/shop?category=shoes" className = "px-10 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105 active:scale-95 uppercase tracking-widest text-xs" >
                                        View Heels
                                            </Link>
                                            </div>
                                            </motion.div>

{/* Right: Brand Character Image */ }
<motion.div
            initial={ { opacity: 0, scale: 0.9, x: 50 } }
animate = {{ opacity: 1, scale: 1, x: 0 }}
transition = {{ duration: 1, type: "spring" }}
className = "relative order-1 lg:order-2"
    >
    <div className="lg:hidden mb-12 flex justify-center" >
        <img src="/assets/logo.png" alt = "SiaCore Logo" className = "h-40 w-auto object-contain drop-shadow-lg" />
            </div>

            < div className = "relative z-10 rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl scale-100 hover:scale-[1.02] transition-transform duration-700 bg-gray-100" >
                <img
                src="/assets/hero-character.jpg"
alt = "Siacore Main Character"
className = "w-full h-full object-cover"
    />
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-8" >
        <p className="text-white font-display font-bold italic text-xl" > "Wear your confidence." </p>
            </div>
            </div>

{/* Glossy accents around image */ }
<div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-100 rounded-full blur-[100px] opacity-60 -z-10" />
    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-60 -z-10" />

        <motion.div 
              animate={ { y: [0, -10, 0] } }
transition = {{ repeat: Infinity, duration: 3 }}
className = "absolute top-1/4 -right-8 glass p-4 rounded-2xl shadow-2xl z-20 hidden md:block"
    >
    <span className="text-primary text-[10px] font-bold uppercase tracking-wider italic" > Hot Right Now 🔥</span>
        </motion.div>
        </motion.div>
        </div>
        </section>

{/* Categories Grid */ }
<section className="py-24 px-6 bg-accent-nude/20" >
    <div className="max-w-7xl mx-auto" >
        <div className="flex justify-between items-end mb-12" >
            <div>
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight" > Shop by < span className = "text-primary" > Category < /span></h2 >
                </div>
                </div>
                < div className = "grid grid-cols-1 md:grid-cols-3 gap-8" >
                {
                    [
                    { name: 'Clothing', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop', link: '/shop?category=clothing' },
                    { name: 'Shoes', image: '/assets/hero-character.jpg', link: '/shop?category=shoes' }, // Using character as product example too
                    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop', link: '/shop?category=accessories' },
            ].map((cat) => (
                        <Link to= { cat.link } key = { cat.name } className = "group relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lg" >
                        <img src={ cat.image } alt = { cat.name } className = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8" >
                    <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider" > { cat.name } </h3>
                    < span className = "text-primary-light text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity" > Shop Now →</span>
                    </div>
                    </Link>
                    ))
                }
                    </div>
                    </div>
                    </section>

{/* Featured Products */ }
<section className="py-24 px-6" >
    <div className="max-w-7xl mx-auto" >
        <div className="flex justify-between items-end mb-12" >
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight" > Trending < span className = "text-primary" > Now < /span></h2 >
                <Link to="/shop" className = "text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-primary transition-colors border-b border-pink-100 pb-1" > View All Products </Link>
                    </div>
                    < div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" >
                    {
                        featured.map((product) => (
                            <ProductCard key= { product.id } product = { product } />
            ))
                    }
                        </div>
                        </div>
                        </section>

                        < ChatBubble />
                        </div>
  );
};

export default Home;
