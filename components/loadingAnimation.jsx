"use client"
import React from "react";

const LoadingAnimation = () => {
    // Approximate text width for "IGNITIA 2K26" at 80px font size
    const textWidth = 650;
    const lineStartX = 400 - textWidth / 2; // Center of viewBox minus half text width
    const lineEndX = 400 + textWidth / 2;
    const textY = 95; // Text Y position
    const lineY = 150; // Line position below text (increased distance)
  
    return (
      <div className="fixed inset-0 w-screen h-screen z-50 bg-black flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 800 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Clip path to hide text below the line */}
          <defs>
            <clipPath id="textClip" clipPathUnits="userSpaceOnUse">
              <rect x="0" y="0" width="800" height="150" />
            </clipPath>
          </defs>
          
          {/* Text element with clip-path */}
          <g clipPath="url(#textClip)">
            <text
              x="50%"
              y={textY}
              dominantBaseline="middle"
              textAnchor="middle"
              fill="transparent"
              stroke="#FFD700"
              strokeWidth="3"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              className="animate-ignitia-intro-text"
              style={{
                fontSize: "80px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                letterSpacing: "0.1em",
              }}
            >
              IGNITIA 2K26
            </text>
          </g>
          
          {/* Left half of line - grows from center to left */}
          <line
            x1="400"
            y1={lineY}
            x2="75"
            y2={lineY}
            stroke="#FFD700"
            strokeWidth="4"
            strokeDasharray="325"
            strokeDashoffset="325"
            strokeLinecap="round"
            className="animate-ignitia-intro-line-left"
          />
          {/* Right half of line - grows from center to right */}
          <line
            x1="400"
            y1={lineY}
            x2="725"
            y2={lineY}
            stroke="#FFD700"
            strokeWidth="4"
            strokeDasharray="325"
            strokeDashoffset="325"
            strokeLinecap="round"
            className="animate-ignitia-intro-line-right"
          />
        </svg>
      </div>
    );
  };

  export default LoadingAnimation