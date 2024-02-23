import React from 'react'
import {motion} from 'framer-motion';

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Button,
    Container
} from '../../styles/Global.styled';

import { AiOutlineClose } from 'react-icons/ai';
import { MenuIcon, NavMenuContainer, MenuItem } from '../../styles/Navbar.styled';
import { navLinks } from '../../utils/Data';
import { slideInLeft, slideInRight } from "../../utils/Variants";



const NavMenu = ({setOpenMenu}) => {
  return (
    <NavMenuContainer as={motion.div} variants={slideInRight}
    initial="hidden"
    animate="visible" exit="exit">
        {/* --close-button-- */}
        <PaddingContainer left='5%' right='5%' top='2rem'>
            <FlexContainer justify='flex-end' responsiveFlex>
                <MenuIcon as={motion.a} whileHover={{scale: 1.2}} onClick={()=>{setOpenMenu(false)}}>
                    <AiOutlineClose/>
                </MenuIcon>
            </FlexContainer>
        </PaddingContainer>

        {/* --Menu-items-- */}
        <PaddingContainer top='8%'>
            <FlexContainer align='center' direction='column' responsiveFlex>
                {navLinks.map((link)=>(
                    <PaddingContainer bottom="3rem">

                        <MenuItem as={motion.a} whileHover={{scale: 1.2}} key={link.id} href={`#${link.href}`} onClick={()=> setOpenMenu(false)}>{link.name}</MenuItem>
                    </PaddingContainer>
                ))}
            </FlexContainer>
        </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu