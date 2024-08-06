import styled, { css, keyframes } from "styled-components";
import { H2 } from "../styled/Typography";
import { media } from "../../theme/media";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const QuestionContainer = styled.div`
  display: flex;
  height: 70%;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 80%;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: column-reverse;

  ${media.lg`
    flex-direction: row;
   
  `}

  width: 100%;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: ${({ theme }) => theme.spacing(1)};
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(3)};
  right: ${({ theme }) => theme.spacing(3)};
`;

export const Title = styled(H2)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const Img = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

export const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Box = styled.div`
  overflow: auto;
  padding: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(9)};
  ${media.lg`
      padding: ${({ theme }: any) => theme.spacing(6)};
     
    `}
`;
