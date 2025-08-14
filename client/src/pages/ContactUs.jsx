import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("All fields are required.");
      setSuccessMsg('');
      return;
    }

    try {
      // Simulate API delay
      await new Promise((res) => setTimeout(res, 1000));

      // Log data to console
      console.log("Form Submitted:", formData);

      setSuccessMsg("Message sent successfully!");
      setErrorMsg('');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMsg("Failed to send message.");
    }
  };

  return (
    <div className="bg-gray-900 pt-45 pb-50 text-white min-h-screen pt-20 pb-20 px-4 md:px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Have questions, feedback, or need help? Reach out to us using the form below.
        </motion.p>

        {/* Success/Error Message */}
        {successMsg && (
          <motion.div
            className="mb-4 p-4 bg-green-700 text-white rounded"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {successMsg}
          </motion.div>
        )}
        {errorMsg && (
          <motion.div
            className="mb-4 p-4 bg-red-700 text-white rounded"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {errorMsg}
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="group">
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="John Doe"
            />
          </div>
          <div className="group">
            <label className="block mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="john@example.com"
            />
          </div>
          <div className="group">
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="5"
              placeholder="Write your message here..."
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="mt-14 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl pt-10 font-semibold mb-2">Our Office</h2>

          <div className="flex items-center gap-3 text-lg">
            <FaMapMarkerAlt className="text-red-400" />
            <span>Plot 21, Film City Road, Mumbai, India - 400101</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-red-400" />
            <span>showtimeOfficial@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaPhoneAlt className="text-red-400" />
            <span>+9199999999</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaGithub className="text-red-400" />
            <a
              href="https://github.com/Punit49/ShowTime.git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-300"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;