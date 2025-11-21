"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import AboutSection from "@/components/AboutSeaction";
import CompetitionsSection from "@/components/CompetitionSection";
import GallerySection from "@/components/GallerySection";
import FeedbackSection from "@/components/FeedbackSection";

const HomePage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e)=> {
      const delta = 'deltaY' in e ? e.deltaY : 0;
      const contentBox = document.querySelector('.expanding-content-box');
      const isAtTop = contentBox ? contentBox.scrollTop === 0 : true;
      
      // Allow scrolling back up from expanded state when at top of content
      if (scrollProgress === 100 && delta < 0 && isAtTop) {
        e.preventDefault();
        setScrollProgress((prev) => Math.max(0, prev + delta * 0.3));
      }
      // During expansion animation (0-100)
      else if (scrollProgress < 100) {
        e.preventDefault();
        setScrollProgress((prev) => Math.max(0, Math.min(100, prev + delta * 0.3)));
      }
      // When fully expanded and scrolling down or not at top, allow normal scroll
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchmove", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [scrollProgress]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Grain texture background */}
      <div className="grain-texture fixed inset-0 bg-grain-dark" />
      
      {/* Grid Background with fade effect */}
      <div className="fixed inset-0 grid-background pointer-events-none" />
      
      {/* Vignette effect */}
      <div className="vignette-effect" />
      

      {/* Initial text */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pointer-events-none">
        <h2 
          className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl text-center px-6 text-golden transition-all duration-700"
          style={{
            textShadow: '0 0 20px hsl(var(--golden) / 0.5), 0 0 40px hsl(var(--golden) / 0.3)',
            opacity: scrollProgress < 30 ? 1 : Math.max(0, 1 - (scrollProgress - 30) / 20),
            transform: `translateY(${scrollProgress * 0.5}px) scale(${1 - scrollProgress * 0.005})`,
          }}
        >
          PRESENTING YOU THE<br />BIGGEST FEST OF PSIT
        </h2>
      </div>

      {/* Peeking box that expands on scroll */}
      <div 
        className="fixed left-1/2 pt-[80px] bg-background/95 border border-var(--golden) backdrop-blur-md shadow-2xl transition-all duration-500 ease-out overflow-hidden z-50"
        style={{
          bottom: `${-25 + (scrollProgress * 0.25)}vh`,
          width: `${Math.min(100, 50 + (scrollProgress * 0.5))}vw`,
          height: `${Math.min(100, 50 + (scrollProgress * 0.5))}vh`,
          transform: `translateX(-50%)`,
          borderRadius: scrollProgress < 90 ? '24px' : '0px',
          opacity: 0.95,
        }}
      >
        <Navbar />
        <div 
          className="expanding-content-box p-8 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-golden/30 scrollbar-track-background/20"
          style={{
            opacity: scrollProgress > 20 ? 1 : scrollProgress / 20,
            overflowY: scrollProgress >= 100 ? 'auto' : 'hidden',
          }}
        >
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-golden mb-8 text-center">
            IGNITIA 2K26
          </h1>
          
          <p className="font-rajdhani text-white text-lg md:text-xl text-foreground/90 mb-8 text-center max-w-3xl mx-auto">
            The most anticipated technical and cultural festival of the year. Join us for three days
            of innovation, competition, and celebration.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="p-6 bg-background/50 rounded-lg border-2 border-green-400">
              <h3 className="font-orbitron text-xl font-bold text-green-400 mb-3">Technical Events</h3>
              <p className="text-white font-rajdhani text-foreground/80">
                Hackathons, coding competitions, robotics challenges, and tech talks from industry leaders.
              </p>
            </div>
            
            <div className="p-6 bg-background/50 rounded-lg border-2 border-futuristic-glow">
              <h3 className="font-orbitron text-xl font-bold text-futuristic-glow mb-3">Cultural Events</h3>
              <p className="text-white font-rajdhani text-foreground/80">
                Dance, music, drama, fashion shows, and celebrity performances throughout the festival.
              </p>
            </div>
            
            <div className="p-6 bg-background/50 rounded-lg border-2 border-futuristic-accent">
              <h3 className="font-orbitron text-xl font-bold text-futuristic-accent mb-3">Workshops</h3>
              <p className=" text-white font-rajdhani text-foreground/80">
                Hands-on learning sessions covering AI, blockchain, web development, and emerging technologies.
              </p>
            </div>
            
            <div className="p-6 bg-background/50 rounded-lg border-2 border-purple-400">
              <h3 className="font-orbitron text-xl font-bold text-purple-400 mb-3">Networking</h3>
              <p className=" text-white font-rajdhani text-foreground/80">
                Connect with industry professionals, startups, and fellow students from across the country.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="font-rajdhani text-lg font-bold bg-golden text-background hover:bg-golden/90 px-8 py-6 transition-all shadow-lg"
            >
              Register Now
            </Button>
          </div>
          <AboutSection />
          <CompetitionsSection />
          <GallerySection />
          <FeedbackSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;