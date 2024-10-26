import React from "react";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import imranParthib from "../assets/team/imranParthib.png";
import anasIslam from "../assets/team/rakibulAnas.jfif";
import touhidIslam from "../assets/team/towhidulIslam.jpg";

const Team = () => {
  const team = [
    {
      name: "Imran Parthib",
      role: "CEO & Founder",
      image: imranParthib,
      quote: "Innovating the future of technology",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "mailto:imran@example.com",
      },
    },
    {
      name: "Thouhidul Islam",
      role: "CTO",
      image: touhidIslam,
      quote: "Building tomorrow's solutions today",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "mailto:thouhid@example.com",
      },
    },
    {
      name: "Rakibul Islam Anas",
      role: "Lead Developer",
      image: anasIslam,
      quote: "Crafting exceptional user experiences",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "mailto:rakibul@example.com",
      },
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 opacity-90" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(255,255,255,.1)_12%,transparent_12.5%,transparent_87%,rgba(255,255,255,.1)_87.5%,rgba(255,255,255,.1))] bg-[length:20px_20px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
            Meet Our Visionary Team
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Passionate innovators dedicated to transforming ideas into reality
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 ease-out"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Hover Social Links */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.socials).map(([platform, link]) => {
                      const Icon = {
                        linkedin: Linkedin,
                        twitter: Twitter,
                        github: Github,
                        email: Mail,
                      }[platform];

                      return (
                        <a
                          key={platform}
                          href={link}
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-lg font-medium text-white/80 mb-4">
                  {member.role}
                </p>
                <p className="text-white/70 italic">"{member.quote}"</p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent transform rotate-45 translate-x-10 -translate-y-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
