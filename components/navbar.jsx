"use client"

import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-orbitron font-bold text-golden">IGNITIA 2K26</h1>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="font-rajdhani font-semibold border-golden text-golden hover:bg-golden hover:text-background transition-all"
            >
              Login
            </Button>
            <Button 
              className="font-rajdhani font-semibold bg-golden text-background hover:bg-golden/90 transition-all"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;