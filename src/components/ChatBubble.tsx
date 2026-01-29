import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const ChatBubble = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className= "fixed bottom-6 right-6 z-[100] flex flex-col items-end" >
        <AnimatePresence>
        { isOpen && (
            <motion.div
            initial={ { opacity: 0, scale: 0.9, y: 20 } }
    animate = {{ opacity: 1, scale: 1, y: 0 }
}
exit = {{ opacity: 0, scale: 0.9, y: 20 }}
className = "mb-4 w-80 glass rounded-3xl overflow-hidden shadow-2xl border-pink-200"
    >
    <div className="bg-primary p-6 text-white" >
        <h3 className="font-display font-bold text-lg leading-tight" > Hey babe! 🎀</h3>
            < p className = "text-pink-100 text-sm" > Need help with sizing or an order ? </p>
                </div>
                < div className = "p-6 h-64 overflow-y-auto bg-white/50 space-y-4" >
                    <div className="bg-pink-50 self-start p-3 rounded-2xl rounded-tl-none text-sm text-gray-700 max-w-[80%]" >
                        Hi! How can we help you today ? ✨
</div>
    </div>
    < div className = "p-4 bg-white border-t border-pink-50" >
        <input 
                type="text"
placeholder = "Type your message..."
className = "w-full px-4 py-2 bg-pink-50/50 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-primary"
    />
    </div>
    </motion.div>
        )}
</AnimatePresence>

    < motion.button
whileHover = {{ scale: 1.1 }}
whileTap = {{ scale: 0.9 }}
onClick = {() => setIsOpen(!isOpen)}
className = "w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-pink-200 hover:bg-primary-dark transition-colors"
    >
    <MessageCircle className="w-6 h-6" />
        </motion.button>
        </div>
  );
};
