import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const ServiceCard = ({ title, description, icon, index }) => {
  const Icon = Icons[icon] || Icons.Activity;

  return (
    <motion.div
      className="card h-full group hover:shadow-lg dark:hover:shadow-primary-900/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4 p-3 rounded-lg bg-customBlue dark:bg-customBlue text-customBlue w-fit">
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-customBlue transition-colors">{title}</h3>

        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300 text-sm flex-grow">
          {description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
