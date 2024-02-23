import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {ReactTyped} from 'react-typed';

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer
} from "../styles/Global.styled";

import {
  ShowcaseImageCard,
  ShowcaseParticleContainer,
  Particle,
} from "../styles/Showcase.styled";

import { BsLinkedin, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { FaGithub } from 'react-icons/fa';

import ShowcaseImg from "../assets/showcase-img.png";
import ShowcaseImg2 from "../assets/showcase-img2.svg";
import BackgroundImg from "../assets/particle.png";

import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const Showcase = () => {

  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="18%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer align="left" gap="6rem" responsiveDirection="column-reverse" fullWidthChild>
        {/* --left-content-- */}
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h4" size="h4">
            Hello!
          </Heading>

          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            I'm <BlueText>Mandeep Pareek</BlueText>
          </Heading>

          <Heading as="h3" size="h3">
            I'm a <BlueText>
              <ReactTyped
                strings={[
                  "Student",
                  "Web Developer",
                  "Learner",
                ]}
                typeSpeed={180}
                backSpeed={100}
                loop></ReactTyped>
            </BlueText>
          </Heading>

          <ParaText as="p" top="2rem" bottom="4rem">
            Hello, My name is Mandeep Pareek and I'm Full Stack Developer and Learner, eager to grasp new knowledge. I have project experience in creating and designing user-friendly websites and web applications.
          </ParaText>

          {/* --Social-Icons-- */}
          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="blue" size="1.5rem">
              <BsLinkedin />
            </IconContainer>

            <IconContainer color="blue" size="1.5rem">
              <BsYoutube />
            </IconContainer>

            <IconContainer color="blue" size="1.5rem">
              <FaGithub />
            </IconContainer>
          </FlexContainer>
        </motion.div>

        {/* --Right-Content-- */}
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          justify="flex-end"
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img className="shimg" src={ShowcaseImg2} alt="showcase" />
            </ShowcaseImageCard>

            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              alt="particle"
              top="-80px"
              left="20px"
              rotate="60deg"
            />
            <Particle
                as={motion.img}
                animate={{
                  y: [0, 100, 0],
                  rotate: 360,
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                }}
              src={BackgroundImg}
              alt="particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />
            <Particle
                as={motion.img}
                animate={{
                  y: [0, -100, 0],
                  rotate: 360,
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                }}
              src={BackgroundImg}
              alt="particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
