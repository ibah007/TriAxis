import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground'; // adjust path if needed

// Components
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}


<section className="relative pt-32 pb-20 text-dark dark:text-light overflow-hidden">
  {/* Animated canvas background */}
  <AnimatedBackground />

  <div className="container relative z-10">
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

      {/* Contact Form Section */}
      <section className="section bg-light dark:bg-dark">
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
      

      
      {/* Map Section */}
      <section className="space-y-10 my-10">
        {/* Canada Office */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Canada Office</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25148.118839803014!2d-113.47454676044965!3d53.4145733057808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f2b0bfa5a37%3A0x6ea8f62a1b6281fa!2s29th%20St%20SW%2C%20Edmonton%2C%20AB%2C%20Canada!5e0!3m2!1sen!2s!4v1719505042632!5m2!1sen!2s"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              title="Canada Office Location"
              aria-label="Map showing TriAxis Canada Office"
            ></iframe>
          </div>
        </div>

        {/* Pakistan Office */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Pakistan Office</h2>
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13201.884330256162!2d73.216768832109!3d34.18543822575024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de31423ac254b1%3A0xd74a823f860a0146!2sRohtas%20Complex!5e0!3m2!1sen!2s!4v1749983868286!5m2!1sen!2s"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              title="Pakistan Office Location"
              aria-label="Map showing TriAxis Pakistan Office"
            ></iframe>
          </div>
        </div>
      </section>

    </>
  );
};

export default Contact;