import React from "react";
import { Users, Target, Zap, Award } from "lucide-react";
import imranParthib from "../assets/team/imranParthib.png";
import anasIslam from "../assets/team/rakibulAnas.jfif";
import touhidIslam from "../assets/team/towhidulIslam.jpg";
import mission from "/mission.png";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            About <span className="text-purple-300">PiLab</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Pioneering the future of technology through innovation,
            collaboration, and excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="  text-4xl font-bold text-purple-900 mb-4">
                Our Mission
              </h2>
              <p className="text-purple-500 text-xl">
                At PiLab, we strive to push the boundaries of technology,
                creating innovative solutions that empower businesses and
                individuals to thrive in the digital age. Our mission is to
                deliver cutting-edge software, AI, and IoT solutions that drive
                progress and create lasting value for our clients and society.
              </p>
            </div>
            <div>
              <img
                src={mission}
                alt="PiLab Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-purple-500" />,
                title: "Innovation",
                description:
                  "Constantly pushing the boundaries of what's possible",
              },
              {
                icon: <Users className="h-8 w-8 text-purple-500" />,
                title: "Collaboration",
                description:
                  "Working together to achieve extraordinary results",
              },
              {
                icon: <Award className="h-8 w-8 text-purple-500" />,
                title: "Excellence",
                description:
                  "Striving for the highest quality in everything we do",
              },
              {
                icon: <Target className="h-8 w-8 text-purple-500" />,
                title: "Client-Centric",
                description:
                  "Putting our clients' needs at the heart of our work",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Imran Parthib",
                role: "CEO & Founder",
                image: imranParthib,
              },
              { name: "Thouhidul Islam", role: "CTO", image: touhidIslam },
              {
                name: "Rakibul Islam Anas",
                role: "Lead Developer",
                image: anasIslam,
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
