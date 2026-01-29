import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ChatBubble } from '../components/ChatBubble';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Play, Pause } from 'lucide-react';

const Home = () => {
    const featured = products.slice(0, 4);
    const categories = [
        { name: 'Clothing', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop', link: '/shop?category=clothing' },
        { name: 'Shoes', image: '/assets/hero-character.jpg', link: '/shop?category=shoes' },
        { name: 'Accessories', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop', link: '/shop?category=accessories' },
    ];

    // Auto-rotation state for Featured Products
    const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setActiveFeaturedIndex((prev) => (prev + 1) % featured.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isPlaying, featured.length]);

    return (
        <div className= "overflow-hidden bg-black text-white" >
        {/* Hero Section - Video Centric */ }
        < section className = "relative min-h-screen flex flex-col items-center justify-center overflow-hidden" >
            {/* Main Character Video Background */ }
            < div className = "absolute inset-0 z-0" >
                <video 
            autoPlay
    muted
    loop
    playsInline
    className = "w-full h-full object-cover scale-105 brightness-[0.6] sepia-[0.2] saturate-[1.2]"
        >
        <source src="/assets/MessiaBoutique.mov" type = "video/quicktime" />
            <source src="/assets/MessiaBoutique.mov" type = "video/mp4" />
                </video>
    {/* Overlay Gradients */ }
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
            </div>

    {/* Hero Content */ }
    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20" >
        <motion.div
            initial={ { opacity: 0, y: 30 } }
    animate = {{ opacity: 1, y: 0 }
}
transition = {{ duration: 1 }}
className = "flex flex-col items-center"
    >
    <motion.img 
              initial={ { scale: 0.8 } }
animate = {{ scale: 1 }}
transition = {{ duration: 1.2, type: "spring" }}
src = "/assets/logo.png"
alt = "Siacore Logo"
className = "h-48 md:h-72 w-auto object-contain drop-shadow-[0_0_50px_rgba(255,51,153,0.3)] mb-8"
    />

    <motion.div
              initial={ { opacity: 0 } }
animate = {{ opacity: 1 }}
transition = {{ delay: 0.5 }}
className = "inline-block px-6 py-2 bg-primary/20 backdrop-blur-xl rounded-full border border-primary/30 mb-8"
    >
    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-primary-light" >
        Main Character Energy Only ✨
</span>
    </motion.div>

    < h1 className = "text-6xl md:text-[10rem] font-display font-bold leading-[0.8] tracking-tighter italic mb-12" >
        THE < span className = "text-primary block md:inline not-italic" > COLLECTION </span>
            </h1>

            < div className = "flex flex-wrap justify-center gap-6" >
                <Link to="/shop" className = "group relative px-12 py-5 bg-primary text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,51,153,0.3)]" >
                    <span className="relative z-10 uppercase tracking-widest text-sm" > Shop All Babe </span>
                        < div className = "absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </Link>
                            < Link to = "/shop?category=shoes" className = "px-12 py-5 border-2 border-white/20 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white hover:text-black transition-all transform hover:scale-105 active:scale-95 uppercase tracking-widest text-sm" >
                                Shop Heels
                                    </Link>
                                    </div>
                                    </motion.div>
                                    </div>

{/* Scroll Indicator */ }
<motion.div 
          animate={ { y: [0, 10, 0] } }
transition = {{ repeat: Infinity, duration: 2 }}
className = "absolute bottom-10 left-1/2 -translate-x-1/2 text-primary flex flex-col items-center gap-2 opacity-50"
    >
    <span className="text-[10px] font-bold uppercase tracking-[0.3em]" > Scroll </span>
        < div className = "w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
            </section>

{/* Auto-Rotating Featured Section */ }
<section className="py-32 px-6 relative bg-black" >
    <div className="max-w-7xl mx-auto" >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4" >
            <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block" > Trending Now </span>
                < h2 className = "text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter" >
                    Most < span className = "italic" > Wanted </span>
                        </h2>
                        </div>
                        < div className = "flex items-center gap-4" >
                            <button 
                onClick={ () => setIsPlaying(!isPlaying) }
className = "w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
title = { isPlaying? "Pause Rotation": "Play Rotation" }
    >
    { isPlaying?<Pause className = "w-4 h-4" /> : <Play className="w-4 h-4 ml-1" />}
</button>
    < div className = "flex gap-2" >
    {
        featured.map((_, i) => (
            <button
                    key= { i }
                    onClick = {() => {
            setActiveFeaturedIndex(i);
                      setIsPlaying(false);
        }}
className = {`h-1 rounded-full transition-all duration-500 ${activeFeaturedIndex === i ? 'w-12 bg-primary' : 'w-4 bg-white/10'}`}
                  />
                ))}
</div>
    </div>
    </div>

    < div className = "relative" >
        <AnimatePresence mode="wait" >
            <motion.div
                key={ activeFeaturedIndex }
initial = {{ opacity: 0, x: 20 }}
animate = {{ opacity: 1, x: 0 }}
exit = {{ opacity: 0, x: -20 }}
transition = {{ duration: 0.5 }}
className = "grid grid-cols-1 md:grid-cols-4 gap-8"
    >
    {/* Mobile version shows 1, desktop shows 4 with highlighting the active one */ }
    < div className = "md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" >
    {
        featured.map((product, idx) => (
            <motion.div
                      key= { product.id }
                      animate = {{
            scale: activeFeaturedIndex === idx ? 1.05 : 1,
            opacity: activeFeaturedIndex === idx ? 1 : 0.6
        }}
className = "relative"
    >
    <ProductCard product={ product } />
{
    activeFeaturedIndex === idx && (
        <div className="absolute -inset-4 border border-primary/20 rounded-[2.5rem] -z-10 animate-pulse" />
                      )
}
</motion.div>
                  ))}
</div>
    </motion.div>
    </AnimatePresence>

{/* Quick Navigation Controls */ }
<button 
              onClick={
    () => {
        setActiveFeaturedIndex((prev) => (prev - 1 + featured.length) % featured.length);
        setIsPlaying(false);
    }
}
className = "absolute left-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-primary transition-all hidden lg:flex"
    >
    <ChevronLeft className="w-6 h-6" />
        </button>
        < button
onClick = {() => {
    setActiveFeaturedIndex((prev) => (prev + 1) % featured.length);
    setIsPlaying(false);
}}
className = "absolute right-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-primary transition-all hidden lg:flex"
    >
    <ChevronRight className="w-6 h-6" />
        </button>
        </div>
        </div>
        </section>

{/* Categories - Auto-Highlighting Banner */ }
<section className="py-24 px-6 bg-white/[0.02] border-y border-white/5 relative overflow-hidden" >
    <div className="max-w-7xl mx-auto" >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
        {
            categories.map((cat, i) => (
                <motion.div
                key= { cat.name }
                whileHover = {{ scale: 1.02 }}
className = "relative group aspect-[4/5] rounded-[3rem] overflow-hidden"
    >
    <Link to={ cat.link }>
        <img 
                    src={ cat.image }
alt = { cat.name }
className = "w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-10 left-10" >
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block" > Category 0{ i + 1 } </span>
                < h3 className = "text-4xl font-display font-bold uppercase tracking-tight italic" > { cat.name } </h3>
                    </div>
                    < div className = "absolute top-10 right-10" >
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all" >
                            <ChevronRight className="w-5 h-5" />
                                </div>
                                </div>
                                </Link>
                                </motion.div>
            ))}
</div>
    </div>

{/* Animated Background Text */ }
<div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none -z-10 opacity-5" >
    <motion.div 
             animate={ { x: [0, -1000] } }
transition = {{ duration: 30, repeat: Infinity, ease: "linear" }}
className = "whitespace-nowrap text-[20rem] font-display font-bold uppercase italic"
    >
    SIACORE SIACORE SIACORE SIACORE SIACORE SIACORE
        </motion.div>
        </div>
        </section>

{/* Final "Brand Reel" Reinforcement */ }
<section className="py-32 px-6 relative bg-black" >
    <div className="max-w-4xl mx-auto text-center" >
        <motion.div
            initial={ { opacity: 0, scale: 0.9 } }
whileInView = {{ opacity: 1, scale: 1 }}
className = "space-y-12"
    >
    <div className="relative inline-block" >
        <div className="absolute -inset-8 bg-primary/10 rounded-full blur-[80px] animate-pulse" />
            <img src="/assets/logo.png" alt = "SiaCore Logo" className = "h-32 w-auto relative z-10 mx-auto" />
                </div>

                < h2 className = "text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-none" >
                    DREAM IN < span className = "text-primary italic" > PINK </span>
                        </h2>

                        < p className = "text-gray-400 text-xl font-medium max-w-xl mx-auto leading-relaxed" >
                            Step into the world of Siacore.Bold, fearless, and unapologetically girly.Your next favorite look is waiting here.
            </p>

                                < Link to = "/shop" className = "inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-bold rounded-2xl hover:bg-primary hover:text-white transition-all transform hover:scale-105 active:scale-95 uppercase tracking-widest text-sm" >
                                    Discover shop
                                        < ChevronRight className = "w-5 h-5" />
                                            </Link>
                                            </motion.div>
                                            </div>
                                            </section>

                                            < ChatBubble />
                                            </div>
  );
};

export default Home;
