import React from "react";
import { Users, Target, Zap, Award } from "lucide-react";

import mission from "/mission.png";
import Team from "./Team";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-purple-700 dark:bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            About{" "}
            <span className="text-purple-300 dark:text-purple-400">PiLab</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Pioneering the future of technology through innovation,
            collaboration, and excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium px-4 py-1 rounded-full">
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Transforming Ideas into{" "}
                <span className="text-purple-600 dark:text-purple-400">
                  Digital Reality
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                At PiLab, we push the boundaries of technology, creating
                innovative solutions that empower businesses and individuals to
                thrive in the digital age. Our mission is to deliver
                cutting-edge software, AI, and IoT solutions that drive progress
                and create lasting value for our clients and society.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src={mission}
                alt="PiLab Team"
                className="relative rounded-lg shadow-2xl transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-purple-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-sm font-medium px-4 py-1 rounded-full">
              Our Values
            </span>
            <h2 className="mt-8 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Innovation",
                description:
                  "Constantly pushing the boundaries of what's possible",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Collaboration",
                description:
                  "Working together to achieve extraordinary results",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Excellence",
                description:
                  "Striving for the highest quality in everything we do",
                gradient: "from-pink-500 to-red-500",
              },
              {
                icon: <Target className="h-10 w-10" />,
                title: "Client-Centric",
                description:
                  "Putting our clients' needs at the heart of our work",
                gradient: "from-red-500 to-orange-500",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition duration-300`}
                />
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${value.gradient} text-white`}
                    >
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-lg">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />
    </div>
  );
};

export default About;
