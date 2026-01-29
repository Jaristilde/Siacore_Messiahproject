import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            alert('Message sent! 🎀 We will get back to you soon, babe.');
            setIsSubmitting(false);
            setFormState({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <div className= "min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto bg-black text-white" >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" >
            <motion.div
          initial={ { opacity: 0, x: -20 } }
    animate = {{ opacity: 1, x: 0 }
}
        >
    <div className="mb-8" >
        <img src="/assets/logo.png" alt = "Siacore Logo" className = "h-16 w-auto object-contain" />
            </div>
            < h1 className = "text-5xl md:text-7xl font-display font-bold mb-8 uppercase tracking-tighter italic text-primary" > Contact Us </h1>
                < p className = "text-gray-400 text-lg mb-12 max-w-md leading-relaxed" >
                    Have a question about an order ? Or just want to say hi ? We'd love to hear from you! ✨
                        </p>

                        < div className = "space-y-8" >
                            <div className="flex items-center gap-6 group" >
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg border border-white/5" >
                                    <Mail className="w-5 h-5" />
                                        </div>
                                        < div >
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1" > Email Us </p>
                                            < p className = "font-display font-bold text-white" > hello@siacore.shop</p>
                                                </div>
                                                </div>

                                                < div className = "flex items-center gap-6 group" >
                                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg border border-white/5" >
                                                        <Instagram className="w-5 h-5" />
                                                            </div>
                                                            < div >
                                                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1" > Follow Us </p>
                                                                < a href = "https://instagram.com" target = "_blank" rel = "noopener noreferrer" className = "font-display font-bold text-white hover:text-primary transition-colors" > @siacore_boutique </a>
                                                                    </div>
                                                                    </div>

                                                                    < div className = "flex items-center gap-6 group" >
                                                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg border border-white/5" >
                                                                            <MapPin className="w-5 h-5" />
                                                                                </div>
                                                                                < div >
                                                                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1" > Based In </p>
                                                                                    < p className = "font-display font-bold text-white" > Miami, FL 🌴</p>
                                                                                        </div>
                                                                                        </div>
                                                                                        </div>
                                                                                        </motion.div>

                                                                                        < motion.div
initial = {{ opacity: 0, x: 20 }}
animate = {{ opacity: 1, x: 0 }}
className = "glass p-8 md:p-12 rounded-[3rem] shadow-2xl border-white/5"
    >
    <form onSubmit={ handleSubmit } className = "space-y-6" >
        <div className="space-y-2" >
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4" > Full Name </label>
                < input
required
type = "text"
placeholder = "How should we call you?"
className = "w-full px-6 py-4 rounded-3xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-white"
value = { formState.name }
onChange = {(e) => setFormState({ ...formState, name: e.target.value })}
              />
    </div>

    < div className = "space-y-2" >
        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4" > Email Address </label>
            < input
required
type = "email"
placeholder = "Where can we reply?"
className = "w-full px-6 py-4 rounded-3xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm text-white"
value = { formState.email }
onChange = {(e) => setFormState({ ...formState, email: e.target.value })}
              />
    </div>

    < div className = "space-y-2" >
        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4" > Your Message </label>
            < textarea
required
rows = { 4}
placeholder = "Tell us everything! 🎀"
className = "w-full px-6 py-4 rounded-3xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm resize-none text-white"
value = { formState.message }
onChange = {(e) => setFormState({ ...formState, message: e.target.value })}
              />
    </div>

    < button
disabled = { isSubmitting }
className = "w-full h-16 bg-primary text-white font-bold rounded-3xl hover:bg-primary-dark transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-pink-500/20 uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4"
    >
    <Send className="w-4 h-4" />
        { isSubmitting? 'Sending...': 'Send Message' }
        </button>
        </form>
        </motion.div>
        </div>
        </div>
  );
};

export default Contact;
