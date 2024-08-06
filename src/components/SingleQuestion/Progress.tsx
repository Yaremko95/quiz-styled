import React from "react";
import styled from "styled-components";

interface ProgressBarProps {
  percentage: number;
}

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.primary[300]};
`;

const Filler = styled.div<{ percentage: number }>`
  height: ${({ theme }) => theme.spacing(1)};
  width: ${({ percentage }) => percentage}%;
  background-color: ${({ theme }) => theme.primary.main};
  transition: width 0.5s ease-in-out;
`;

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => (
  <Container>
    <Filler percentage={percentage} />
  </Container>
);

export default ProgressBar;
