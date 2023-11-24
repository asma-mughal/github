'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './styles';
import { exploreWorlds } from './constants';
import { staggerContainer } from './utils/motion';
import { TitleText, TypingText } from './CustomTexts';
import ExploreCard from './ExploreCard';
const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Discover Opportunities" textStyles="text-center" />
      <TitleText
        title={<>Explore the Possibilities <br className="md:block hidden" /> with Our CRM Solutions</>}
        textStyles="text-center"
      />
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {exploreWorlds.map((solution, index) => (
          <ExploreCard
            key={solution.id}
            {...solution}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </motion.div>
  </section>
  );
};

export default Explore;
