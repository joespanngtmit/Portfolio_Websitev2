import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../components/ParticlesBackground'

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Initializes the tsparticles engine and loads all the necessary features
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        // Background settings
        background: {
          color: {
            value: "", // Background color. Change this to the color you want (e.g., #ffffff for white, #0d47a1 for blue)
          },
        },

        // Frames per second limit (controls the performance of the particle system)
        fpsLimit: 60,

        // Interactivity settings
        interactivity: {
          events: {
            // Enable "push" mode when the user clicks on the screen
            onClick: { enable: true, mode: "push" },
            // Enable "repulse" mode when the user hovers the mouse over the screen
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            // "push" mode adds particles on click
            push: { quantity: 4 },
            // "repulse" mode repels particles when the user hovers over them
            repulse: { distance: 200, duration: 0.4 },
          },
        },

        // Particles settings
        particles: {
          // Particle color (change to any color you want)
          color: { value: "#D136CA" },

          // Particles links settings
          links: {
            color: "#ffffff", // Link color between particles
            distance: 150, // Maximum distance between particles to form a link
            enable: true, // Enable particle links
            opacity: 0.5, // Opacity of the links
            width: 1, // Width of the links
          },

          // Particle collisions settings
          collisions: { enable: true }, // Enable collisions between particles

          // Particle movement settings
          move: {
            direction: "none", // No specific direction for the movement
            enable: true, // Enable particle movement
            outModes: { default: "bounce" }, // Particles bounce when they hit the screen borders
            random: false, // Particles will not move randomly
            speed: 2, // Speed of the particles
            straight: false, // Particles will not move in a straight line
          },

          // Number of particles and their density settings
          number: { density: { enable: true, area: 800 }, value: 80 },

          // Particle opacity
          opacity: { value: 0.5 }, // Opacity of the particles

          // Particle shape settings
          shape: { type: "circle" }, // Shape of the particles (circle is the default)

          // Particle size settings
          size: { value: { min: 1, max: 5 } }, // Size range for the particles
        },

        // Retina support (high-DPI screens)
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
