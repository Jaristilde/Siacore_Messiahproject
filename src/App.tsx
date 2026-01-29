import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatBubble } from './components/ChatBubble';
import { CartProvider } from './context/CartContext';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <CartProvider>
    <Router>
    <div className= "flex flex-col min-h-screen" >
    <Navbar />
    < main className = "flex-grow" >
      <AnimatePresence mode="wait" >
        <Routes>
        <Route path="/" element = {< Home />} />
          < Route path = "/shop" element = {< Shop />} />
            < Route path = "/product/:id" element = {< ProductDetail />} />
              < Route path = "/checkout" element = {< Checkout />} />
                < Route path = "/contact" element = {< Contact />} />
                  < Route path = "/about" element = {< About />} />
                    </Routes>
                    </AnimatePresence>
                    </main>
                    < Footer />
                    <ChatBubble />
                    </div>
                    </Router>
                    </CartProvider>
  );
}

export default App;
