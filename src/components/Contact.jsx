import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactno: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send( 
        
        'service_p9n5f8a' ,  
        'template_10ccf7k',
        {
          from_name: form.name,
          to_name: "Tejas Joshi",
          from_email: form.email,
          to_email: "tejasj1823@gmail.com",
          message: form.message,
        },
        'TznmkQMgV5WRg9NvN'
      )
      .then(
        () => {
          setLoading(false);
          alert("Your message has been received, and rest assured, I'll circle back to you at the earliest opportunity.");

          setForm({
            name: "",
            email: "",
            contactno:"",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Let's Connect</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-5 flex flex-col gap-5'
        >
          <label className='flex flex-col'>
            <span className='text-yellow-300 font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-2 px-4 placeholder:text-secondary text-green-200 rounded-lg outline-none border-none font-medium-200'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-yellow-300 font-medium mb-2'>Your E-mail</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium-200'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-yellow-300 font-medium mb-2'>Your mobile number</span>
              <input
              type='tel' // Use type 'tel' for mobile numbers
              name='mobile'
              value={form.mobile}
              onChange={handleChange}
              placeholder="What's your mobile number?"
              //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // You can adjust the pattern as needed
              className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium-200'
          />
</label>

          <label className='flex flex-col'>
            <span className='text-yellow-300 font-medium mb-3'>Your Message</span>
            <textarea
              rows={4}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium-200'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-purple-500 font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");