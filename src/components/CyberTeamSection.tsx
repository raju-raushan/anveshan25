import { motion } from 'framer-motion';
import React from 'react';
import CyberCard from './CyberCard';
import Akash from './assets/Person/Akash.png';
import Kishan from './assets/Person/Kishan.png';
import Kushagra from './assets/Person/Kushagra.png';
import Om from './assets/Person/Om.png';
import ritu from './assets/Person/Ritu mam.png';
import Sanjay from './assets/Person/Sanjay.png';
import suranjit from './assets/Person/Suranjit.png';
import Utkarsh from './assets/Person/Utkarsh.png';
import Astha from './assets/Person/astha.png';
import Debyanshu from './assets/Person/debyanshu.png';
import raushan from './assets/Person/mee-removebg-preview.png';

// Team data with 10 members
const teamMembers = [
  {
    id: 1,
    name: "Dr. Ritu Tondon",
    role: "Faculty Coordinator",
    image: ritu,
    contact: "9826685255"
  },
  {
    id: 2,
    name: "Prof. Suranjit Kosta", 
    role: "Faculty Coordinator",
    image: suranjit,
    contact: "9713038020"
  },
  {
    id: 3,
    name: "Raushan Raj",
    role: "TechnoParv Coordinator",
    image: raushan,
    contact: "8804001436"
  },
    {
    id: 4,
    name: "Om Shukla",
    role: "TechnoParv Coordinator",
    image: Om,
    contact: "8989468730"
  },
  {
    id: 4,
    name: "Kushagra Neekhra",
    role: "Cultural Coordinator",
    image: Kushagra,
    contact: "8601051570"
  },
  {
    id: 5,
    name: "Utkarsh Srivastava",
    role: "TechnoParv Coordinator",
    image: Utkarsh,
    contact: "7652004780"
  },
  {
    id: 6,
    name: "Sanjay Rai",
    role: "FunFair Coordinator",
    image: Sanjay,
    contact: "8085236467" 
  },
  {
    id: 7,
    name: "Astha Harode",
    role: "FunFair Coordinator",
    image: Astha,
    contact: "7000273376" 
  },
  {
    id: 8,
    name: "Debyanshu Chatterjee",
    role: "Cultural Coordinator",
    image: Debyanshu,
    contact: "8080156437"
  },
  {
    id: 9,
    name: "Kishan Yadav",
    role: "Sports Coordinator",
    image: Kishan,
    contact: "9111064338" 
  },
  {
    id: 10,
    name: "Akash Dwivedi",
    role: "Sports Coordinator",
    image: Akash,
    contact: "9174287753" 
  }
];

const CyberTeamSection: React.FC = () => {
  return (
  <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    Our <span className="bg-gradient-tech bg-clip-text text-transparent">Team</span>
                  </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the innovative minds behind Anveshan 2K25 - our dedicated team of coordinators and organizers
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <CyberCard
                name={member.name}
                role={member.role}
                image={member.image}
                contact={member.contact}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CyberTeamSection;
