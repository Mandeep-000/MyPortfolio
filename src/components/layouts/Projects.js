import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  IconContainer,
  
} from "../../styles/Global.styled";

import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
// import Project1 from "../../assets/Project1.png";

import {
  TechStackCard,
  ProjectImageContainer,
  ProjectImage,
  ProjectCard,
  CardFront,
  CardBack,
  WaveClip,
  PButton,
  Overlay,
} from "../../styles/MyProjects.styled";


const Projects = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardHeight, setCardHeight] = useState();
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const pcardRef = useRef(null);
  const isMouseInside = useRef(false);
  
  const handleFlip = () => {
    if (!isAnimating) {
        setIsFlipped(!isFlipped);
        setIsAnimating(true);
      }
  
    };
  
    const handleMouseEnter = () => {
      isMouseInside.current = true;
    };

    const handleMouseLeave = () => {
      isMouseInside.current = false;
      if (isFlipped && !isMouseInside.current) {
        handleFlip();
      }
    };
    

  useEffect(() => {  

    const pcard = pcardRef.current;
    const front = frontRef.current;
    const back = backRef.current;
    // console.log(pcard);

    const frontHeight = front && front.offsetHeight;
    const backHeight = back && back.offsetHeight;

    setCardHeight(isFlipped?backHeight:frontHeight)


    pcard.addEventListener('mouseenter', handleMouseEnter);
    pcard.addEventListener('mouseleave', handleMouseLeave);

    const cleanup = () => {
      pcard.removeEventListener('mouseenter', handleMouseEnter);
      pcard.removeEventListener('mouseleave', handleMouseLeave);
    };

    return cleanup;
// eslint-disable-next-line
  }, [isFlipped]);


  return (
    <ProjectCard
    ref={pcardRef}
      className="pcard"
      as={motion.div}
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 360 }}
      transition={{ duration: 1, animationDirection: "normal" }}
      onAnimationComplete={()=>setIsAnimating(false)}
      
      style={{height: cardHeight}}
    >

    {/* --Card-Back-- */}
    <CardBack className="back" ref={backRef}>
        <PaddingContainer left="1rem" top="3rem">
          <FlexContainer gap="1.5rem" wrap="wrap">
            {data.tech_stack.map((stack) => (
              <TechStackCard>{stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" left="1rem" right="1rem" bottom="2rem">
          {data.project_desc}
        </ParaText>

        <FlexContainer align="center" justify="space-between" responsiveFlex>
        <IconContainer className='ico' color="blue" left="1rem" size="1.5rem" onClick={handleFlip}>
            <FaArrowLeftLong />
          </IconContainer>

          <FlexContainer align="center" justify="space-between" responsiveFlex>
        <PaddingContainer right="1rem" bottom="1rem">
        <PButton href={data.project_url || "#"} target={data.project_url && "_blank"} style={{textDecoration: "none"}}>Live</PButton>  
        </PaddingContainer>
        <PaddingContainer right="1rem" bottom="1rem">
        <PButton href={data.code_url || "#"} target={data.code_url && "_blank"} style={{textDecoration: "none"}}>Code</PButton>
        </PaddingContainer>
        </FlexContainer>

        </FlexContainer>
      </CardBack>


      {/* --Card-Front-- */}
      <CardFront className="front" ref={frontRef}>
        <ProjectImageContainer justify="center">
          <ProjectImage src={data.project_img} alt={data.project_name} />
          <Overlay>
          <PButton href={data.project_url || "#"} target={data.project_url && "_blank"} style={{textDecoration: "none"}}>Live</PButton>
          <PButton href={data.code_url || "#"} target={data.code_url && "_blank"} style={{textDecoration: "none"}}>Code</PButton>
          </Overlay>

          <WaveClip viewBox="0 -280 700 600" preserveAspectRatio="none">
          <path d="M 0 220 Q 200 340 360 260 Q 360 260 360 260 C 540 160 680 220 800 260 L 800 420 L 0 420 Z" fill="white"></path>
</WaveClip>
          <WaveClip viewBox="0 -282 700 600" preserveAspectRatio="none">
          <path d="M 0 220 Q 200 340 360 260 Q 360 260 360 260 C 540 160 680 220 800 260 L 800 420 L 0 420 Z" fill="#131c31"></path>
</WaveClip>
        </ProjectImageContainer>

        <FlexContainer align="center" gap="1rem" justify="space-between" responsiveFlex>
          <FlexContainer gap="0.8rem" responsiveFlex>
            <Heading as="h4" size="h4" left="1rem" top="1rem" bottom="1rem">
              {data.project_name}
            </Heading>

            <IconContainer color="blue" top="1rem" size="1.5rem">
            <a href={data.code_url || "#"} target={data.code_url && "_blank"} rel="noreferrer" style={{textDecoration: "none", color: "inherit"}}><FaGithub /></a>
            </IconContainer>
          </FlexContainer>

          <IconContainer color="blue" top="0.5rem" right="1rem" size="1.5rem" onClick={handleFlip}>
            <FaArrowRightLong />
          </IconContainer>
        </FlexContainer>

      </CardFront>

      {/* </FlexContainer> */}
    </ProjectCard>
  );
};

export default Projects;
