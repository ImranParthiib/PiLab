import React from "react";
import { ArrowRight } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
              PiLab <span className="text-purple-600 dark:text-purple-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore fascinating projects based on the concept of Pi
            </p>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  PiLab Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pi Calculator */}
            <div className="bg-purple-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Pi Calculator</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A tool for calculating Pi to hundreds or even thousands of
                decimal places. Explore how algorithms like Monte Carlo,
                Gauss-Legendre, and others help compute Pi.
              </p>
              <a href="/pi-calculator" className="text-purple-600 dark:text-purple-400 hover:underline">
                Try Pi Calculator
              </a>
            </div>

            {/* Pi Memorization Tool */}
            <div className="bg-purple-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Pi Memorization Tool</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Challenge yourself to memorize the digits of Pi! Track your
                progress and see how many digits you can remember.
              </p>
              <a href="/pi-memorization" className="text-purple-600 dark:text-purple-400 hover:underline">
                Start Memorizing Pi
              </a>
            </div>

            {/* Visual Demonstrations */}
            <div className="bg-purple-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Visual Demonstrations of Pi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                See how Pi relates to circles, spheres, and geometry with
                interactive visualizations. Learn how Pi is used in real-world
                applications, from calculating area to advanced mathematics.
              </p>
              <a href="/visual-demonstrations" className="text-purple-600 dark:text-purple-400 hover:underline">
                Explore Visualizations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-700 dark:bg-purple-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Learn More About Pi?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the community and contribute your knowledge and skills to PiLab
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 dark:text-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 transition duration-300 ease-in-out"
          >
            Get Involved
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
