import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <Phone size={24} className="text-customBlue" />,
      title: 'Phone',
      details: ['+92 336 0543553'],
      href: 'tel:+923360543553',
    },
    {
      icon: <Mail size={24} className="text-customBlue" />,
      title: 'Email',
      details: ['info@triaxistech.com'],
      href: 'mailto:info@triaxistech.com',
    },
    {
      icon: <MapPin size={24} className="text-customBlue" />,
      title: 'Address',
      details: ['Rohtas Complex, Mansehra Road, Abbottabad'],
      href: 'https://maps.google.com/?q=Rohtas+Complex,+Mansehra+Road,+Abbottabad',
    },
    {
      icon: <Clock size={24} className="text-customBlue" />,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactDetails.map((item, index) => (
        <motion.div
          key={index}
          className="card hover:shadow-lg dark:hover:shadow-primary-900/20 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="p-6 flex items-start">
            <div className="mr-4">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-gray-600 dark:text-gray-300">
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="hover:text-customBlue transition-colors"
                      target={item.href.startsWith('https') ? '_blank' : undefined}
                      rel={item.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                    >
                      {detail}
                    </a>
                  ) : (
                    detail
                  )}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;