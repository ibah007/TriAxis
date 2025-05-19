import React from 'react';
import { motion } from 'framer-motion';

// Components
import SectionHeading from '../components/SectionHeading';
import AboutContent from '../components/AboutContent';

const About = () => {
  const timeline = [
    {
      year: '2018',
      title: 'Founded',
      description: 'Tri/Axis Technology was established with a vision to provide integrated engineering solutions.'
    },
    {
      year: '2019',
      title: 'Expansion',
      description: 'Expanded our services to include software development and digital solutions.'
    },
    {
      year: '2020',
      title: 'Regional Growth',
      description: 'Extended our operations to multiple regions with successful project completions.'
    },
    {
      year: '2022',
      title: 'Innovation Hub',
      description: 'Launched our innovation hub focusing on research and cutting-edge technologies.'
    },
    {
      year: '2025',
      title: 'Global Presence',
      description: 'Established international partnerships and project collaborations.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-customBlue text-white">
      {/* <section className='pt-32 pb-20 '> */}
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-6">About Us</h1>
            <p className="text-xl">
              TriAxis Technology is a premier engineering solutions provider, delivering excellence across multiple disciplines with innovation and integrity at our core.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="section bg-light dark:bg-dark">
        <div className="container">
          <AboutContent />
        </div>
      </section>
      
      {/* Our Vision */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <SectionHeading 
            title="Our Vision" 
            subtitle="To be a leading integrated solutions provider in engineering, RF systems, software, and technology, empowering clients with innovative and reliable solutions."
          />
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="card p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-xl font-medium mb-6 text-gray-700 dark:text-gray-300">
                "To be the foremost leader in providing comprehensive engineering solutions that transform ideas into reality, enhance quality of life, and contribute to a sustainable future."
              </blockquote>
              <p className="text-gray-600 dark:text-gray-400">
                We strive to be recognized globally for our technical expertise, innovative approach, and unwavering commitment to excellence in all engineering disciplines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Our Mission" 
            subtitle="Deliver innovative, high-quality, and cost-effective engineering 
                      and software solutions. Establish long-term trust-based 
                      relationships with public and private sector clients.
                      Provide responsive after-sales and technical support"
          />
          
        </div>
      </section>
    </>
  );
};

export default About;



          // <div className="max-w-4xl mx-auto">
          //   <div className="relative">
          //     {/* Vertical Line */}
          //     <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-500/30 z-0"></div>
              
          //     {/* Timeline Items */}
          //     {timeline.map((item, index) => (
          //       <motion.div 
          //         key={index}
          //         className={`relative z-10 flex items-center mb-12 ${
          //           index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          //         }`}
          //         initial={{ opacity: 0, y: 20 }}
          //         whileInView={{ opacity: 1, y: 0 }}
          //         viewport={{ once: true, margin: "-50px" }}
          //         transition={{ duration: 0.5, delay: index * 0.1 }}
          //       >
          //         {/* Content */}
          //         <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
          //           <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          //           <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          //         </div>
                  
          //         {/* Year Marker */}
          //         <div className="bg-primary-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold z-20 transform -translate-y-1/2">
          //           {item.year}
          //         </div>
                  
          //         {/* Empty space on the other side */}
          //         <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
          //       </motion.div>
          //     ))}
          //   </div>
          // </div>