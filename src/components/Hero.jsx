import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center text-dark dark:text-light overflow-hidden pt-20">
      <AnimatedBackground />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.h1
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ONE STOP SOLUTION FOR ALL YOUR 
            <span className="text-customBlue"> ENGINEERING NEEDS</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-justify mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            TriAxis Technology specializes in delivering high-quality, 
            customized solutions for defense, industrial, and commercial
             sectors, combining technical excellence with innovation to
            meet the evolving demands of the modern world.

          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/services" className="btn btn-primary bg-customBlue hover:bg-blue-700">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="border border-customBlue text-customBlue hover:bg-customBlue hover:text-white transition-colors duration-300 px-4 py-3 rounded-lg">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-light dark:from-dark to-transparent z-0"></div>
    </section>
  );
};

export default Hero;