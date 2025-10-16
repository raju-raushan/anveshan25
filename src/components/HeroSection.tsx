import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
// Assuming these are custom components you have
import SplitText from '@/components/SplitText'; 
import { Button } from '@/components/ui/button'; 

// Assets
import logoImage from './assets/logo copy.png';
import backgroundVideo from './assets/TimeBg.mp4'; 

// ----------------------------------------------------------------------
// 1. CountdownTimer Component (Kept unchanged for brevity)
// ----------------------------------------------------------------------

const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime(); 
    const now = new Date().getTime();
    const difference = target - now;
    
    type TimeLeft = { days?: number, hours?: number, minutes?: number, seconds?: number };
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); 
  }, []); 

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = timeLeft[interval as keyof typeof timeLeft] as number; 
    
    if (typeof value === 'undefined') { 
      return null;
    }

    return (
      <div 
        key={interval} 
        className="flex flex-col items-center p-3 sm:p-3 bg-glass/50 backdrop-blur-sm border border-glass-border rounded-xl transition-all duration-300 min-w-[65px] sm:min-w-[90px] shadow-lg" // Reduced min-w/padding
      >
        <div className="text-2xl sm:text-3xl font-extrabold text-primary"> {/* Reduced font size */}
          {value.toString().padStart(2, '0')} 
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase mt-1">
          {interval}
        </div>
        </div>
    );
  });

  return (
    <div className="flex justify-center gap-3 sm:gap-4">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-xl sm:text-2xl font-bold text-primary">The ultimate tech fest is live!</span>
      )}
    </div>
  );
};


// ----------------------------------------------------------------------
// 2. HeroSection Component
// ----------------------------------------------------------------------

const HeroSection: React.FC = () => {
  const targetDate = '2025-10-30T00:00:00'; 
  
  const [contentVisible, setContentVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  const baseDelay = contentVisible ? 0 : 3; 

  return (
    // min-h-screen ensures it takes at least one full viewport height
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      
      {/* 1. Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" /> 
        Your browser does not support the video tag.
      </video>

      {/* 2. Black Overlay */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: contentVisible ? 0.8 : 0 }} 
        transition={{ duration: 1, delay: contentVisible ? 0 : 2.5 }} 
        className="absolute inset-0 bg-black z-10" 
      />

      {/* 3. Main Content - Added py-12 for better vertical spacing on small screens */}
      <div className="relative container mx-auto px-4 sm:px-6 text-center py-12" style={{ zIndex: 20 }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: contentVisible ? 1 : 0, y: contentVisible ? 0 : 50 }} 
          transition={{ duration: 1, ease: "easeOut", delay: contentVisible ? 0 : 3.5 }} 
          // Reduced max-width slightly and adjusted vertical spacing
          className="max-w-4xl mx-auto space-y-4 sm:space-y-6"
        >
          {/* Main Title Area */}
          <div className="space-y-3 sm:space-y-4"> {/* Reduced vertical spacing */}
            
            {/* LOGO SIZE REDUCTION & CENTERING */}
            <div className='flex justify-center items-center h-auto'>
                <img 
                    src={logoImage} 
                    alt="Logo" 
                    // New class: Constrains the width and height of the image
                    className="w-full max-w-xl max-h-52 sm:max-h-72 object-contain" 
                />
            </div>
            {/* END LOGO SIZE REDUCTION */}

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: baseDelay + 0.4 }} 
              className="text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-wide px-4"
            >
              The Ultimate University Technical Festival is back with a bang!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: baseDelay + 0.6 }} 
              className="text-base sm:text-lg text-primary font-medium"
            >
              October 30<sup>th</sup> - November 1<sup>st</sup>, 2025 • SAGE University
            </motion.div>
          </div>

          {/* Description - Reduced vertical spacing */}
          {/* <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: baseDelay + 0.8 }} 
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4" 
          >
            Experience the future of technology through cutting-edge competitions, 
            groundbreaking workshops, and innovations that will reshape tomorrow.
          </motion.p> */}

          {/* Countdown Timer - Reduced margin/padding */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: baseDelay + 1.0 }} 
            className="mt-6 sm:mt-8 px-4" // Reduced from mt-12/16
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">Time Left to Innovation!</h3> {/* Reduced mb-4 to mb-3 */}
            <CountdownTimer targetDate={targetDate} />
          </motion.div>

          {/* CTA Buttons - Reduced padding-top */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: baseDelay + 1.4 }} 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 pt-4" // Reduced from pt-8
          >
            <Button size="lg" className="w-full sm:w-auto bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              <a href="https://sageuniversity.in/sage_events/anveshan/" target="_blank">Register Now</a>
              <Zap className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Explore Events
            </Button>
          </motion.div>
          
        </motion.div>
      </div>

      {/* Scroll Indicator (Kept its original position logic) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: contentVisible ? 1 : 0, y: contentVisible ? 0 : 20 }} 
        transition={{ duration: 0.8, delay: baseDelay + 2.2 }} 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2" style={{ zIndex: 20 }}
      >
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity }} 
            className="w-1 h-6 sm:h-8 bg-gradient-to-b from-primary to-transparent rounded-full" 
          />
        </div>
      </motion.div>
      
    </section>
  );
};

export default HeroSection;