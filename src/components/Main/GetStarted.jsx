'use client';

import { motion } from 'framer-motion';

import styles from './styles';
import { startingFeatures } from './constants';
import { TitleText, TypingText } from './CustomTexts';
import { staggerContainer, fadeIn, planetVariants } from './utils/motion';
import StartSteps from './StartSteps';
const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
  >
    <motion.div
      variants={planetVariants('left')}
      className={`flex-1 ${styles.flexCenter}`}
    >
      <img
        src="/pexels-edmond-dantès-8553867.jpg" // Replace with relevant CRM platform image
        alt="crm-platform"
        className="w-[90%] h-[90%] object-contain"
      />
    </motion.div>
    <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] flex justify-center flex-col"
    >
      <TypingText title="| Explore Our CRM Solutions" />
      <TitleText title={<>Discover the Power of CRM</>} />
      <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
        {startingFeatures.map((benefit, index) => (
          <StartSteps
            key={benefit}
            number={`${index < 10 ? '0' : ''} ${index + 1}`}
            text={benefit}
          />
        ))}
      </div>
    </motion.div>
  </motion.div>
</section>
);

export default GetStarted;
