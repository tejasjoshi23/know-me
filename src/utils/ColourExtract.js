import { FastAverageColor } from "fast-average-color";

const fac = new FastAverageColor();

/**
 * Extracts the average color from an image and injects dynamic CSS for hover effects.
 * @param {Array} skills - Array of skill objects with `name` and `icon` properties.
 * @param {Function} setSkillColors - State setter function for updating skill colors.
 */
export const extractColorsAndInjectCSS = (skills, setSkillColors) => {
  skills.forEach((skill) => {
    const img = new Image();
    img.src = skill.icon;
    img.crossOrigin = "Anonymous";

    img.onload = () => {
      let color = "#ffffff"; // Default fallback color
      try {
        color = fac.getColor(img).hex;
      } catch (error) {
        console.error(`Color extraction failed for ${skill.name}`, error);
      }

      // Update skill colors in the state
      setSkillColors((prevColors) => ({
        ...prevColors,
        [skill.name]: color,
      }));

      // Inject CSS style dynamically for hover effect
      const style = document.createElement("style");
      style.innerHTML = `
        .shadow-${skill.name}:hover {
          box-shadow: inset 0 0px 15px 3px ${color};
        }
      `;
      document.head.appendChild(style);
    };

    img.onerror = () => {
      console.error(`Failed to load image: ${img.src}`);
    };
  });
};
