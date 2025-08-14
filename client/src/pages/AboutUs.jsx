import React from 'react';
import { motion } from 'framer-motion';
import { FaTicketAlt, FaFilm, FaCreditCard, FaUsers, FaBullseye, FaPeopleCarry } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-gray-950 pt-40 text-white min-h-screen py-16 px-4 md:px-10">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Header */}
        <motion.h1
          className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About ShowTime
        </motion.h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
          The ultimate movie ticketing platform built to enhance your cinematic experience.
        </p>

        {/* Intro Section */}
        <motion.div
          className="bg-gray-900 p-8 rounded-xl shadow-xl mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed text-gray-300">
            ShowTime was launched in 2025 to revolutionize how India books and enjoys movies. Whether you're a Marvel fanatic, a Bollywood fan, or a Netflix binger, we provide a smooth and intuitive ticket-booking platform with real-time seat selection, seamless payments, and exclusive deals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              icon: <FaTicketAlt className="text-red-400 text-3xl" />,
              title: "Instant Booking",
              desc: "Real-time seat selection and ticket booking in seconds.",
            },
            {
              icon: <FaFilm className="text-yellow-400 text-3xl" />,
              title: "Detailed Info",
              desc: "Trailers, cast, reviews, runtime, ratings, and more at your fingertips.",
            },
            {
              icon: <FaCreditCard className="text-green-400 text-3xl" />,
              title: "Secure Payments",
              desc: "Pay via UPI, cards, wallets – all encrypted & fast.",
            },
            {
              icon: <FaUsers className="text-blue-400 text-3xl" />,
              title: "Member Perks",
              desc: "Enjoy early access, loyalty points, and exclusive screenings.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-red-500/20 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-3">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <motion.div
          className="bg-gradient-to-r from-gray-800 to-gray-900 mt-16 p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaBullseye className="text-pink-400 text-3xl" />
            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            At ShowTime, we believe in the magic of storytelling. Our mission is to make cinema more accessible, exciting, and rewarding for every moviegoer. By leveraging cutting-edge technology and clean design, we deliver a truly immersive ticketing journey.
          </p>
        </motion.div>

        {/* Team */}
        <motion.div
          className="bg-gradient-to-r from-gray-800 to-gray-900 mt-12 p-8 rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaPeopleCarry className="text-blue-400 text-3xl" />
            <h2 className="text-2xl font-semibold text-white">Meet the Team</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            We're a crew of developers, designers, and movie geeks who love two things: tech and theater. With innovation at our core, we’re building the future of movie experiences.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;