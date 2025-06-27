import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { updateFormField, setStatus, setError, resetForm } from '../redux/slices/contactSlice';
import { Send, Check, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { formData, status, error } = useSelector(state => state.contact);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormField({ field: name, value }));

    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    dispatch(setStatus('loading'));

    try {
      const result = await emailjs.send(
        'service_82e3cdc',
        'template_cg7ksqx',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'uzOx0mI0ZswsFiC8Z'
      );

      console.log('Email sent:', result.text);
      dispatch(setStatus('succeeded'));
      setTimeout(() => {
        dispatch(resetForm());
      }, 3000);

    } catch (err) {
      console.error('EmailJS error:', err);
      dispatch(setError('Failed to send your message. Please try again.'));
      dispatch(setStatus('failed'));
    }
  };

  return (
    <motion.div
      className="card shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

        {status === 'succeeded' ? (
          <div className="bg-green-100 text-green-800 border border-green-400 p-6 rounded-lg text-center mb-6">
            <Check className="w-10 h-10 mx-auto mb-2" />
            <h4 className="text-xl font-semibold mb-1">Message Sent!</h4>
            <p>Your message has been successfully sent to our team.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input ${validationErrors.name ? 'border-error-500 focus:ring-error-500' : ''}`}
                  disabled={status === 'loading'}
                />
                {validationErrors.name && (
                  <p className="mt-1 text-error-500 text-sm">{validationErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input ${validationErrors.email ? 'border-error-500 focus:ring-error-500' : ''}`}
                  disabled={status === 'loading'}
                />
                {validationErrors.email && (
                  <p className="mt-1 text-error-500 text-sm">{validationErrors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`input ${validationErrors.subject ? 'border-error-500 focus:ring-error-500' : ''}`}
                disabled={status === 'loading'}
              />
              {validationErrors.subject && (
                <p className="mt-1 text-error-500 text-sm">{validationErrors.subject}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`input ${validationErrors.message ? 'border-error-500 focus:ring-error-500' : ''}`}
                disabled={status === 'loading'}
              ></textarea>
              {validationErrors.message && (
                <p className="mt-1 text-error-500 text-sm">{validationErrors.message}</p>
              )}
            </div>

            {status === 'failed' && (
              <div className="mb-6 p-4 bg-error-500/10 rounded-md flex items-center text-error-500">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary bg-customBlue hover:to-blue-700 w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center">
                  <Loader className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </span>
              )}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
