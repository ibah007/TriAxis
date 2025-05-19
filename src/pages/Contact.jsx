import React from 'react';
import { motion } from 'framer-motion';

// Components
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-customBlue text-white dark:bg-gradient-to-b from-black to-red">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-6">Why Choose Us</h1>
            <p className="text-xl">
              Experienced multi-disciplinary team <br />
              Strong portfolio in defense and industrial sectors <br />
              Transparent processes and reliable support
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="section bg-light dark:bg-dark">
        <div className="container">
          <SectionHeading 
            title="Contact Us" 
            subtitle="We'd love to hear from you. Here's how you can reach us."
          />
          
          <ContactInfo />
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <SectionHeading 
            title="Send Us a Message" 
            subtitle="Have questions or need assistance? Fill out the form below, and we'll get back to you as soon as possible."
          />
          
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-96 relative">
        <iframe 
          className="w-full h-full border-0" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.8298845245344!2d73.2189513!3d34.1677199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3fabce08a067%3A0x58a64a52bdbbd6bc!2sRohtas%20Complex%2C%20Mansehra%20Rd%2C%20Abbottabad%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1658430785954!5m2!1sen!2s" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Tri/Axis Technology Location"
          aria-label="Google Maps showing Tri/Axis Technology location"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;