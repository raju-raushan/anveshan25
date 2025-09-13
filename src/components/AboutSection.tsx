import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Rocket, Users, Trophy, Code, Brain } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Techno Parv',
      description: 'Sports events that push the boundaries of innovation'
    },
    {
      icon: Brain,
      title: 'Fun Fair',
      description: 'Fun games that push the boundaries of innovation'
    },
    {
      icon: Rocket,
      title: 'Cultural Carnival',
      description: 'Cultural events that push the boundaries of innovation'
    },
    {
      icon: Users,
      title: 'Tech Talks',
      description: 'Learn from industry experts and visionary thought leaders'
    },
    {
      icon: Rocket,
      title: 'Sports',
      description: 'Cultural events that push the boundaries of innovation'
    },
    {
      icon: Trophy,
      title: 'Competitions',
      description: 'Win exciting prizes in diverse technical and creative challenges'
    }
  ];

  const timeline = [
    { year: '2019', title: 'Genesis', description: 'अNवEषN was born with 500 participants' },
    { year: '2020', title: 'Digital Revolution', description: 'First virtual fest reaching 2000+ students globally' },
    { year: '2021', title: 'Innovation Hub', description: 'Introduced AI/ML competitions and startup incubation' },
    { year: '2022', title: 'Global Expansion', description: '50+ international universities participated' },
    { year: '2023', title: 'Tech Excellence', description: 'Recognized as India\'s top university tech fest' },
    { year: '2024', title: 'Future Vision', description: 'Super exciting fest' }
  ];

  return (
    <section id="about" className="py-20 tech-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Mission & Vision */}
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
            </div>

            <div className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-2xl p-8 hover:bg-glass/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Sage University Indore: A Blend of Modern Facilities and Academic Excellence</h3>
              <p className="text-foreground/80 leading-relaxed">
              SAGE University, Indore, as one of the pioneer universities of Madhya Pradesh, established by the Act of State Government of Madhya Pradesh, in the year 2017, also it is approved under UGC Section 2(f) in the year 2019. The SAGE University, Indore is the youngest university of India accredited with NAAC A+ grade in its first cycle. The SAGE University works under the banner of SAGE Group and is proudly imparting quality education to more than 12000 students in multiple disciplines under the guidance of a man with a vision, Er. Sanjeev Agrawal, CMD, The Sage Group and Chancellor, SAGE University, Indore, well-known entrepreneur, real estate developer, philanthropist and dedicated educator from Central India involved directly and indirectly in various charitable, socially and environmentally conscious pursuits.
              </p>
            </div>


          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-xl p-6 hover:bg-glass/50 hover:shadow-glass transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-gradient-primary rounded-lg w-fit group-hover:shadow-tech transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="bg-gradient-tech bg-clip-text text-transparent">Journey</span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />

            <div className="space-y-16">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-glass/30 backdrop-blur-sm border border-glass-border rounded-xl p-6 hover:bg-glass/50 transition-all duration-300">
                      <div className="text-2xl font-bold text-primary mb-2">{event.year}</div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{event.title}</h4>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-glow" />
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;