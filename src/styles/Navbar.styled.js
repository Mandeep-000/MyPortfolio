import styled from 'styled-components';
import { FlexContainer } from './Global.styled';

export const NavbarContainer = styled.div`
position: fixed;
width: 100%;
top: 0;
left: 0;
z-index: 10;
transition: all 0.3s ease-in;
background-color: ${({bgColor})=> bgColor};
`

export const Logo = styled.p`
font-size: 1.7rem;
font-weight: ${({theme})=> theme.fonts.weight.medium};
color: white;
`

export const MenuIcon = styled.a`
font-size: 1.6rem;
cursor: pointer;
color: ${({theme})=> theme.colors.secondary};
transition: all 0.2s ease;
display: none;
align-items: center;

@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    display: flex;
}
`

export const NavMenuContainer = styled.div`
position: fixed;
width: 100%;
height: 100vh;

top: 0;
left: 0;
z-index: 1;
background-color: ${({theme})=> theme.colors.primary_light};
`

export const NavItemContainer = styled(FlexContainer)`

    @media(max-width: ${({theme})=> theme.breakpoints.mobile}){
        display: none;
    }
`

export const MenuItem = styled.a`
font-size: 1.3rem;
cursor: pointer;
color: #fff;
// margin-top: 3rem;
text-decoration: none;

@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    font-size: 1.5rem;
}
`