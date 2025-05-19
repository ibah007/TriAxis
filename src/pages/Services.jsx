import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

// Components
import SectionHeading from '../components/SectionHeading';
import ServiceFilter from '../components/ServiceFilter';
import ServiceCard from '../components/ServiceCard';
import { setCategory } from '../redux/slices/servicesSlice';

const Services = () => {
  const dispatch = useDispatch();
  const { services, selectedCategory } = useSelector(state => state.services);
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  // Handle category from URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      dispatch(setCategory(categoryParam));
    }
  }, [searchParams, dispatch]);

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: selectedCategory });
    }
  }, [selectedCategory, setSearchParams]);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-customBlue text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-6">Explore Our Services</h1>
            <p className="text-xl">
              We offer a comprehensive range of engineering solutions to
               meet all your project requirements.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Core Services" 
            subtitle="We provide end-to-end engineering solutions."
          />
          
          <ServiceFilter />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  index={index}
                />
              ))
            ) : (
              <motion.div
                className="col-span-3 text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-xl text-gray-500 dark:text-gray-400">
                  No services found in this category.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <SectionHeading 
            title="Our Service Process" 
            subtitle="We follow a systematic approach to deliver quality solutions."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: '01',
                  title: 'Consultation & Requirements',
                  description: 'We begin with a thorough consultation to understand your specific needs and requirements.'
                },
                {
                  step: '02',
                  title: 'Analysis & Planning',
                  description: 'Our experts analyze the requirements and develop a comprehensive project plan with clear milestones.'
                },
                {
                  step: '03',
                  title: 'Design & Development',
                  description: 'We design and develop solutions tailored to your needs using the latest technologies and methodologies.'
                },
                {
                  step: '04',
                  title: 'Implementation & Support',
                  description: 'We implement the solution and provide ongoing support to ensure optimal performance.'
                }
              ].map((process, index) => (
                <motion.div 
                  key={index}
                  className="card hover:shadow-lg dark:hover:shadow-primary-900/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/10 text-customBlue font-bold text-lg mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;