import React from "react";
import { motion } from "framer-motion";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer,
  HorizontalLine,
} from "../styles/Global.styled";

import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div style={{background:"rgba(0,0,0,0.5)"}}>
      <HorizontalLine></HorizontalLine>
      <PaddingContainer id="Contact" top="2%" bottom="3%" left="3%" right="3%">
        <FlexContainer gap="6rem" justify="center" responsiveFlex>
          <FlexContainer as={motion.div}
              variants={fadeInLeftVariant}
              initial="hidden"
              whileInView="visible" direction="column" width="33%" responsiveFlex>
            <Heading
              size="h3"
              align="left"
              top="0.5rem"
            >
              Contact <BlueText>Me Here</BlueText>
            </Heading>

            <ParaText bottom="1rem" top="1rem">
            <span>I would love to collaborate with you.<br /></span>
              
              If want to get in touch with me for any kind of queries,
              suggestions and collaborations, you are welcome to contact me.
            </ParaText>
          </FlexContainer>

          {/* --Right-Section-- */}
          <PaddingContainer as={motion.div}
              variants={fadeInRightVariant}
              initial="hidden"
              whileInView="visible" top="1rem" responsiveTop="1rem">
            <FlexContainer align="center" responsiveFlex>
              <IconContainer
                top="1rem"
                left="0.5rem"
                right="0.5rem"
                color="blue"
                size="1.5rem"
              >
                <IoMdMail />
              </IconContainer>
              <ParaText
                className="rel"
                bottom="0.5rem"
                top="1rem"
                left="1rem"
                right="1rem"
              >
                p.mandeep0402@gmail.com
              </ParaText>
            </FlexContainer>

            
            <FlexContainer align="center" responsiveFlex>
              <IconContainer
                top="1rem"
                left="0.5rem"
                right="0.5rem"
                color="blue"
                size="1.4rem"
              >
                <SiLinkedin />
              </IconContainer>
              <ParaText
                className="rel"
                bottom="0.5rem"
                top="1rem"
                left="1rem"
                right="1rem"
              >
                linkedin.com/in/mandeep-pareek
              </ParaText>
            </FlexContainer>
            <FlexContainer align="center" responsiveFlex>
              <IconContainer
                top="1rem"
                left="0.5rem"
                right="0.5rem"
                color="blue"
                size="1.5rem"
              >
                <SiGithub />
              </IconContainer>
              <ParaText
                className="rel"
                bottom="0.5rem"
                top="1rem"
                left="1rem"
                right="1rem"
              >
                github.com/mandeep-000
              </ParaText>
            </FlexContainer>
          </PaddingContainer>
        </FlexContainer>
      </PaddingContainer>
    </div>
  );
};

export default Footer;


  /* <ContactForm
  as={motion.form}
  variants={fadeInBottomVariant}
  initial="hidden"
  whileInView="visible"
>
  <PaddingContainer bottom="2rem">
    <FormLabel>Name:</FormLabel>

    <FormInput type="text" placeholder="Enter your name" />
  </PaddingContainer>

  <PaddingContainer bottom="2rem">
    <FormLabel>Email:</FormLabel>

    <FormInput type="email" placeholder="Enter your email" />
  </PaddingContainer>

  <PaddingContainer bottom="2rem">
    <FormLabel>Message:</FormLabel>

    <FormInput as="textarea" placeholder="Enter your message" />
  </PaddingContainer>

  <FlexContainer justify="center" responsiveFlex>
    <Button>Send Message</Button>
  </FlexContainer>
</ContactForm> */

