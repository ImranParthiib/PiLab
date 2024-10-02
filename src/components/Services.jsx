import React from "react";
import { ArrowRight, Code, Cpu, Zap } from "lucide-react";

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Our  <span className="text-purple-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Empowering innovation through cutting-edge technology solutions
            </p>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out"
            >
              Book Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-purple-500" />,
                title: "Custom Software Development",
                description:
                  "Tailored solutions to meet your unique business needs",
              },
              {
                icon: <Cpu className="h-8 w-8 text-purple-500" />,
                title: "AI & Machine Learning",
                description: "Cutting-edge AI technologies to drive innovation",
              },
              {
                icon: <Zap className="h-8 w-8 text-purple-500" />,
                title: "IoT Solutions",
                description:
                  "Connecting devices for smarter, data-driven decisions",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-purple-50 rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
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

export default Services;
