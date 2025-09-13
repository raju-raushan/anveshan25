import ProfileCard from "@/components/Organizer";
import { motion } from "framer-motion";
import SectionWithParticles from "./SectionWithParticles";
import raushan from '../components/assets/mee-removebg-preview.png';
import ritu from '../components/assets/Ritu mam.png'
import sneha from '../components/assets/sneha mam.png';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Ritu Tondon",
      role: "Faculty Coordinator",
      image: {ritu},
      color: "neon-green",
      social: {
        linkedin: "#",
        email: "#",
      },
    },
    {
      name: "Snehlata Mishra",
      role: "Faculty Coordinator",
      image: {sneha},
      color: "electric-blue",
      social: {
        github: "#",
        twitter: "#",
      },
    },
    {
      name: "Raushan Raj",
      role: "Student Coordinator",
      image: {raushan},
      color: "teal",
      social: {
        behance: "#",
        instagram: "#",
      },
    }
  ];

  return (
    <SectionWithParticles 
      className="py-20 bg-gradient-to-br from-dark-navy to-deep-space"
      particleColors={['#ff0088', '#00ff88', '#0088ff']}
      particleCount={115}
      particleSpread={19}
      speed={0.09}
      particleBaseSize={3.4}
    >
      <section>
        <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 sm:mb-6">Organizing Team</h2>
          <p className="text-lg sm:text-xl text-gray-300 px-4">The Minds Behind Anveshan 2K25</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image.raushan || member.image.ritu || member.image.sneha}
              color={member.color}
              social={member.social}
            />
          ))}
        </div>
      </div>
    </section>
    </SectionWithParticles>
  );
}
