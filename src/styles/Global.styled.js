import styled from "styled-components";
import { TextCard } from "./About.styled";

export const MainBody = styled.div`
  background-color: ${({theme})=> theme.colors.primary};
`;

export const Container = styled.div`
width: 90%;
max-width: 1280px;
margin: auto;
`

export const PaddingContainer = styled.div`
padding-top: ${({top})=> top};
padding-bottom: ${({bottom})=> bottom};
padding-left: ${({left})=> left};
padding-right: ${({right})=> right};

@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
padding-top: ${({responsiveTop})=> responsiveTop};
padding-bottom: ${({responsiveBottom})=> responsiveBottom};
padding-left: ${({responsiveLeft})=> responsiveLeft};
padding-right: ${({responsiveRight})=> responsiveRight};
}
`

export const FlexContainer = styled.div`
display: flex;
height: max-content;
justify-content: ${({justify})=> justify};
align-items: ${({align})=> align};
gap: ${({gap})=> gap};
width: ${({width})=> width};
flex-direction: ${({direction})=> direction};
flex-wrap: ${({wrap})=> wrap};

& > div {
    flex: ${({fullWidthChild})=> fullWidthChild && 1};
}

@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    display: ${({ responsiveFlex })=> responsiveFlex? 'flex': 'block'};

    flex-direction: ${({ responsiveDirection })=> responsiveDirection};
}
`

export const Heading = styled(PaddingContainer)`
color: ${({theme}) => theme.colors.white};
text-align: ${({align})=> align};
font-size: ${({size})=>{
    switch(size){
        case 'h1':
            return '4.5rem';
            
        case 'h2':
            return '3rem';

        case 'h3':
            return '2rem';

        case 'h4':
            return '1.2rem';

        default:
            return;

    }
}};

@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    font-size: ${({size})=>{
        switch(size){
            case 'h1':
                return '2.5rem';
                
            case 'h2':
                return '2rem';
    
            case 'h3':
                return '1.5rem';
    
            case 'h4':
                return '1rem';
    
            default:
                return;
    
        }
    }};
}
`

export const BlueText = styled.span`
color: ${({ theme})=> theme.colors.secondary};

`

export const ParaText = styled(PaddingContainer)`
color: ${({ theme})=> theme.colors.para_text_color};
line-height: 2rem;

span{
    @media(max-width: ${({theme})=> theme.breakpoints.mobile}){
        display: none;
    }
}
`

export const IconContainer = styled.div`
font-size: ${({size}) => size};
// align-items: center;
cursor: pointer;
padding-top: ${({top})=> top};
padding-left: ${({left})=> left};
padding-right: ${({right})=> right};
color: ${({ color, theme})=> {
    switch(color){
        case 'white':
            return theme.colors.white;
        case 'blue':
            return theme.colors.secondary;
        default:
            return;
    }
}};

${TextCard}:hover & {
    color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    background: linear-gradient(
        90deg,
        rgba(165, 215, 232, 0.35) 0%,
        rgba(165, 215, 232, 0.18) 100%
      );
  }
`

export const Button = styled.a`
display: inline-block;
width: max-content;
padding: 1rem 2rem;
color: ${({theme})=> theme.colors.white};
background-color: ${({theme})=> theme.colors.primary_light};
border: 1px solid ${({theme})=> theme.colors.gray};
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ease;

&:hover{
    color: ${({theme})=> theme.colors.primary_light};
    background-color: ${({theme})=> theme.colors.white};
}
`

export const FadeImage = styled.img`
position: absolute;
top: ${({top})=> top};
bottom: ${({bottom})=> bottom};
left: ${({left})=> left};
right: ${({right})=> right};
z-index: 0;

@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
display: none;
}
`

export const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme})=> theme.colors.para_text_color};
`

// export const AnimatedText = styled.ul`
// position: relative;
// list-style: none;
// width: max-content;
// height: 2.4rem;
// top: 0;
// animation: shift 12s steps(3) infinite;

// @keyframes shift{
//     100%{
//         top: -17.5vh;
//     }
// }

// @media(max-width: ${({theme})=> theme.breakpoints.mobile}){
// height:1.9rem;

// @keyframes shift{
//     100%{
//         top: -13.6vh;
//     }
// }
// }
// `

// export const Span = styled.span`
// position: relative;

// &::after{
//     content: '';
//     position: absolute;
//     width: calc(100% + 8px);
//     height: 100%;
//     background-color: ${({ theme})=> theme.colors.primary};;
//     border-left: 2px solid ${({ theme})=> theme.colors.secondary};
//     right: -10px;
//     animation: cursor 0.8s infinite, typing 4s steps(12) infinite;
// }

// @keyframes cursor{
//     to{
//         border-left: 2px solid ${({ theme})=> theme.colors.primary};
//     }
// }

// @keyframes typing{
//     50%, 65%{
//         width: 0;
//     }
//     10%, 100%{
//         width: calc(100% + 8px);
//     }
// }

// `