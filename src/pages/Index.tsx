import AboutSection from '@/components/AboutSection';
import CircularGallery from '@/components/CircularGallery';
import ClickSpark from '@/components/ClickSpark';
import EventsPreview from '@/components/EventsPreview';
import HeroSection from '@/components/HeroSection';
import LoadingScreen from '@/components/LoadingScreen';
import MasonryGallery from '@/components/MasonryGallery';
import Navigation from '@/components/Navigation';
import PixelCard from '@/components/PixelCard';
import ProfileCard from '@/components/ProfileCard';
import RippleGrid from '@/components/RippleGrid';
import ScrollStack from '@/components/ScrollStack';
import TeamSection from "@/components/TeamSection";
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import raushan from '../components/assets/mee-removebg-preview.png';
import ritu from '../components/assets/Ritu mam.png';
import sneha from '../components/assets/sneha mam.png';

// Gradient constants for ProfileCard
const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Sample data for components

  const speakers = [
    {
      name: "Tejas Dutta",
      designation: "Student",
      description: "Student of Computer Science and Engineering"
    },
    {
      name: "Raushan Raj",
      designation: "Student",
      description: "18+ years of experience in Student Life"
    },
    {
      name: "Navnita Sharma",
      designation: "Student",
      description: "Student of Computer Science and Engineering"
    }
  ];

  const organizers = [
    {
      name: "Dr. Ritu tondon",
      designation: "Faculty Coordinator",
      description: "Passionate about bringing together tech enthusiasts and creating memorable experiences.",
      image: {ritu}
    },
    {
      name: "Prof. Snehlata Mishra",
      designation: "Faculty Coordinator",
      description: "Full-stack developer with expertise in modern web technologies and event management.",
      image: {sneha}
    },
    {
      name: "Raushan Raj",
      designation: "Student Coordinator",
      description: "Creative marketing professional specializing in tech events and community building.",
      image: {raushan}
    }
  ];

  const galleryItems = [
    { id: 1, image: '', title: 'Hackathon 2024', category: 'Competition', height: 'medium' as const },
    { id: 2, image: '', title: 'AI Workshop', category: 'Learning', height: 'tall' as const },
    { id: 3, image: '', title: 'Robot Demo', category: 'Exhibition', height: 'short' as const },
    { id: 4, image: '', title: 'Tech Talk', category: 'Conference', height: 'medium' as const },
    { id: 5, image: '', title: 'Innovation Fair', category: 'Showcase', height: 'tall' as const },
    { id: 6, image: '', title: 'Networking', category: 'Social', height: 'short' as const }
  ];

  const highlights = [
    { id: 1, title: 'Innovation', description: 'Cutting-edge technology showcases' },
    { id: 2, title: 'Competition', description: 'Challenging contests and hackathons' },
    { id: 3, title: 'Learning', description: 'Educational workshops and seminars' },
    { id: 4, title: 'Networking', description: 'Connect with industry professionals' },
    { id: 5, title: 'Awards', description: 'Recognition for outstanding achievements' }
  ];

  const scheduleData = [
    {
      day: 'Day 1',
      date: 'September 15, 2025',
      items: [
        { time: '9:00', title: 'Opening Ceremony', description: 'Welcome to Anveshan 2K25', speaker: 'Er. Sanjeev Agrawal', location: 'Main Auditorium' },
        { time: '10:30', title: 'AI Innovation Keynote', description: 'The Future of Artificial Intelligence', speaker: 'Prof. Snehlata Mishra', location: 'Tech Hall A' },
        { time: '14:00', title: 'Hackathon Begins', description: '48-hour coding marathon starts', location: 'Innovation Lab' },
        { time: '16:00', title: 'Robotics Workshop', description: 'Build and program autonomous robots', speaker: 'Dr. Ritu Tondon', location: 'Lab B' }
      ]
    },
    {
      day: 'Day 2',
      date: 'September 16, 2025',
      items: [
        { time: '9:00', title: 'Blockchain Summit', description: 'Exploring decentralized technologies', speaker: 'Industry Experts', location: 'Conference Room' },
        { time: '11:00', title: 'Tech Startup Pitch', description: 'Young entrepreneurs present their ideas', location: 'Pitch Arena' },
        { time: '14:00', title: 'Gaming Competition', description: 'Esports and game development contest', location: 'Gaming Zone' },
        { time: '18:00', title: 'Cultural Night', description: 'Celebrating diversity in tech', location: 'Open Arena' }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative bg-black">
      {/* Global Ripple Grid Background */}
      <div className="fixed inset-0" style={{ zIndex: -1 }}>
        <RippleGrid
          enableRainbow={false}
          gridColor="#3b82f6"
          rippleIntensity={0.08}
          gridSize={8}
          gridThickness={12}
          mouseInteraction={true}
          mouseInteractionRadius={1.5}
          opacity={0.7}
        />
      </div>
      
      {/* Click Spark Effect */}
      <ClickSpark />

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <EventsPreview />
            
            {/* Speakers Section */}
            <section className="py-16 sm:py-20 tech-bg">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    Featured <span className="bg-gradient-tech bg-clip-text text-transparent">Speakers</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Learn from industry leaders and innovators
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {speakers.map((speaker, index) => (
                    <PixelCard
                      key={index}
                      name={speaker.name}
                      designation={speaker.designation}
                      description={speaker.description}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Event Gallery */}
            <section className="py-16 sm:py-20 tech-bg">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    Event <span className="bg-gradient-tech bg-clip-text text-transparent">Gallery</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Glimpses from previous editions
                  </p>
                </div>
                <MasonryGallery items={galleryItems} />
              </div>
            </section>

            {/* Highlights Circular Gallery */}
            <section className="py-16 sm:py-20 tech-bg">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    Event <span className="bg-gradient-tech bg-clip-text text-transparent">Highlights</span>
                  </h2>
                </div>
                <CircularGallery items={highlights} />
              </div>
            </section>

            {/* Schedule */}
            <section className="py-16 sm:py-20 tech-bg">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    Event <span className="bg-gradient-tech bg-clip-text text-transparent">Schedule</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Day-by-day program overview
                  </p>
                </div>
                <div className="space-y-16 sm:space-y-20">
                  {scheduleData.map((daySchedule, index) => (
                    <ScrollStack
                      key={index}
                      day={daySchedule.day}
                      date={daySchedule.date}
                      items={daySchedule.items}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Organizing Team */}
            <section className="py-16 sm:py-20 tech-bg">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    Organizing <span className="bg-gradient-tech bg-clip-text text-transparent">Team</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Meet the passionate team behind Anveshan 2K25
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {organizers.map((organizer, index) => (
                    <ProfileCard
                      key={index}
                      name={organizer.name}
                      title={organizer.designation}
                      handle={organizer.name.toLowerCase().replace(/\s+/g, '')}
                      status="Online"
                      contactText="Contact"
                      avatarUrl={organizer.image.ritu || organizer.image.sneha || organizer.image.raushan}
                      miniAvatarUrl={organizer.image.ritu || organizer.image.sneha || organizer.image.raushan}
                      showUserInfo={true}
                      enableTilt={true}
                      enableMobileTilt={false}
                      behindGradient={DEFAULT_BEHIND_GRADIENT}
                      innerGradient={DEFAULT_INNER_GRADIENT}
                      onContactClick={() => console.log(`Contact ${organizer.name}`)}
                    />
                  ))}
                </div>
              </div>
            </section>
            <TeamSection />
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
