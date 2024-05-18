import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  PaddingContainer,
  FlexContainer,
  BlueText,
  Container,
} from "../styles/Global.styled";

import {
  NavbarContainer,
  Logo,
  MenuIcon,
  MenuItem,
  NavItemContainer,
} from "../styles/Navbar.styled";

import { GiHamburgerMenu } from "react-icons/gi";
import { theme } from "../utils/Theme";
import { navLinks } from "../utils/Data";
import NavMenu from "./layouts/NavMenu";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", onScroll);

    //cleanup
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <NavbarContainer bgColor={sticky ? theme.colors.primary : "transparent"}>
      <PaddingContainer
        top="1.2rem"
        bottom="1.2rem"
        responsiveLeft="1rem"
        responsiveRight="1rem"
      >
        <Container>
          <FlexContainer justify="space-between" align="center" responsiveFlex>
            {/* --Left-Logo-- */}
            <Logo>
            Port<BlueText>Folio</BlueText>
            </Logo>

            {/* --Right-Menu-Icon-- */}
            <NavItemContainer gap="3rem">
              {navLinks.map((link) => (
                <MenuItem
                  as={motion.a}
                  whileHover={{ scale: 1.1 }}
                  key={link.id}
                  href={`#${link.href}`}
                  onClick={() => setOpenMenu(false)}
                >
                  {link.name}
                </MenuItem>
              ))}
            </NavItemContainer>
            <MenuIcon
              as={motion.a}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>

        <AnimatePresence>
          {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
        </AnimatePresence>
      </PaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
