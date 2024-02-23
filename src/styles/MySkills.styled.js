import styled from "styled-components";

export const SkillsCardContainer = styled.div`
  // display: grid;
  // grid-template-columns: auto auto;
  // grid-gap: 2rem;
  // padding: 0 5%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

`;

export const SkillsCard = styled.div`
  width: 165px;
  height: 145px;
  // border: 1px solid #fff;
  // padding: 4rem 0;
  // border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default;
  transform-style: preserve-3d;
  transition: 0.1s;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background-color: ${({ theme }) => theme.colors.primary_light};

  
`;

export const CardBorder = styled.div`
  width: 170px;
  height: 150px;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  background-color: #fff;
  perspective: 500px;
  transform-style: preserve-3d;
`;
