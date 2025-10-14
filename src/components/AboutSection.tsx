import React, { useState } from 'react'; // <-- CHANGE: useState import kiya
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Anveshan from '../components/assets/Posters/Anveshan.jpeg';
import TechnoParv from '../components/assets/Posters/Techno Parv.jpeg';
import TechnoParvMini from '../components/assets/Posters/Techno Parv mini.jpeg';
import Cultural from '../components/assets/Posters/Cultural.jpeg';
import CulturalMini from '../components/assets/Posters/CulturalMini.png';


interface EventModalProps {
  event: {
    title: string;
    modalImage: string;
    details: string;
    rules: string[];
  } | null;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-gray-900 border border-glass-border rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <div className="grid md:grid-cols-2 gap-8">
          <img src={event.modalImage} alt={event.title} className="rounded-lg w-full h-auto object-cover" />
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-tech bg-clip-text text-transparent">{event.title}</h3>
            <p className="text-foreground/80 leading-relaxed">{event.details}</p>
            <div>
              <h4 className="text-xl font-semibold mb-2 text-primary">Rules</h4>
              <ul className="list-disc list-inside text-foreground/70 space-y-1">
                {event.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};



const AboutSection: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventModalProps['event']>(null);


  const events = [
    {
      title: 'Techno Parv',
      cardImage: {TechnoParvMini}, 
      modalImage: {TechnoParv}, 
      shortDescription: 'Cutting-edge tech events and competitions.',
      details: 'Techno Parv is the epicenter of innovation, featuring intense coding battles, robotics challenges, and workshops on the latest technologies. Compete with the best and showcase your skills.',
      rules: ['Solo participation.', 'Plagiarism will lead to disqualification.', 'Judges\' decision will be final.']
    },
    {
      title: 'Fun Fair',
      cardImage: {TechnoParvMini}, 
      modalImage: {TechnoParv},
      shortDescription: 'Engaging games and fun activities for everyone.',
      details: 'Take a break from the tech and dive into a world of fun! Our Fun Fair offers a variety of games, food stalls, and entertainment to help you relax and make new friends.',
      rules: ['Coupons required for games.', 'Follow instructions at each stall.', 'Enjoy responsibly!']
    },
    {
      title: 'Cultural Carnival',
      cardImage: CulturalMini, 
      modalImage: Cultural,
      shortDescription: 'A vibrant celebration of art, music, and dance.',
      details: 'Experience a spectacular showcase of talent in our Cultural Carnival. From mesmerizing dance performances to soulful music, it\'s a celebration of creativity and cultural diversity.',
      rules: ['Register your performance in advance.', 'Time limits must be respected.', 'All performance themes must be appropriate.']
    },
    {
      title: 'Sports',
      cardImage: {TechnoParvMini}, 
      modalImage: {TechnoParv},
      shortDescription: 'Adrenaline-pumping sports tournaments.',
      details: 'Get your game face on! Participate in thrilling sports competitions including cricket, football, and volleyball. Teamwork, strategy, and passion come together on the field.',
      rules: ['Team registration is mandatory.', 'Sportsman spirit is expected.', 'Referee\'s decision is final.']
    }
  ];

  const openModal = (event: EventModalProps['event']) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };


  return (
    <> {}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          {}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-tech bg-clip-text text-transparent">अNवेshण</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's Explore...
            </p>
          </motion.div>

          {}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-2xl p-8 hover:bg-glass/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-primary">Let's Explore the Fest</h3>
                <p className="text-foreground/80 leading-relaxed">
                Welcome to अन्वेषण 2025, the dynamic sequel to our college tech fest hosted by SAGE University Indore. Building on the triumph of our inaugural event, we're excited to announce that अन्वेषण 2025 will run from September 15th to 17th, 2025. This three-days extravaganza guarantees a thrilling experience with tech competitions, and engaging activities for all interests. Prepare for an array of captivating events, forums, competitions, and tech showcases, culminating in a celebration of talent and innovation. Join us for an unforgettable experience!
                </p>
                <p className="text-foreground/80 leading-relaxed">
                The event is being held in association with the CSI (Computer Society of India), ACM (Association for Computing Machinery), and IEEE (Institute of Electrical and Electronics Engineers) student branches, indicating a strong focus on technology and engineering. Prepare for an array of captivating events, forums, competitions, and tech showcases, culminating in a celebration of talent and innovation. Join us for an unforgettable experience!
                </p>
              </div>

              <div className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-2xl p-8 hover:bg-glass/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Sage University Indore</h3>
                <p className="text-foreground/80 leading-relaxed">
                SAGE University, Indore, as one of the pioneer universities of Madhya Pradesh, established by the Act of State Government of Madhya Pradesh, in the year 2017, also it is approved under UGC Section 2(f) in the year 2019. The SAGE University, Indore is the youngest university of India accredited with NAAC A+ grade in its first cycle. The SAGE University works under the banner of SAGE Group and is proudly imparting quality education to more than 12000 students in multiple disciplines under the guidance of a man with a vision, Er. Sanjeev Agrawal, CMD, The Sage Group and Chancellor, SAGE University, Indore, well-known entrepreneur, real estate developer, philanthropist and dedicated educator from Central India involved directly and indirectly in various charitable, socially and environmentally conscious pursuits.
                </p>
              </div>
            </motion.div>

            {}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img 
                src={Anveshan} 
                alt="Anveshan 2025 Poster" 
                className="rounded-2xl shadow-2xl w-auto h-full object-cover"
              />
            </motion.div>
          </div>
          
          {/* <-- CHANGE: Events cards ke liye naya section */}
          <div className="my-20">
             <h2 className="text-4xl md:text-5xl text-center font-bold mb-8">
              Our <span className="bg-gradient-tech bg-clip-text text-transparent">Fests</span>
            </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {events.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-xl hover:bg-glass/50 hover:shadow-glass transition-all duration-300 group cursor-pointer overflow-hidden"
                    onClick={() => {
                      const modalImageSrc = typeof event.modalImage === 'object' ? event.modalImage.TechnoParv : event.modalImage;
                      openModal({
                        title: event.title,
                        modalImage: modalImageSrc,
                        details: event.details,
                        rules: event.rules,
                      });
                    }}
                  >
                    <img
                      src={typeof event.cardImage === 'object' ? event.cardImage.TechnoParvMini : event.cardImage}
                      alt={event.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">{event.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{event.shortDescription}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* <-- CHANGE: Modal ko conditionally render kiya */}
      {isModalOpen && <EventModal event={selectedEvent} onClose={closeModal} />}
    </>
  );
};

export default AboutSection;