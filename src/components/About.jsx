import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
Welcome to my realm ! This is Tejas Joshi, a spirited Computer Science Engineering enthusiast currently navigating the captivating landscapes of IIIT Vadodara. 🎓✨ <br/>

Dance with me in the code symphony where languages like C, C++, and Python weave tales, and the art of web development springs to life through HTML, CSS, and JavaScript. 🌐💻

<br/>As a creator and explorer, I craft dynamic web experiences using React.js and Node.js, orchestrating seamless web development and immersive 3D game environments. The digital canvas is my playground, where Unity3D comes alive with AR application. 🕹️🚀

<br/>Beyond the screen, my journey extends to the realms of leadership and creativity. I've orchestrated TEDxIIITV, navigated literature fests, and steered the ship as the Chief Editor of the annual institute magazine 'Nakshatra.' 📚✨

<br/>Join me as we venture into the future, where technology meets creativity, and every line of code tells a story. From NDA qualifications to TEDx triumphs, every step is a pixel in the grand mosaic of my digital odyssey. 🌟✨

<br/>Welcome to the intersection of passion and proficiency, where the possibilities are as vast as the digital horizon. 
<br />Let's code, create, and conquer together! 💻🚀✨





      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");