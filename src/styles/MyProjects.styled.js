import styled from 'styled-components';

export const ProjectCard = styled.div`
  width: 380px;
  // height: auto;
  border: 1px solid #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
  transform-style: preserve-3d;
  // transition: 0.5s;
  background-color: ${({ theme }) => theme.colors.primary_light};

`;


export const CardFront = styled.div`
backface-visibility: hidden;
width: 100%;
height: max-content;
// pointer-events: none;
`

export const CardBack = styled.div`
backface-visibility: hidden;
position: absolute;
width: 100%;
height: max-content;
transform: rotateY(180deg);
z-index: 1;
`

export const TechStackCard = styled.div`
display: inline-block;
background-color: ${({theme})=> theme.colors.secondary};
color: #fff;
padding: 0.3rem 1rem;
border-radius: 5px;

@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    margin-right: 1rem;
    margin-bottom: 1rem;
}
`

export const Overlay = styled.div`
display: none;
position: absolute;
width: 100%;
height: 100%;
border-radius: 1rem;
gap: 1.5rem;
padding-bottom: 3rem;
justify-content: center;
align-items: center;
// transition: 1s ease;
background: rgba(0,0,0,0.8);
`

export const ProjectImageContainer = styled.div`
display: flex;
position: relative;
justify-content: ${({justify})=> justify};


&:hover ${Overlay} {
  display: flex;
}
`

export const ProjectImage = styled.img`
// border: 1px solid #fff;
width: 100%;
height: 280px;
object-fit: cover;
border-radius: 1rem;

`


export const WaveClip = styled.svg`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90%;
  // fill: ${({theme})=> theme.colors.secondary}; /* Change the color as needed */
`;

export const PButton = styled.a`
display: inline-block;
width: max-content;
padding: 0.8rem 1.5rem;
color: ${({theme})=> theme.colors.white};
background-color: ${({theme})=> theme.colors.primary_light};
border: 1px solid ${({theme})=> theme.colors.gray};
border-radius: 10rem;
cursor: pointer;
transition: all 0.3s ease;
z-index: 1;

&:hover{
  color: ${({theme})=> theme.colors.primary_light};
    background-color: ${({theme})=> theme.colors.white};
}
`

 