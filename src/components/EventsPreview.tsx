import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Brain, Calendar, Clock, Code, Cpu, Gamepad2, Lightbulb, Smartphone, Trophy, Users } from 'lucide-react';
import React, { useState } from 'react';

const EventsPreview: React.FC = () => {
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Events');

  const eventCategories = [
    { name: 'All Events', active: selectedCategory === 'All Events' },
    { name: 'Techno Parv', active: selectedCategory === 'Techno Parv' },
    { name: 'Fun Fair', active: selectedCategory === 'Fun Fair' },
    { name: 'Cultural Carnival', active: selectedCategory === 'Cultural Carnival' },
    { name: 'Sports', active: selectedCategory === 'Sports' }
  ];

  const events = [
    {
      id: 1,
      title: 'Robo Race',
      category: 'Techno Parv',
      description: 'Robo Race to build innovative solutions for real-world problems',
      icon: Code,
      date: 'March 15-17',
      time: '9:00 AM',
      participants: '500+',
      prize: '₹1,00,000',
      difficulty: 'Advanced',
      image: 'hackathon-bg'
    },
    {
      id: 2,
      title: 'Paanel Show',
      category: 'Techno Parv',
      description: 'Showcase your machine learning models and AI-powered applications',
      icon: Brain,
      date: 'March 16',
      time: '10:00 AM',
      participants: '200+',
      prize: '₹50,000',
      difficulty: 'Intermediate',
      image: 'ai-bg'
    },
    {
      id: 3,
      title: 'Quizee Buizee',
      category: 'Techno Parv',
      description: 'Build and battle autonomous robots in the ultimate tech showdown',
      icon: Cpu,
      date: 'March 17',
      time: '2:00 PM',
      participants: '150+',
      prize: '₹75,000',
      difficulty: 'Advanced',
      image: 'robo-bg'
    },
    {
      id: 4,
      title: 'LAN GAming',
      category: 'Techno Parv',
      description: 'Create immersive games using cutting-edge technologies and frameworks',
      icon: Gamepad2,
      date: 'March 15-16',
      time: '11:00 AM',
      participants: '300+',
      prize: '₹40,000',
      difficulty: 'Intermediate',
      image: 'game-bg'
    },
    {
      id: 5,
      title: 'ParaCoding & DecoderSpyder',
      category: 'Techno Parv',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 6,
      title: 'Games',
      category: 'Techno Parv',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 7,
      title: 'Tech Debate',
      category: 'Fun Fair',
      description: 'Develop mobile applications that solve everyday problems',
      icon: Smartphone,
      date: 'March 16-17',
      time: '9:00 AM',
      participants: '250+',
      prize: '₹35,000',
      difficulty: 'Intermediate',
      image: 'mobile-bg'
    },
    {
      id: 8,
      title: 'Stalls',
      category: 'Fun Fair',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 9,
      title: 'Food',
      category: 'Fun Fair',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 10,
      title: 'Fashion Show',
      category: 'Cultural Carnival',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 11,
      title: 'Appareal Show',
      category: 'Cultural Carnival',
      description: 'Robo Race to build innovative solutions for real-world problems',
      icon: Code,
      date: 'March 15-17',
      time: '9:00 AM',
      participants: '500+',
      prize: '₹1,00,000',
      difficulty: 'Advanced',
      image: 'hackathon-bg'
    },
    {
      id: 12,
      title: 'Battle of Bands',
      category: 'Cultural Carnival',
      description: 'Showcase your machine learning models and AI-powered applications',
      icon: Brain,
      date: 'March 16',
      time: '10:00 AM',
      participants: '200+',
      prize: '₹50,000',
      difficulty: 'Intermediate',
      image: 'ai-bg'
    },
    {
      id: 13,
      title: 'Stand-Up Comedy',
      category: 'Cultural Carnival',
      description: 'Build and battle autonomous robots in the ultimate tech showdown',
      icon: Cpu,
      date: 'March 17',
      time: '2:00 PM',
      participants: '150+',
      prize: '₹75,000',
      difficulty: 'Advanced',
      image: 'robo-bg'
    },
    {
      id: 14,
      title: 'Stunt Mania',
      category: 'Cultural Carnival',
      description: 'Create immersive games using cutting-edge technologies and frameworks',
      icon: Gamepad2,
      date: 'March 15-16',
      time: '11:00 AM',
      participants: '300+',
      prize: '₹40,000',
      difficulty: 'Intermediate',
      image: 'game-bg'
    },
    {
      id: 15,
      title: 'Treasure Hunt',
      category: 'Cultural Carnival',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 16,
      title: 'Reels',
      category: 'Cultural Carnival',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 17,
      title: 'Short Movie Making',
      category: 'Cultural Carnival',
      description: 'Develop mobile applications that solve everyday problems',
      icon: Smartphone,
      date: 'March 16-17',
      time: '9:00 AM',
      participants: '250+',
      prize: '₹35,000',
      difficulty: 'Intermediate',
      image: 'mobile-bg'
    },
    {
      id: 18,
      title: 'Dancing',
      category: 'Cultural Carnival',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 19,
      title: 'Singing',
      category: 'Cultural Carnival',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 20,
      title: 'Chess',
      category: 'Sports',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 21,
      title: 'Chess',
      category: 'Sports',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 22,
      title: 'Kabbadi',
      category: 'Sports',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 23,
      title: 'Gully Cricket',
      category: 'Sports',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 24,
      title: 'Cricket',
      category: 'Sports',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 25,
      title: 'Football',
      category: 'Sports',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 26,
      title: 'Volley Ball',
      category: 'Sports',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 26,
      title: 'Basket Ball',
      category: 'Sports',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 27,
      title: 'Net Ball',
      category: 'Sports',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 28,
      title: 'Badminton',
      category: 'Sports',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    },
    {
      id: 29,
      title: 'Table Tennis',
      category: 'Sports',
      description: 'Present your startup ideas to industry experts and potential investors',
      icon: Lightbulb,
      date: 'March 17',
      time: '3:00 PM',
      participants: '100+',
      prize: '₹60,000',
      difficulty: 'Beginner',
      image: 'pitch-bg'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-primary bg-primary/10';
    }
  };

  // Filter events based on selected category
  const filteredEvents = events.filter(event => 
    selectedCategory === 'All Events' ? true : event.category === selectedCategory
  );

  // Show limited events (6) or all events based on state
  const displayedEvents = showAllEvents ? filteredEvents : filteredEvents.slice(0, 6);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setShowAllEvents(false); // Reset to show limited events when category changes
  };

  const handleViewAllEvents = () => {
    setShowAllEvents(true);
  };

  return (
    <section id="events" className="py-20 tech-bg">
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
            Featured <span className="bg-gradient-tech bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Dive into exciting competitions, workshops, and hackathons designed to challenge your skills and expand your horizons
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {eventCategories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryClick(category.name)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-primary text-primary-foreground border-primary shadow-tech'
                    : 'bg-glass/30 text-foreground border-glass-border hover:bg-glass/50'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-glass/30 backdrop-blur-sm border border-glass-border rounded-2xl p-6 hover:bg-glass/50 hover:shadow-glass transition-all duration-300"
            >
              {/* Event Icon */}
              <div className="relative mb-6">
                <div className="p-4 bg-gradient-primary rounded-xl w-fit group-hover:shadow-tech transition-all duration-300">
                  <event.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(event.difficulty)}`}>
                  {event.difficulty}
                </div>
              </div>

              {/* Event Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Event Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                    <Clock className="w-4 h-4 text-primary ml-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Trophy className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-accent">{event.prize}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full mt-6 bg-gradient-primary hover:shadow-tech transition-all duration-300 group-hover:scale-105"
                >
                  Register Now
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View All Events CTA */}
        {!showAllEvents && filteredEvents.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleViewAllEvents}
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-tech px-8 py-4 text-lg"
            >
              View All Events
            </Button>
          </motion.div>
        )}

        {/* Show Less Events Button */}
        {showAllEvents && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setShowAllEvents(false)}
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-tech px-8 py-4 text-lg"
            >
              Show Less Events
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventsPreview;