import React from 'react';
import cyberLogo from '../components/assets/Person/mee-removebg-preview.png';

/**
 * App component renders an interactive, 3D-effect cyber card.
 * The complex hover effect is achieved using a 5x5 grid of "tracker" elements
 * and corresponding CSS transform rules, giving the illusion of depth and movement
 * based on the mouse position.
 */
const App = () => {
  // Array to generate all 25 tracker elements for the 5x5 grid
  const trackers = Array.from({ length: 25 }, (_, i) => (
    <div key={i} className={`tracker tr-${i + 1}`} />
  ));

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 font-sans p-4">
      <div className="container noselect">
        <div className="canvas">
          {/* 5x5 grid of trackers for the 3D hover effect */}
          {trackers}

          <div id="card">
            <div className="card-content">
              {/* Visual effects */}
              <div className="card-glare" />
              <div className="cyber-lines">
                <span /><span /><span /><span />
              </div>
              
              {/* The image replacement for "HOVER ME" */}
              <img 
                id="prompt" 
                src={cyberLogo} 
                alt="Cyber Logo" 
                className="rounded-lg border border-opacity-30 border-[#00ffaa]"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { 
                  (e.target as HTMLImageElement).onerror = null; 
                  (e.target as HTMLImageElement).src = "https://placehold.co/60x60/171717/00ffaa?text=LOGO"; 
                }}
              />
              
              <div className="title">CYBER<br />CARD</div>
              <div className="glowing-elements">
                <div className="glow-1" />
                <div className="glow-2" />
                <div className="glow-3" />
              </div>
              
              <div className="subtitle">
                <span>INTERACTIVE</span>
                <span className="highlight">3D EFFECT</span>
              </div>
              
              <div className="card-particles">
                <span /><span /><span /> <span /><span /><span />
              </div>
              
              <div className="corner-elements">
                <span /><span /><span /><span />
              </div>
              
              <div className="scan-line" />
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          :root {
            font-family: 'Inter', sans-serif;
          }

          /* Base Container Styles */
          .container {
            position: relative;
            width: 190px;
            height: 254px;
            transition: 200ms;
          }

          .container:active {
            width: 180px;
            height: 245px;
          }

          /* Card Styles */
          #card {
            position: absolute;
            inset: 0;
            z-index: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            transition: 700ms;
            background: linear-gradient(45deg, #1a1a1a, #262626);
            border: 2px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
            box-shadow:
              0 0 40px rgba(0, 0, 0, 0.5), /* Enhanced shadow */
              inset 0 0 20px rgba(0, 0, 0, 0.2);
          }

          .card-content {
            position: relative;
            width: 100%;
            height: 100%;
          }

          /* Image (formerly Prompt) Styles */
          #prompt {
            bottom: 85px; /* Adjusted position for image */
            left: 50%;
            transform: translateX(-50%);
            z-index: 20;
            position: absolute;
            width: 60px; /* Set size for the image */
            height: 60px;
            object-fit: contain;
            transition: 300ms ease-in-out;
            border-radius: 8px; /* Rounded corners for the image */
            box-shadow: 0 0 10px rgba(0, 255, 170, 0.5); /* Image glow */
          }
          
          /* Title Styles */
          .title {
            opacity: 0;
            transition: 300ms ease-in-out;
            position: absolute;
            font-size: 28px;
            line-height: 1.1;
            font-weight: 800;
            letter-spacing: 4px;
            text-align: center;
            width: 100%;
            padding-top: 20px;
            background: linear-gradient(45deg, #00ffaa, #00a2ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
            text-shadow:
              0 0 10px rgba(92, 103, 255, 0.5),
              0 0 20px rgba(92, 103, 255, 0.3);
          }

          /* Subtitle Styles */
          .subtitle {
            position: absolute;
            bottom: 40px;
            width: 100%;
            text-align: center;
            font-size: 12px;
            letter-spacing: 2px;
            transform: translateY(30px);
            opacity: 0.8;
            color: rgba(255, 255, 255, 0.6);
            transition: transform 300ms ease-in-out;
          }
          
          .tracker:hover ~ #card .subtitle {
            transform: translateY(0);
          }

          .highlight {
            color: #00ffaa;
            margin-left: 5px;
            background: linear-gradient(90deg, #5c67ff, #ad51ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
          }

          /* Glowing Elements */
          .glowing-elements {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }

          .glow-1,
          .glow-2,
          .glow-3 {
            position: absolute;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: radial-gradient(
              circle at center,
              rgba(0, 255, 170, 0.3) 0%,
              rgba(0, 255, 170, 0) 70%
            );
            filter: blur(15px);
            opacity: 0;
            transition: opacity 0.5s ease;
          }

          .glow-1 {
            top: -20px;
            left: -20px;
            animation: pulseGlow 4s infinite alternate;
          }
          .glow-2 {
            top: 50%;
            right: -30px;
            transform: translateY(-50%);
            animation: pulseGlow 5s infinite alternate reverse;
          }
          .glow-3 {
            bottom: -20px;
            left: 30%;
            animation: pulseGlow 6s infinite alternate;
          }

          @keyframes pulseGlow {
            0% { transform: scale(0.9); }
            100% { transform: scale(1.1); }
          }
          
          /* Card Particles */
          .card-particles span {
            position: absolute;
            width: 3px;
            height: 3px;
            background: #00ffaa;
            border-radius: 50%;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          /* Hover effects */
          .tracker:hover ~ #card .title {
            opacity: 1;
            transform: translateY(-10px);
          }
          
          .tracker:hover ~ #card .subtitle {
            opacity: 1;
          }

          .tracker:hover ~ #card .glowing-elements div {
            opacity: 1;
          }

          .tracker:hover ~ #card .card-particles span {
            animation: particleFloat 2s infinite;
          }

          @keyframes particleFloat {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translate(calc(var(--x, 0) * 30px), calc(var(--y, 0) * 30px)) scale(0.5);
              opacity: 0;
            }
          }

          /* Particle positions (using CSS custom properties) */
          .card-particles span:nth-child(1) { --x: 1; --y: -1; top: 40%; left: 20%; }
          .card-particles span:nth-child(2) { --x: -1; --y: -1; top: 60%; right: 20%; }
          .card-particles span:nth-child(3) { --x: 0.5; --y: 1; top: 20%; left: 40%; }
          .card-particles span:nth-child(4) { --x: -0.5; --y: 1; top: 80%; right: 40%; }
          .card-particles span:nth-child(5) { --x: 1; --y: 0.5; top: 30%; left: 60%; }
          .card-particles span:nth-child(6) { --x: -1; --y: 0.5; top: 70%; right: 60%; }

          /* Card ::before pseudo-element glow */
          #card::before {
            content: "";
            background: radial-gradient(
              circle at center,
              rgba(0, 255, 170, 0.15) 0%, /* Slightly stronger inner glow */
              rgba(0, 162, 255, 0.05) 50%,
              transparent 100%
            );
            filter: blur(25px); /* Increased blur */
            opacity: 0;
            width: 150%;
            height: 150%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: opacity 0.3s ease;
          }

          .tracker:hover ~ #card::before {
            opacity: 1;
          }

          /* Tracker setup */
          .tracker {
            position: absolute;
            z-index: 200;
            width: 100%;
            height: 100%;
          }

          .tracker:hover {
            cursor: pointer;
          }

          .tracker:hover ~ #card #prompt {
            opacity: 0; /* Hide image on hover */
          }

          .tracker:hover ~ #card {
            transition: 300ms;
            filter: brightness(1.1);
          }

          .canvas {
            perspective: 800px;
            inset: 0;
            z-index: 200;
            position: absolute;
            display: grid;
            grid-template-columns: repeat(5, 1fr); /* 5 columns */
            grid-template-rows: repeat(5, 1fr);    /* 5 rows */
            gap: 0px 0px;
            /* Grid areas for 25 trackers (tr-1 to tr-25) */
          }

          /* Manual Grid Area mapping for clarity (though not strictly necessary with the current generation logic) */
          ${Array.from({ length: 25 }, (_, i) => `.tr-${i + 1} { grid-area: tr-${i + 1}; }`).join('\n')}


          /* Utility Styles */
          .noselect {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          .card-glare {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              125deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.05) 45%,
              rgba(255, 255, 255, 0.1) 50%,
              rgba(255, 255, 255, 0.05) 55%,
              rgba(255, 255, 255, 0) 100%
            );
            opacity: 0;
            transition: opacity 300ms;
          }

          #card:hover .card-glare {
            opacity: 1;
          }

          /* Cyber Lines */
          .cyber-lines span {
            position: absolute;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(92, 103, 255, 0.2),
              transparent
            );
          }

          .cyber-lines span:nth-child(1) { top: 20%; left: 0; width: 100%; height: 1px; transform: scaleX(0); transform-origin: left; animation: lineGrow 3s linear infinite; }
          .cyber-lines span:nth-child(2) { top: 40%; right: 0; width: 100%; height: 1px; transform: scaleX(0); transform-origin: right; animation: lineGrow 3s linear infinite 1s; }
          .cyber-lines span:nth-child(3) { top: 60%; left: 0; width: 100%; height: 1px; transform: scaleX(0); transform-origin: left; animation: lineGrow 3s linear infinite 2s; }
          .cyber-lines span:nth-child(4) { top: 80%; right: 0; width: 100%; height: 1px; transform: scaleX(0); transform-origin: right; animation: lineGrow 3s linear infinite 1.5s; }

          @keyframes lineGrow {
            0% { transform: scaleX(0); opacity: 0; }
            50% { transform: scaleX(1); opacity: 1; }
            100% { transform: scaleX(0); opacity: 0; }
          }
          
          /* Corner Elements */
          .corner-elements span {
            position: absolute;
            width: 15px;
            height: 15px;
            border: 2px solid rgba(92, 103, 255, 0.3);
            transition: all 0.3s ease;
          }

          .corner-elements span:nth-child(1) { top: 10px; left: 10px; border-right: 0; border-bottom: 0; }
          .corner-elements span:nth-child(2) { top: 10px; right: 10px; border-left: 0; border-bottom: 0; }
          .corner-elements span:nth-child(3) { bottom: 10px; left: 10px; border-right: 0; border-top: 0; }
          .corner-elements span:nth-child(4) { bottom: 10px; right: 10px; border-left: 0; border-top: 0; }
          
          #card:hover .corner-elements span {
            border-color: rgba(92, 103, 255, 0.8);
            box-shadow: 0 0 10px rgba(92, 103, 255, 0.5);
          }

          /* Scan Line */
          .scan-line {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to bottom,
              transparent,
              rgba(92, 103, 255, 0.15), /* Slightly stronger scan line */
              transparent
            );
            transform: translateY(-100%);
            animation: scanMove 2s linear infinite;
          }

          @keyframes scanMove {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}
      </style>
    </div>
  );
}

export default App;
