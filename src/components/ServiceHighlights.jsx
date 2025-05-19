import React from 'react';
import { useSelector } from 'react-redux';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const ServiceHighlights = () => {
  // Get a subset of services for the homepage
  const { services } = useSelector(state => state.services);
  const highlightServices = services.filter((_, index) => index < 6);

  return (
    <section className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <SectionHeading 
          title="Our Services" 
          subtitle="We offer a comprehensive range of engineering 
          services to meet all your project needs."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {highlightServices.map((service, index) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;