import ProfileCard from "@/components/Organizer";
import { motion } from "framer-motion";
import Ankur from './assets/Person/Ankur.png';
import Deepak from './assets/Person/Deepak.png';
import Hemang from './assets/Person/Hemang.png';
import HOI from './assets/Person/Lalji.png';
import Mayank from './assets/Person/Mayank.png';
import Registrar from './assets/Person/Registrar.png';
import Sachin from './assets/Person/Sachin.png';
import Sakshi from './assets/Person/Sakshi.png';
import Sanjeev from './assets/Person/sanjeev sir.png';
import Sonal from './assets/Person/Sonal.png';
import DG from './assets/Person/Sudhir.png';
import VC from './assets/Person/VC.png';
import SectionWithParticles from "./SectionWithParticles";

export default function TeamSection() {
  // Create 10 sample team members; reuse available images for demo.
  const teamMembers = [
    { name: "Er. Sanjeev Agrawal", role: "Chairman and Managing Director,The SAGE Group", image: Sanjeev, color: "neon-green", social: { linkedin: "#", email: "#" } },
    { name: "Ms. Sakshi Bansal", role: "Executive Director,The SAGE Group", image: Sakshi, color: "electric-blue", social: { github: "#", twitter: "#" } },
    { name: "Dr. Ankur Arun Kulkarni", role: "Vice Chancellor,SAGE University Indore", image: VC, color: "teal", social: { instagram: "#" } },
    { name: "Dr. Ankur Saxena", role: "Pro Vice-Chancellor, SAGE University, Indore.", image: Ankur, color: "orange", social: { github: "#" } },
    { name: "Dr. Mayank Saxena", role: "Pro Vice-Chancellor, SAGE University, Indore.", image: Mayank, color: "orange", social: { github: "#" } },
    { name: "Dr. Sudhir Agrawal", role: "Director General, The SAGE Group", image: DG, color: "violet", social: { linkedin: "#" } },
    { name: "Dr. Manish Choudhary", role: "Registrar, SAGE University Indore", image: Registrar, color: "pink", social: { twitter: "#" } },
    { name: "Dr. Lalji Prasad", role: "Head Of Institute, SAGE University Indore", image: HOI, color: "cyan", social: { instagram: "#" } },
    { name: "Dr. Hemang Shrivastav", role: "Professor & HOD (Advance Computing), SAGE University Indore", image: Hemang, color: "lime", social: { linkedin: "#" } },
    { name: "Dr. Deepak Kumar Yadav", role: "Professor & HOD (IET), SAGE University Indore", image: Deepak, color: "amber", social: { twitter: "#" } },
    { name: "Dr. Sachin Patel", role: "Professor & HOD (CS/IT), SAGE University Indore", image: Sachin, color: "amber", social: { twitter: "#" } },
    { name: "Dr. Sonal Tripathi", role: "HOD, Department of Applied Science, SAGE University Indore", image: Sonal, color: "amber", social: { twitter: "#" } },
  ];

  return (
    <SectionWithParticles
      className="bg-gradient-to-br from-dark-navy to-deep-space"
      particleColors={['#ff0088', '#00ff88', '#0088ff']}
      particleCount={115}
      particleSpread={19}
      speed={0.09}
      particleBaseSize={3.4}
    >
      <section>
  <div className="container mx-auto px-2 sm:px-4 md:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-tech bg-clip-text text-transparent">Patrons</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-2 sm:px-4">The Minds Behind Anveshan 2K25</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <ProfileCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                color={member.color}
                social={member.social || {}}
              />
            ))}
          </div>
        </div>
  </section>
    </SectionWithParticles>
  );
}
