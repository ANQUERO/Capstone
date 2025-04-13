import React from 'react';
import {
  Tagline,
  ParagraphTagline,
  TaglineButton,
  TaglineButton2,
} from '@lib/HeroLinks/jsx';
import Image from 'next-image'

const HeroBackground = () => (
  <div className="absolute inset-0 w-full h-full">
    <Image
      src=
      alt="Hero"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0">
      {/* Red overlay from left to transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#b1082a54] to-transparent"></div>

      {/* Brightness overlay from dark (60%) to light (90%) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 backdrop-brightness-100"></div>
    </div>
  </div>
);

// Main Hero section
const Hero = () => {
  return (
    <main className="relative max-w-11/12 h-screen mx-auto overflow-hidden rounded-xl">
      
      {/* Background component */}
      <HeroBackground />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col justify-center
       items-start h-full px-4 md:px-12 lg:px-20 text-white">

        <Tagline
          text1="Digital Solutions for"
          text2="your Business Needs"
          fontSizeClass="sm:text-4xl md:text-7xl"
        />

        <ParagraphTagline
          paragraph1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse varius enim in eros elementum tristique.
          Duis cursus, mi quis viverra ornare, eros dolor interdum 
          nulla, ut commodo diam libero vitae erat."
        />

        <div className="flex flex-col sm:flex-row gap-4">

          <TaglineButton 
          text="Contact Us" 
          fontSizeClass="py-2 px-10" 
          />
          <TaglineButton2 
          text="Book a Consultation" 
          fontSizeClass="py-2 px-10" 
          />

        </div>
      </div>
    </main>
  );
};

export default Hero;