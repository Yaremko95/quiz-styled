import styled from "styled-components";
import { InputProps } from "./CheckBox";

export const ControlSvg = styled.svg`
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.5rem;
`;
export const HiddenInput = styled.input.attrs({ type: "checkbox" })`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  margin: 0px;
  padding: 0px;
  z-index: 1;
`;
export const CustomControlBox = styled.span<{ checked?: boolean, disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  vertical-align: middle;
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: 50%;
  color: ${({ checked, theme, disabled }) => disabled? theme.primary[600] :  theme.primary.main};

`;

export const LabelWrapper = styled.label<InputProps>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid
    ${({ theme, checked  }) =>
      checked ? theme.primary.main : theme.primary[600]};
  padding-left: ${({ theme }) => theme.spacing(1)};
  padding-right: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme, disabled }) => disabled? theme.primary[600] :  theme.primary.main};
  background-color: ${({ theme, checked }) =>
    checked ? theme.primary[300] : theme.primary[100]};
  &:hover  {
    background-color: ${({ theme, disabled }) =>  !disabled && theme.primary[300]};
  }
`;

export const LabelText = styled.span`
  margin-left: ${({ theme }) => theme.spacing(1)};
`;
