import React from 'react';

// The placeholder URL and logo section have been removed to match your new simplified structure.

const Footer: React.FC = () => {
  return (
    // Changed padding from py-12/py-16 to py-3 (12px top/bottom) for a compact height.
    <footer className="bg-gray-950 text-gray-400 py-3 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Copyright and Developer Info */}
        <p className="text-sm sm:text-base mb-1 pt-1"> 
          &copy; 2025 | Designed & Developed by 
          {/* Highlight the name with a white color and bold font for emphasis */}
          <span className="font-semibold text-white ml-1">
            <a href="https://www.linkedin.com/in/raju-raushan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Raushan Raj</a>
          </span> 
        </p>

        {/* Rights Reserved */}
        <p className="text-xs sm:text-sm">
          All Rights Reserved | SAGE University, Indore
        </p>
      </div>
    </footer>
  );
};

// You would use this Footer component inside your main App component.
// For demonstration, here is the App component structure:
const App: React.FC = () => {
  return (
    // Added styling to ensure the footer is visible at the bottom of the page
    <div >
      <Footer />
    </div>
  );
};

export default App;
