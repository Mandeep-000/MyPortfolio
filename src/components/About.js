import React from "react";
import { motion } from "framer-motion";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";


import {
  AboutCard,
  LeftTextContainer,
  TextCard,
} from "../styles/About.styled";


import AboutImg1 from "../assets/about-left - Copy.svg";
import { fadeInLeftVariant, fadeInTopVariant, fadeInRightVariant } from "../utils/Variants";
import { GiGraduateCap } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";


const About = () => {
  return (
    <PaddingContainer
      id="About"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <Heading as={motion.h4} variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible" size="h4">
        ABOUT ME
      </Heading>

      <Heading as={motion.h2} variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible" size="h2" top="0.5rem">
        Know <BlueText>Me</BlueText>
      </Heading>

      <PaddingContainer top="2rem">
        <FlexContainer fullWidthChild>
          <AboutCard className="aboutcard">
            <FlexContainer direction="row" justify="space-around" width="100%">

              {/* --Left-Section-- */}
              <PaddingContainer as={motion.div} variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible" className="imgdown" left="3%" right="3%">
                <FlexContainer>
                  <img className="" src={AboutImg1} alt="about" />
                </FlexContainer>
              </PaddingContainer>

              {/* --Right-Section-- */}
              <PaddingContainer as={motion.div} variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible" className="abtext" left="3%" right="3%">
                <LeftTextContainer>
                    
                  <TextCard>
                  <FlexContainer responsiveFlex>
                    <IconContainer top="1rem" left="0.5rem" right="0.5rem" color="blue" size="2.5rem">
              <GiGraduateCap />
            </IconContainer>
                    <ParaText className="rel" bottom="1rem" top="1rem" left="1rem" right="1rem">
                      I am currently pursuing my graduation in BE-Computer Engineering from Sal Institute of Technology and Engineering Research. I am eager to learn and grasp new skills in the field of my passion, Software Development.
                    </ParaText>
                    </FlexContainer>
                  </TextCard>

                  <TextCard>
                  <FlexContainer responsiveFlex>
                    <IconContainer top="1rem" left="0.5rem" right="0.5rem" color="blue" size="2.5rem">
              <MdEditNote/>
            </IconContainer>
                    <ParaText bottom="1rem" top="1rem" left="1rem" right="1rem">
                      As of me, I am dedicated and sincere in my works but also love to have some entertainment like watching movies, animes. I am always passionate to explore the depths of the knowledge I have, eventually enhancing myself.
                    </ParaText>
                    </FlexContainer>
                  </TextCard>

                  <TextCard>
                  <FlexContainer responsiveFlex>
                    <IconContainer top="1rem" left="0.5rem" right="0.5rem" color="blue" size="2rem">
              <FaCode />
            </IconContainer>
                    <ParaText bottom="1rem" top="1rem" left="1rem" right="1rem">
                    As a Full Stack Developer, I have experience in both Frontend and Backend technologies. I am proficient in Frontend technologies like Javascript, ReactJS, HTML, CSS and Backend technologies like NodeJS, ExpressJS, MongoDB, Django.
                    </ParaText>
                    </FlexContainer>
                  </TextCard>
                </LeftTextContainer>
              </PaddingContainer>
            </FlexContainer>
          </AboutCard>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default About;
