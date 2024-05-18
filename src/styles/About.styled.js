import styled from "styled-components";
// import { IconContainer } from "./Global.styled";

export const AboutCard = styled.div`
  width: 230px;
  height: min-content;
  border: 1px solid #fff;
  padding: 3rem 0 1rem 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_light};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin-top: 2rem;
  }


  .imgdown{
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      display: none;
    }  
  }
`;

export const LeftTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TextCard = styled.div`
  background-size: 0 100%;
  transition: 0.4s;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(165, 215, 232, 0.42) 0%,
      ${({ theme }) => theme.colors.primary_light} 85%
    );
    background-size: 100% 100%;
    border-radius: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
  } 
`;
