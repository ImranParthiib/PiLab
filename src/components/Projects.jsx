import React from "react";
import { ArrowRight, Code, Cpu, Zap } from "lucide-react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Our <span className="text-purple-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Empowering innovation through cutting-edge technology solutions
            </p>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  Projects Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="projects">
        <aside>
          <h1>Sofware</h1>
          <h1>AI</h1>
          <h1>Robotics</h1>
       </aside>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Innovate?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's collaborate to bring your ideas to life
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 transition duration-300 ease-in-out"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
