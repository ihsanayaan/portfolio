import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        options={{
          fullScreen: false,
          background: {
            color: "transparent",
          },

          fpsLimit: 60,

          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },

            color: {
              value: ["#ffffff", "#4EC6F1", "#6C63FF"],
            },

            shape: {
              type: "star",
            },

            opacity: {
              value: 0.7,
              random: true,
            },

            size: {
              value: { min: 1, max: 3 },
            },

            move: {
              enable: true,
              speed: 0.4,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },

            links: {
              enable: false,
            },
          },

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },

            modes: {
              grab: {
                distance: 120,
                links: {
                  opacity: 0.2,
                },
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;