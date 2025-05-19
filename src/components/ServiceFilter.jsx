import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { setCategory } from '../redux/slices/servicesSlice';

const ServiceFilter = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector(state => state.services);

  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => dispatch(setCategory(category.id))}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 relative ${
              selectedCategory === category.id
                ? 'text-white'
                : 'text-gray-700 dark:text-gray-300 hover:text-customBlue dark:hover:text-customBlue'
            }`}
          >
            {selectedCategory === category.id && (
              <motion.span
                layoutId="activePill"
                className="absolute inset-0 bg-customBlue rounded-full -z-10"
                initial={false}
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceFilter;