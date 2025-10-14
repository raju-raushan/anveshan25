import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import LogoLoop from './LogoLoop';
import PP from './assets/pp.png';
import GoG from './assets/GoG.png';
import Masai from './assets/masai.png';
import YP from './assets/yp.png'
import CollegeDekho from './assets/CollegeDekho.png';
import Samatrix from './assets/samatrix.png'


const imageLogos = [
  { src: PP, alt: "Peer Pressure Solutions", href: "#" },
  { src: GoG, alt: "Geeks of Gotham", href: "#" },
  { src: Masai, alt: "Masai School", href: "#" },
  { src: CollegeDekho, alt: "College Dekho", href: "#" },
  { src: YP, alt: "Youth Parliament", href: "#" },
  { src: Samatrix, alt: "Samatrix", href: "#" },
];

export default function Sponsor() {
  return (
    // 1. Changed the main container style to use Tailwind classes for background and padding
    <section className="py-10 bg-gray-200"> 
      
      {/* 2. Container for the logo loop */}
      <div 
        style={{ height: '100px', position: 'relative', overflow: 'hidden'}} 
        className="w-full"
      >
        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="left"
          logoHeight={80} // INCREASED SIZE
          gap={48} // Slightly increased gap for larger logos
          pauseOnHover
          scaleOnHover
          fadeOut
          // FADE OUT COLOR changed to match the yellow background (#FACC15 is yellow-400)
          fadeOutColor="black" 
          ariaLabel="Technology partners"
        />
      </div>

      <div style={{margin:'50px'}}></div>

      <div 
        style={{ height: '100px', position: 'relative', overflow: 'hidden'}} 
        className="w-full"
      >
        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="right"
          logoHeight={80} // INCREASED SIZE
          gap={48} // Slightly increased gap for larger logos
          pauseOnHover
          scaleOnHover
          fadeOut
          // FADE OUT COLOR changed to match the yellow background (#FACC15 is yellow-400)
          fadeOutColor="black" 
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}