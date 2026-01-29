import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className= "min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto text-center bg-black text-white" >
        <motion.div
        initial={ { opacity: 0, y: 20 } }
    animate = {{ opacity: 1, y: 0 }
}
className = "space-y-12"
    >
    <div className="flex justify-center" >
        <motion.img 
            whileHover={ { scale: 1.05 } }
src = "/assets/logo.png"
alt = "Siacore Logo"
className = "h-32 md:h-48 w-auto object-contain drop-shadow-xl"
    />
    </div>

    < h1 className = "text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter italic text-primary" > Our Story </h1>

        < div className = "space-y-8 text-white/80 leading-relaxed text-xl max-w-2xl mx-auto font-medium" >
            <p>
            Welcome to SIACORE, your ultimate destination for everything trendy, bold, and unapologetically girly. 🎀
</p>
    <p>
            Born from a passion for Gen Z style and a love for high - fashion aesthetics, we curated this boutique to empower the modern girl.We believe every outfit is a statement, and every accessory tells a story.
          </p>
    <p>
            Our collection is designed for the bold, the dreamers, and the trendsetters.From killer heels to snatched sets, we've got you covered for every vibe.
    </p>
    </div>

    < div className = "pt-16 border-t border-white/10 flex flex-col items-center gap-6" >
        <div className="h-16 w-auto overflow-hidden" >
            <img src="/assets/logo.png" alt = "SiaCore Logo" className = "h-full w-auto object-contain" />
                </div>
                < div >
                <p className="text-sm font-bold uppercase tracking-widest text-white" > SIACORE Team </p>
                    < p className = "text-xs text-primary font-bold uppercase tracking-widest" > Est. 2026 </p>
                        </div>
                        </div>
                        </motion.div>

{/* Background decoration */ }
<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[150px] opacity-30 -z-50" />
    </div>
  );
};

export default About;
