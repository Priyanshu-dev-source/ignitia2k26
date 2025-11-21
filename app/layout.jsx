// import { Geist, Geist_Mono, Orbitron, Rajdhani } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const orbitron = Orbitron({
//   variable: "--font-orbitron",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

// const rajdhani = Rajdhani({
//   variable: "--font-rajdhani",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

// export const metadata = {
//   title: "Ignitia 2k26",
//   description: "PSIT Fest 2026",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${rajdhani.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


import { Suspense } from "react";
import { Geist, Geist_Mono, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Ignitia 2k26",
  description: "PSIT Fest 2026",
};

// 🌟 Suspense Loader Component
function GlobalLoader() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-black">
      <h1 className="text-golden font-orbitron text-3xl animate-pulse">
        Loading...
      </h1>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${rajdhani.variable} antialiased`}
      >
        {/* Wrap everything inside Suspense */}
        <Suspense fallback={<GlobalLoader />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
