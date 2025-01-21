
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3',
    title: "Largest network of healthcare providers",
    subtitle: "Partner with us and showcase your hospital or clinic to quality corporate employees across India.",
    extraText: "Financed by QubeHealth"
  },
  {
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
    title: "Accessible Healthcare",
    subtitle: "Making quality healthcare available and affordable",
    extraText: "for everyone"
  },
  {
    image: 'https://images.unsplash.com/photo-1606940743881-b33f4b04d661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Help your team pay their healthcare bills",
    subtitle: "Partner with us and showcase your hospital or clinic to quality corporate employees across India.",
    extraText: "Financed by QubeHealth"
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="slide"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
          />
          <div className="slide-overlay"></div>
          
          <motion.div 
            className="slide-content"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.p 
              className="extra-text"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {slides[currentSlide].extraText}
            </motion.p>
            <motion.button 
              className="contact-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <button
        className="nav-button prev"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft />
      </button>
      <button
        className="nav-button next"
        onClick={() => paginate(1)}
      >
        <ChevronRight />
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;