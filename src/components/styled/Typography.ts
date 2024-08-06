import styled from "styled-components";

export const H2 = styled.h2`
  line-height: 32px;
  font-size: 24px;
  font-weight: unset;
`;

export const H3 = styled.h3`
  line-height: 28px;
  font-size: 20px;
  font-weight: unset;
`;

export const Span = styled.span`
  line-height: 26px;
  font-size: 18px;
  font-weight: unset;
`;

export const Small = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.primary.main};
`;