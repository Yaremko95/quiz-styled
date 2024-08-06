import styled from "styled-components";

interface ButtonProps {
  variant?: "contained" | "outlined";

}

export const Button = styled.button<ButtonProps>`
  outline: none;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius};
  transition: all 0.3s ease;
  border-width: 1px;
  border-style: solid;
  background-color: ${({ theme, variant }) =>
    variant === "contained" ? theme.primary.main : "transparent"};
  color: ${({ theme, variant }) =>
    variant === "contained" ? "#fff" : theme.primary.main};
  border-color: ${({ theme }) => theme.primary.main};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "contained" ? theme.primary.light : theme.primary[300]};
  }
`;
