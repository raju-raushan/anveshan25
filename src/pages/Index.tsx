import AboutSection from '@/components/AboutSection';
import ClickSpark from '@/components/ClickSpark';
import CyberTeamSection from '@/components/CyberTeamSection';
import EventGallery from '@/components/EventGallery';
import EventsPreview from '@/components/EventsPreview';
import HeroSection from '@/components/HeroSection';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
// import RippleGrid from '@/components/RippleGrid';
import ScrollStack from '@/components/ScrollStack';
import Sponsor from '@/components/Sponsor';
import TeamSection from "@/components/TeamSection";
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Footer from '../components/Footer';
import Particles from '../components/ParticleBackground';



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


  const scheduleData = [
    {
      day: 'Day 1',
      date: 'October 30, 2025',
      items: [
        { time: '9:00', title: 'Opening Ceremony', description: 'Welcome to Anveshan 2K25', speaker: 'Er. Sanjeev Agrawal', location: 'KalpVriksh Auditorium' },
        { time: '10:30', title: 'AI Innovation Keynote', description: 'The Future of Artificial Intelligence', speaker: 'Prof. Snehlata Mishra', location: 'Tech Hall A' },
        { time: '14:00', title: 'Hackathon Begins', description: '48-hour coding marathon starts', location: 'Innovation Lab' },
        { time: '16:00', title: 'Robotics Workshop', description: 'Build and program autonomous robots', speaker: 'Dr. Ritu Tondon', location: 'Lab B' }
      ]
    },
    {
      day: 'Day 2',
      date: 'October 31, 2025',
      items: [
        { time: '9:00', title: 'Blockchain Summit', description: 'Exploring decentralized technologies', speaker: 'Industry Experts', location: 'Conference Room' },
        { time: '11:00', title: 'Tech Startup Pitch', description: 'Young entrepreneurs present their ideas', location: 'Pitch Arena' },
        { time: '14:00', title: 'Gaming Competition', description: 'Esports and game development contest', location: 'Gaming Zone' },
        { time: '18:00', title: 'Cultural Night', description: 'Celebrating diversity in tech', location: 'Open Arena' }
      ]
    },
    {
      day: 'Day 3',
      date: 'November 1, 2025',
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
            {/* AboutSection now follows HeroSection and will slide up */}
            
            <AboutSection />
            
            <EventsPreview />
            <section id="gallery">
              <EventGallery/>
            </section>

            <section className="py-16 sm:py-20 tech-bg">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-2 sm:mb-2">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-2">
                    Our <span className="bg-gradient-tech bg-clip-text text-transparent">Sponsors</span>
                  </h2>
                </div>
              </div>
            </section>
            <Sponsor/>
            

            {/* Schedule */}
            <section id="schedule" className="py-16 sm:py-20 tech-bg">
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

            <TeamSection />



            {/* Cyber Team Section */}
            <CyberTeamSection />-

            {/* Contact Section */}
            <section id="contact" className="py-16 sm:py-20 tech-bg">
  <div className="container mx-auto px-4 sm:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Get in <span className="bg-gradient-tech bg-clip-text text-transparent">Touch</span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        Have questions? We'd love to hear from you.
      </p>
    </div>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Information (No Change) */}
      <div className="space-y-6 p-6 bg-surface rounded-lg border border-border">
        <h3 className="text-xl font-semibold">Contact Information</h3>
        <div className="space-y-4">
          <div>
            <p className="text-muted-foreground">Email:</p>
            <a href="mailto:anveshan@sageuniversity.in" className="text-primary hover:text-primary-glow">
              raushanraj1200@sageuniversity.in
            </a>
          </div>
          <div>
            <p className="text-muted-foreground">Phone:</p>
            <a href="tel:+917898048772" className="text-primary hover:text-primary-glow">
              +91 8804001436
            </a>
          </div>
          <div>
            <p className="text-muted-foreground">Address:</p>
            <p>SAGE University, Bypass Road, Kailod Kartal, Indore</p>
          </div>
        </div>
      </div>
      
      {/* Location / Google Map Embed (Updated Section) */}
      <div className="space-y-6 p-6 bg-surface rounded-lg border border-border">
        {/* FIX 1: Updated heading for map */}
        <h3 className="text-xl font-semibold">Our Location</h3>
        
        {/* FIX 2: Embedded Google Map iframe */}
        <div className="space-y-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.740889988849!2d75.92556557504886!3d22.585799733475873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f3ab625b84c7%3A0xc540b7ed7197f2c2!2sSAGE%20University%2C%20Indore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            // Ensure the map is full width and has a fixed height 
            // for good visibility on all screen sizes
            className="w-full h-64 rounded-md border-0" 
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SAGE University Location Map"
          />
          {/* Optional: Keep a link to view the map externally */}
          <a
            href="https://www.google.com/maps/place/SAGE+University,+Indore/@22.6364594,75.8493856,765m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3962e70944c157f1:0x6bfcff54a729dbb5!8m2!3d22.6364545!4d75.8519605!16s%2Fg%2F11gy9qshql?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D" // Replace with a direct link to the location
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm text-primary hover:text-primary-glow pt-2"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
          </main>
        </>
      )}
    </div>
    
  );
};

export default Index;