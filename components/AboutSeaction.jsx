import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 text-white">
      <div className="max-w-8xl mx-auto">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-golden mb-8 text-center">
          About IGNITIA
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-[60px]">
          <div className="aspect-video bg-gradient-to-br hover:scale-[105%] transition-all duration-300 from-golden/20 to-background rounded-lg overflow-hidden border border-golden/30">
            <Image
              height={500}
              width={500} 
              src="/assets/GaurGopalDas.webp" 
              alt="IGNITIA Event 1" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="aspect-video bg-gradient-to-br hover:scale-[105%] transition-all duration-300 from-golden/20 to-background rounded-lg overflow-hidden border border-golden/30">
            <Image 
              height={500}
              width={500}
              src="/assets/JavedAli.webp" 
              alt="IGNITIA Event 2" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="aspect-video bg-gradient-to-br hover:scale-[105%] transition-all duration-300 from-golden/20 to-background rounded-lg overflow-hidden border border-golden/30">
            <Image 
              height={500}
              width={500}
              src="/assets/KirtiKulhari.webp" 
              alt="IGNITIA Event 3" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-background/50 border-2 border-golden">
            <CardContent className="p-6">
              <p className="font-rajdhani text-lg text-foreground/90 leading-relaxed">
                IGNITIA is the annual techno-cultural fest of PSIT, bringing together brilliant minds 
                from across the country. With a legacy of excellence, we showcase the perfect blend 
                of technical innovation and cultural celebration.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 border-2 border-golden">
            <CardContent className="p-6">
              <p className="font-rajdhani text-lg text-foreground/90 leading-relaxed">
                Over three days, experience cutting-edge competitions, mesmerizing performances, 
                inspiring workshops, and unforgettable memories. IGNITIA 2K26 promises to be our 
                biggest celebration yet!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
