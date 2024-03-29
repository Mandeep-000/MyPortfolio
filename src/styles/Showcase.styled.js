import styled from 'styled-components';

export const ShowcaseParticleContainer = styled.div`
position: relative;
width: 80%;

@media(max-width: ${({theme})=> theme.breakpoints.mobile}){
    // display: none;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
}

@media(max-width: ${({theme})=> theme.breakpoints.minipc}){
    margin-top: 10vh;
}
`

export const ShowcaseImageCard = styled.div`
// border: 1px solid white;
width: 100%;
padding-top: 2rem;
// border-radius: 1rem;
position: relative;
overflow: hidden;
`

export const Particle = styled.img`
position: absolute;
top: ${({top}) => top};
left: ${({left}) => left};
right: ${({right}) => right};
bottom: ${({bottom}) => bottom};
transform: rotate(${({rotate})=> rotate});
`