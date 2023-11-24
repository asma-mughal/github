import { motion } from 'framer-motion';
import { TypingText } from './CustomTexts';

import styles from './styles';
import { fadeIn, staggerContainer } from './utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10 font-poppins`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Company" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
       <span className="font-extrabold ">CRM Solutions</span> empower your business
to thrive in a digitally connected world. Step into the future of customer
relationship management where you can seamlessly engage with clients,
deliver personalized experiences, and turn business dreams into reality.
Experience the true power of the{' '}
<span className="font-extrabold">CRM </span> as we redefine
customer interactions for the modern age. Let's embark on this journey of
<span className="font-extrabold "> CRM Exploration</span> by scrolling below.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
