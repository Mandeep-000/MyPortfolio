import React from 'react'
import {motion} from 'framer-motion';

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    BlueText,
} from '../styles/Global.styled';

import Project from './layouts/Projects';

import { Projects } from '../utils/Data';
import { fadeInTopVariant } from "../utils/Variants";



const MyProjects = () => {
  return (
    <PaddingContainer id='Projects' top='10%' bottom='5%' responsiveLeft='1rem' responsiveRight='1rem' responsiveTop='20%'>
        
                <Heading as={motion.h4} variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible" size='h4'>
                    MY PROJECTS
                </Heading>

                <Heading as={motion.h2} variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible" size='h2'>
                    What <BlueText>I have built</BlueText>
                </Heading>

                    <PaddingContainer top='5rem' bottom='5rem'>
                      <FlexContainer justify="center" wrap="wrap" responsiveFlex>
                {Projects.map((project)=>(
                        <PaddingContainer left='1rem' right='1rem' bottom="6rem">

                          <Project key={project.id} data={project}/>
                        </PaddingContainer>
                        ))}
                        </FlexContainer>
                      </PaddingContainer>

    </PaddingContainer>
  )
}

export default MyProjects