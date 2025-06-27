import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      title: 'Canada Office',
      items: [
        {
          icon: <Phone size={24} className="text-customBlue" />,
          label: 'Phone',
          detail: '+1 (587) 429-6586',
          href: 'tel:+15874296586',
        },
        {
          icon: <MapPin size={24} className="text-customBlue" />,
          label: 'Address',
          detail: '29th St, Edmonton, AB, T6X 3E7, Canada',
          href: 'https://maps.google.com/?q=29th+St,+Edmonton,+AB,+T6X+3E7,+Canada',
        },
      ],
    },
    {
      title: 'Pakistan Office',
      items: [
        {
          icon: <Phone size={24} className="text-customBlue" />,
          label: 'Phone',
          detail: '+92 336 0543553',
          href: 'tel:+923360543553',
        },
        {
          icon: <MapPin size={24} className="text-customBlue" />,
          label: 'Address',
          detail: 'Rohtas Complex, Mansehra Road, Abbottabad',
          href: 'https://maps.google.com/?q=Rohtas+Complex,+Mansehra+Road,+Abbottabad',
        },
      ],
    },
    {
      title: 'Email',
      items: [
        {
          icon: <Mail size={24} className="text-customBlue" />,
          label: 'Email',
          detail: 'info@triaxistech.com',
          href: 'mailto:info@triaxistech.com',
        },
      ],
    },
    {
      title: 'Working Hours',
      items: [
        {
          icon: <Clock size={24} className="text-customBlue" />,
          label: 'Hours',
          detail: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM',
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactDetails.map((section, index) => (
        <motion.div
          key={index}
          className="card hover:shadow-lg dark:hover:shadow-primary-900/20 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            {section.items.map((item, i) => (
              <div key={i} className="flex items-start mb-3">
                <div className="mr-4">{item.icon}</div>
                <div>
                  <h4 className="font-medium">{item.label}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-customBlue transition-colors"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.detail}
                    </a>
                  ) : (
                    item.detail.split('\n').map((line, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-300">
                        {line}
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;
