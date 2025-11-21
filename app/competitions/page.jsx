"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { motion } from "framer-motion";
import { Trophy, Code, Cpu, Palette } from "lucide-react";
import { useState } from "react";

const competitions = [
  {
    id: 1,
    title: "Code Sprint",
    description: "24-hour hackathon to build innovative solutions.",
    icon: Code,
    category: "Technical",
    prize: "₹150",
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    id: 2,
    title: "Robo Wars",
    description: "Battle of robots in an electrifying arena.",
    icon: Cpu,
    category: "Technical",
    prize: "₹140",
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: 3,
    title: "Design Challenge",
    description: "UI/UX creativity competition for designers.",
    icon: Palette,
    category: "Technical",
    prize: "₹30",
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    id: 4,
    title: "Tech Quiz",
    description: "Quiz competition based on modern technology.",
    icon: Trophy,
    category: "Technical",
    prize: "₹220",
    image: "https://picsum.photos/800/600?random=4"
  },

  // First batch of 16
  ...Array.from({ length: 16 }).map((_, i) => ({
    id: i + 5,
    title: `Competition ${i + 5}`,
    description: "This is a sample competition description.",
    icon: Trophy,
    category: "Technical",
    prize: "₹100",
    image: `https://picsum.photos/800/600?random=${i + 5}`
  })),

  // Duplicate batch
  {
    id: 21,
    title: "Code Sprint",
    description: "24-hour hackathon to build innovative solutions.",
    icon: Code,
    category: "Technical",
    prize: "₹150",
    image: "https://picsum.photos/800/600?random=21"
  },
  {
    id: 22,
    title: "Robo Wars",
    description: "Battle of robots in an electrifying arena.",
    icon: Cpu,
    category: "Technical",
    prize: "₹140",
    image: "https://picsum.photos/800/600?random=22"
  },
  {
    id: 23,
    title: "Design Challenge",
    description: "UI/UX creativity competition for designers.",
    icon: Palette,
    category: "Technical",
    prize: "₹30",
    image: "https://picsum.photos/800/600?random=23"
  },
  {
    id: 24,
    title: "Tech Quiz",
    description: "Quiz competition based on modern technology.",
    icon: Trophy,
    category: "Technical",
    prize: "₹220",
    image: "https://picsum.photos/800/600?random=24"
  },

  // Second batch of 16
  ...Array.from({ length: 16 }).map((_, i) => ({
    id: i + 25,
    title: `Competition ${i + 25}`,
    description: "This is a sample competition description.",
    icon: Trophy,
    category: "Technical",
    prize: "₹100",
    image: `https://picsum.photos/800/600?random=${i + 25}`
  }))
];



const CompetitionsSection = () => {
  const [selectedComp, setSelectedComp] = useState(null);

  const lazyVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <>
      <Navbar isTabsVisible={true} />

      <section id="competitions" className="py-20 px-6 bg-black text-white">
        <div className="max-w-full mx-auto pt-[20px]">

          {/* Heading */}
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-golden mb-4 text-center">
            Competitions
          </h2>
          <p className="font-rajdhani text-lg text-foreground/80 text-center mb-12">
            Compete, Excel, and Win Amazing Prizes
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitions.map((comp) => (
              <motion.div
                key={comp.id}
                variants={lazyVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="bg-background/40 border border-golden/40 shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all rounded-xl overflow-hidden">

                  {/* Image */}
                  <div className="h-43 w-full overflow-hidden">
                    <Image
                      height={400}
                      width={400}
                      src={comp.image}
                      alt={comp.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-3 bg-golden/10 rounded-lg border border-golden/30">
                        <comp.icon className="w-6 h-6 text-golden" />
                      </div>
                      <span className="text-golden font-orbitron text-sm font-bold">
                        {comp.prize}
                      </span>
                    </div>

                    <CardTitle className="font-orbitron text-xl text-golden">
                      {comp.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-4">
                    <p className="font-rajdhani text-base text-gray-300 mb-4">
                      {comp.description}
                    </p>

                    <Button
                      onClick={() => setSelectedComp(comp)}
                      className="w-full bg-golden text-black hover:bg-golden/90 font-rajdhani font-semibold"
                    >
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Dialog open={!!selectedComp} onOpenChange={() => setSelectedComp(null)}>
        <DialogContent className="bg-black/90 border-golden/40 border backdrop-blur-xl text-white">
          <DialogHeader>
            <DialogTitle className="text-golden font-orbitron">
              Enroll in {selectedComp?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 font-rajdhani">
            <p className="text-gray-300 text-lg">
              Please fill your details to continue enrollment.
            </p>

            <Button className="w-full mt-6 bg-golden text-black font-semibold font-rajdhani">
              Proceed to Form
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CompetitionsSection;
