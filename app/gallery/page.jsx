import Image from "next/image";
import Navbar from "@/components/navbar";

const galleryImages = [
  { id: 1, src: "/assets/GaurGopalDas.webp", alt: "IGNITIA 2025 - Opening Ceremony" },
  { id: 2, src: "/assets/img_10.webp", alt: "IGNITIA 2025 - Tech Event" },
  { id: 3, src: "/assets/img_11.webp", alt: "IGNITIA 2025 - Cultural Night" },
  { id: 4, src: "/assets/JavedAli.webp", alt: "IGNITIA 2025 - Dance Performance" },
  { id: 5, src: "/assets/img_3.webp", alt: "IGNITIA 2025 - Robotics Competition" },
  { id: 6, src: "/assets/img_4.webp", alt: "IGNITIA 2025 - Winners Celebration" },
  { id: 7, src: "/assets/img_5.webp", alt: "IGNITIA 2025 - Stage Show" },
  { id: 8, src: "/assets/img_6.webp", alt: "IGNITIA 2025 - Campus View" },
  { id: 9, src: "/assets/KirtiKulhari.webp", alt: "IGNITIA 2025 - Workshop Session" },
  { id: 10, src: "/assets/img_7.webp", alt: "IGNITIA 2025 - Team Activity" },
  { id: 11, src: "/assets/img_8.webp", alt: "IGNITIA 2025 - Innovation Expo" },
  { id: 12, src: "/assets/img_9.webp", alt: "IGNITIA 2025 - Musical Performance" },
  { id: 13, src: "/assets/img_3.webp", alt: "IGNITIA 2025 - Performance" },
];

const GallerySection = () => {
  return (
    <>
        <Navbar isTabsVisible={true}/>
        <section id="gallery" className="py-16 px-6 text-white bg-black">
        <div className="max-w-[90%] pt-[30px] mx-auto">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-golden mb-4 text-center animate-fade-in">
            Gallery
            </h2>
            <p className="font-rajdhani text-lg text-foreground/80 text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Memories from IGNITIA 2025
            </p>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 auto-rows-[120px]">
            {/* Large featured item - top left */}
            <div
                className="col-span-4 row-span-3 group relative overflow-hidden rounded-xl border border-golden/20 
                        hover:border-golden transition-all duration-500 cursor-pointer animate-scale-in
                        hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]"
                style={{ animationDelay: '0.1s' }}
            >
                <Image
                height={300}
                width={300}
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-rajdhani text-white text-lg font-bold">
                    {galleryImages[0].alt}
                    </p>
                </div>
                </div>
            </div>

            {/* Medium item - top right */}
            <div
                className="col-span-2 row-span-2 group relative overflow-hidden rounded-xl border border-golden/20 
                        hover:border-golden transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: '0.2s' }}
            >
                <Image
                height={300}
                width={300}
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-rajdhani text-white text-sm font-semibold">
                    {galleryImages[1].alt}
                    </p>
                </div>
                </div>
            </div>

            {/* Small item */}
            <div
                className="col-span-2 row-span-1 group relative overflow-hidden rounded-xl border border-golden/20 
                        hover:border-golden transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: '0.3s' }}
            >
                <Image
                height={300}
                width={300}
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Small item 2 */}
            <div
                className="col-span-2 row-span-1 group relative overflow-hidden rounded-xl border border-golden/20 
                        hover:border-golden transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: '0.35s' }}
            >
                <Image
                height={300}
                width={300}
                src={galleryImages[8].src}
                alt={galleryImages[8].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Wide item */}
            <div
                className="col-span-4 row-span-2 group relative overflow-hidden rounded-xl border border-golden/20 
                        hover:border-golden transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: '0.4s' }}
            >
                <Image
                height={300}
                width={300}
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-rajdhani text-white text-sm font-semibold">
                    {galleryImages[3].alt}
                    </p>
                </div>
                </div>
            </div>

            {/* Tall item */}
            <div
                className="col-span-2 row-span-3 group relative overflow-hidden rounded-xl border border-golden/20 
                        hover:border-golden transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: '0.5s' }}
            >
                <Image
                height={300}
                width={300}
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-rajdhani text-white text-sm font-semibold">
                    {galleryImages[4].alt}
                    </p>
                </div>
                </div>
            </div>

            {/* Small square */}
            <div
                className="col-span-2 row-span-2 group relative overflow-hidden rounded-xl border border-golden/20 
                        hover:border-golden transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: '0.6s' }}
            >
                <Image
                height={300}
                width={300}
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Medium horizontal */}
            <div
                className="col-span-3 row-span-1 group relative overflow-hidden rounded-xl border border-golden/20 
                        hover:border-golden transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: '0.7s' }}
            >
                <Image
                height={300}
                width={300}
                src={galleryImages[6].src}
                alt={galleryImages[6].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Small item 3 */}
            <div
                className="col-span-1 row-span-1 group relative overflow-hidden rounded-xl border border-golden/20 
                        hover:border-golden transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: '0.75s' }}
            >
                <Image
                height={300}
                width={300}
                src={galleryImages[9].src}
                alt={galleryImages[9].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Medium item bottom */}
            <div
                className="col-span-3 row-span-2 group relative overflow-hidden rounded-xl border border-golden/20 
                        hover:border-golden transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: '0.8s' }}
            >
                <Image
                height={300}
                width={300}
                src={galleryImages[7].src}
                alt={galleryImages[7].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-rajdhani text-white text-sm font-semibold">
                    {galleryImages[7].alt}
                    </p>
                </div>
                </div>
            </div>

            {/* Small item 4 */}
            <div
                className="col-span-1 row-span-1 group relative overflow-hidden rounded-xl border border-golden/20 
                        hover:border-golden transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: '0.85s' }}
            >
                <Image
                height={300}
                width={300}
                src={galleryImages[10].src}
                alt={galleryImages[10].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Medium square */}
            <div
                className="col-span-2 row-span-2 group relative overflow-hidden rounded-xl border border-golden/20 
                        hover:border-golden transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: '0.9s' }}
            >
                <Image
                height={300}
                width={300}
                src={galleryImages[11].src}
                alt={galleryImages[11].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-rajdhani text-white text-sm font-semibold">
                    {galleryImages[11].alt}
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  );
};

export default GallerySection;
  