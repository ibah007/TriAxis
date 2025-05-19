import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: 'all',
  categories: [
    { id: 'all', name: 'All Services' },
    { id: 'rf-communication', name: 'RF & Communication' },
    { id: 'electrical-electronics', name: 'Electrical & Electronics' },
    { id: 'mechanical', name: 'Mechanical Engineering' },
    { id: 'software', name: 'Software Development' },
    { id: 'web-app', name: 'Web & App Development' },
  ],
  services: [
    {
      id: 1,
      title: 'Electrical & Electronics Solutions',
      description: 'PCB Design & Reverse Engineering Electronic Spare Parts Supply Equipment Repair & Maintenance',
      category: 'electrical-electronics',
      icon: 'Cpu',
    },

    {
      id: 2,
      title: 'RF & Communication Solutions',
      description: 'RF Component Supply (Filters, amplifiers, Cables, Antennas, Connectors). System Integration & Testing. RF Jamming & Anti-Drone Technologies',
      category: 'rf-communication',
      icon: 'Radio',
    },
    {
      id: 4,
      title: 'Mechanical Engineering Solutions',
      description: 'Reverse Engineering & Prototyping 3D Modelling & CNC Machining Custom Mechanical Part Fabrication',
      category: 'mechanical',
      icon: 'Cog',
    },
    {
      id: 5,
      title:  'Software Development',
      description: 'Embedded Software & Control Systems. Custom Desktop and Web Applications. ERP and Automation Solutions. API Development & Integration',
      category: 'software',
      icon: 'Code',
    },
    {
      id: 6,
      title: 'Website & Mobile App Development',
      description: 'Custom WordPress Development. Android & iOS App Design. UI/UX Optimization. Hosting, Security & Maintenance',
      category: 'web-app',
      icon: 'Smartphone',
    },
  ],
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = servicesSlice.actions;

export default servicesSlice.reducer;