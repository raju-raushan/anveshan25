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
      // Added w-full and max-w-sm to control the card's width
      className="relative group w-full max-w-sm" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Card container - Increased padding from p-8 to p-10 */}
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-10 overflow-hidden border border-gray-800 backdrop-blur-sm">
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-${color}/10 via-transparent to-${color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Floating orbs - Increased size */}
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

        <div className="relative z-10 text-center">
          {/* Profile image - Increased size from w-24 h-24 to w-32 h-32 */}
          <motion.div
            className="relative mb-8 mx-auto" // Increased margin-bottom
            whileHover={{ scale: 1.1 }}
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

            {/* Status indicator - Increased size */}
            <motion.div
              className={`absolute -bottom-1 -right-1 w-8 h-8 bg-${color} rounded-full border-4 border-gray-900 flex items-center justify-center`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-3 h-3 bg-white rounded-full" />
            </motion.div>
          </motion.div>

          {/* Name and role - Increased font sizes */}
          <motion.h3
            className="text-2xl font-bold text-white mb-2" // from text-xl
            whileHover={{ scale: 1.05 }}
          >
            {name}
          </motion.h3>
          <motion.p
            className={`text-${color} font-semibold mb-8 text-lg`} // from mb-6 and added text-lg
            whileHover={{ scale: 1.05 }}
          >
            {role}
          </motion.p>

          {/* Social links - Increased icon size */}
          <motion.div
            className="flex justify-center space-x-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" // Increased space-x
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {Object.entries(social).map(([platform, url], index) => (
              <motion.a
                key={platform}
                href={url}
                className={`text-gray-400 hover:text-${color} transition-colors cursor-pointer`}
                whileHover={{ scale: 1.3, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {/* Increased icon size from text-lg to text-xl */}
                <i className={`fab fa-${platform === "email" ? "envelope" : platform} text-xl`}></i>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className={`absolute top-4 left-4 w-2 h-2 bg-${color} rounded-full opacity-50`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className={`absolute bottom-4 right-4 w-1 h-1 bg-${color} rounded-full opacity-50`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
