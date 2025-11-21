import { Button } from "@/components/ui/button";
import Link  from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Code, Cpu, Palette } from "lucide-react";

const competitions = [
  {
    id: 1,
    title: "Code Sprint",
    description: "24-hour hackathon to build innovative solutions",
    icon: Code,
    category: "Technical",
    prize: "₹150"
  },
  {
    id: 2,
    title: "Robo Wars",
    description: "Battle of the bots in an epic arena showdown",
    icon: Cpu,
    category: "Technical",
    prize: "₹140"
  },
  {
    id: 3,
    title: "Design Challenge",
    description: "Showcase your creativity in UI/UX design",
    icon: Palette,
    category: "Technical",
    prize: "₹30"
  },
  {
    id: 4,
    title: "Tech Quiz",
    description: "Test your knowledge in technology and innovation",
    icon: Trophy,
    category: "Technical",
    prize: "₹220"
  }
];

const CompetitionsSection = () => {
  return (
    <section id="competitions" className="py-16 px-6 bg-background/30 text-white">
      <div className="max-w-8xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-golden mb-4 text-center">
          Competitions
        </h2>
        <p className="font-rajdhani text-lg text-foreground/80 text-center mb-12">
          Compete, Excel, and Win Amazing Prizes
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {competitions.map((comp) => (
            <Card 
              key={comp.id} 
              className="bg-background/50 border-golden/30 hover:border-golden/60 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
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
                <CardDescription className="font-rajdhani text-base text-foreground/70">
                  {comp.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/competitions"
                >
                <Button
                  className="w-full bg-golden text-black hover:bg-golden/90 font-rajdhani font-semibold"
                >
                    Enroll Now
                </Button>
                  </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
