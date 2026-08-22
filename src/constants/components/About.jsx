import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className='xs:w-[250px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

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
        Senior Full-Stack Engineer with 8+ years building cloud-native applications in React, TypeScript, and Node.js — and 5+ years on the front lines of client relationships, sales, and customer support that shaped how I solve problems today. 
        I design REST APIs and microservices, integrate LLMs ;Claude, Gemini, GPT; into production features, and deploy end-to-end solutions across GCP, AWS, and Kubernetes. 
        But the technical stack is only half the story: years spent earning the trust of demanding clients and hitting ambitious targets taught me to listen first, translate business needs into working software, and stay resilient when things get complex. 
        Whether you&apos;re a recruiter looking for someone who ships reliable, scalable code, or a client with an idea that needs to become real — 
        I bring both the engineering depth and the collaborative instinct to get it done. 
        Let&apos;s build something that matters.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const AboutSection = SectionWrapper(About, "about");

export default AboutSection;
