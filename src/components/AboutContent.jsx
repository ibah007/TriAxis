import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Award } from 'lucide-react';

const AboutContent = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Continuously pushing boundaries to deliver cutting-edge engineering solutions.',
      icon: <Award className="w-6 h-6 text-customBlue" />
    },
    {
      title: 'Quality',
      description: 'Maintaining the highest standards in all our projects and deliverables.',
      icon: <CheckCircle className="w-6 h-6 text-customBlue" />
    },
    {
      title: 'Client Focus',
      description: 'Dedicated to understanding and exceeding client expectations.',
      icon: <Target className="w-6 h-6 text-customBlue" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          TriAxis Technology is a forward-thinking engineering company providing comprehensive solutions across multiple disciplines. Founded with a vision to become a one-stop solution for all engineering needs, we've grown into a trusted partner for businesses and individuals alike.
        </p>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Our team consists of skilled professionals with expertise in RF & communication, electrical & electronics, mechanical engineering, software development, and web & app development.
        </p>
        
        <div className="space-y-4">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="mr-3 mt-1">{value.icon}</div>
              <div>
                <h4 className="font-medium text-lg">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/cover.jpg" 
            alt="Engineering Team at Work" 
            className="w-full h-auto object-cover"
          />
        </div>
        {/* <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-lg bg-customBlue"></div> */}
        {/* <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg border-8 border-secondary-500/30"></div> */}
      </motion.div>
    </div>
  );
};

export default AboutContent;