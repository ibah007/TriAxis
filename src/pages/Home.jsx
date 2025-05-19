import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Components
import Hero from '../components/Hero';
import ServiceHighlights from '../components/ServiceHighlights';
import SectionHeading from '../components/SectionHeading';

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="About TriAxis Technology" 
                subtitle="Your trusted partner for all engineering solutions"
                centered={false}
              />
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                TriAxis Technologies is a multidisciplinary engineering and
                 technology company , offering comprehensive solutions across
                  Electrical & Electronics, RF Systems, Mechanical Engineering, 
                  Software Development, and Web & Mobile App Development.
              </p>
              <Link
              to="/about"
              className="group inline-flex items-center border border-customBlue text-customBlue hover:bg-customBlue hover:text-white transition-colors duration-300 px-4 py-2 rounded-xl"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            </div>
            
            <div className="relative">
              <img 
                src="/beemu.jpg" 
                alt="Engineering Expertise" 
                className="rounded-lg shadow-xl w-full h-80 "
              />
              {/* <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-primary-500 rounded-lg"></div> */}
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Services Highlights */}
      <ServiceHighlights />
      
      {/* CTA Section */}
      <section className="py-20 bg-customBlue text-white">
        <div className="container text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to bring your Engineering project to life?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact us today to discuss how we can help you achieve your goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/contact" className="btn bg-white text-customBlue hover:bg-gray-100 text-lg">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;