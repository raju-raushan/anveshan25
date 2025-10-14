import { motion } from "framer-motion";
import { useState } from "react";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  color: string;
  social: Record<string, string>;
}

export default function ProfileCard({ name, role, image, color, social }: ProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      // Fixed dimensions for uniform square cards - exactly 4 per row
      className="relative group w-full aspect-square max-w-none" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Card container - Square aspect ratio with enhanced padding for larger image */}
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 h-full overflow-hidden border border-gray-800 backdrop-blur-sm flex flex-col justify-between">
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-${color}/10 via-transparent to-${color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Floating orbs */}
        <motion.div
          className={`absolute -top-4 -right-4 w-12 h-12 bg-${color} rounded-full opacity-20`}
          animate={isHovered ? { scale: [1, 1.2, 1], rotate: 360 } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className={`absolute -bottom-4 -left-4 w-8 h-8 bg-${color} rounded-full opacity-30`}
          animate={isHovered ? { scale: [1, 1.3, 1], rotate: -360 } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="relative z-10 text-center flex-1 flex flex-col justify-center">
          {/* Profile image - optimized for square layout */}
          <motion.div
            className="relative mb-4 mx-auto" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`relative w-32 h-32 mx-auto rounded-full border-4 border-${color} overflow-hidden`}>
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100"
                animate={isHovered ? { x: ['-100%', '100%'] } : {}}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Name and role - optimized for larger image layout */}
          <motion.h3
            className="text-xl font-bold text-white mb-2 leading-tight" 
            whileHover={{ scale: 1.02 }}
          >
            {name}
          </motion.h3>
          <motion.p
            className={`text-${color} mb-3 text-base leading-tight`}
            whileHover={{ scale: 1.02 }}
          >
            {role}
          </motion.p>

          {/* Social links - adjusted for larger layout */}
          <motion.div
            className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {Object.entries(social).map(([platform, url], index) => (
              <motion.a
                key={platform}
                href={url}
                className={`text-gray-400 hover:text-${color} transition-colors cursor-pointer`}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <i className={`fab fa-${platform === "email" ? "envelope" : platform} text-base`}></i>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Decorative elements - scaled for square layout */}
        <motion.div
          className={`absolute top-2 left-2 w-1.5 h-1.5 bg-${color} rounded-full opacity-50`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className={`absolute bottom-2 right-2 w-1 h-1 bg-${color} rounded-full opacity-50`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}