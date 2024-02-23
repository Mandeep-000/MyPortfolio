import React, {useEffect} from 'react';
import {motion} from 'framer-motion';

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';

import {
    SkillsCardContainer,
    SkillsCard,
    CardBorder
} from '../styles/MySkills.styled';

import { Skills } from '../utils/Data';
import { fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from "../utils/Variants";



const MySkills = () => {

  useEffect(() => {
    const di = document.querySelectorAll('.cont');
    const card = document.querySelectorAll('.cards');
    // console.log(di[0].getBoundingClientRect());
    // console.log(card);

    const cleanupFunctions = [];

    for (let i = 0; i < di.length; i++) {
      const handleMouseMove = (e) => {
        
        const x = di[i].offsetWidth / 2;
        const y = di[i].offsetHeight / 2;
        // console.log(x, y);
        
        const innerX = e.clientX - di[i].offsetLeft;
        const innerY = e.clientY - di[i].getBoundingClientRect().top;
        // console.log(e.clientY, innerX, innerY);


        let convertX = ((innerX - x) / x) * 45;
        let convertY = ((innerY - y) / y) * 40;
        // console.log(convertX, convertY);

        di[i].style.transform = `rotateY(${convertX * -1}deg) rotateX(${convertY * -1}deg)`;
      };

      const handleMouseOut = () => {
        di[i].style.transform = `rotateY(0deg)`;
      };

      di[i].addEventListener('mousemove', handleMouseMove);
      di[i].addEventListener('mouseout', handleMouseOut);

      const cleanup = () => {
        di[i].removeEventListener('mousemove', handleMouseMove);
        di[i].removeEventListener('mouseout', handleMouseOut);
      };

      cleanupFunctions.push(cleanup);
    }

    // Cleanup event listeners when the component unmounts
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []); 


  return (
    <PaddingContainer id='Skills' top='10%' bottom='10%' responsiveLeft='1rem' responsiveRight='1rem'>
        <Heading as={motion.h4} variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible" size="h4">
        MY SKILLS
      </Heading>

      <Heading as={motion.h2} variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible" size="h2" top="0.5rem">
        What <BlueText>I can do</BlueText>
      </Heading>


        <FlexContainer responsiveFlex fullWidthChild>

            {/* --left-section-- */}
            <PaddingContainer top="3%">
            <SkillsCardContainer as={motion.div} variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible">
                {Skills.map((skill)=>(
                  <CardBorder className='cont'>
                    <SkillsCard className='cards'> 
                        <IconContainer size='2.5rem' color='blue'>
                            {skill.icon}
                        </IconContainer>

                        <Heading as='h4' size='h4'>
                            {skill.tech}
                        </Heading>
                    </SkillsCard>
                    </CardBorder>
                ))}
                
            </SkillsCardContainer>
            </PaddingContainer>

            {/* --right-section-- */}
            {/* <motion.div variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible">
                
                <ParaText bottom='1.5rem' top='2rem'>
                    As a Developer, I have a wide range of experience in Web Development. I am proficient in Javascript, React, HTML, and CSS. My strong experience in building responsive and dynamic user interfaces using React and Redux has allowed me to create engaging and interactive web applications.
                </ParaText>

                <ParaText>
                    I have experience in using React for building scalable and maintainable applications. This has allowed me to create efficient and sustainable code that can adept to the changing needs of a business.
                </ParaText>
            </motion.div> */}
        </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills;