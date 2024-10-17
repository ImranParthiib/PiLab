import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-800 dark:from-gray-800 dark:to-gray-900 min-h-screen flex justify-center items-center p-4">
      <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-gray-700 dark:to-gray-600 text-white">
            <h2 className="text-4xl font-extrabold mb-6">Get in Touch</h2>
            <p className="mb-8 text-lg">We'd love to hear from you! Reach out to the PiLab team for any inquiries or feedback.</p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4" />
                <p className="text-lg">+88 01756404302</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4" />
                <p className="text-lg">info@pilab.com</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4" />
                <p className="text-lg">DSC,Dhaka,Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Imran Parthib"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ease-in-out dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="imranparthib13@gmail.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ease-in-out dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Type of Message Here!"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ease-in-out dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300 ease-in-out flex items-center justify-center dark:from-purple-500 dark:to-indigo-500 dark:hover:from-purple-600 dark:hover:to-indigo-600"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
