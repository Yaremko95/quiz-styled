import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

interface TextFieldProps {
  minRows?: number;
  maxRows?: number;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

const StyledTextField = styled.textarea<TextFieldProps>`
  width: 100%;
  font-size: 1rem;
  border: none;
  resize: none;
  outline: none;
  transition: border-color 0.2s;
  color: ${({ theme }) => theme.primary.main};
  font-size: 30px;
  line-height: 38px;
  &:focus {
    border-color: ${({ theme }) => theme.primary.main};
  }
  &::placeholder {
    color: ${({ theme }) => theme.primary[300]};
  }
`;

const TextField: React.FC<TextFieldProps> = ({
  minRows = 3,
  maxRows = 5,
  value,
  onChange,
  placeholder,
  disabled,
}) => {
  const [height, setHeight] = useState("auto");

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      const textAreaLineHeight = parseInt(
        window.getComputedStyle(textAreaRef.current).lineHeight,
        10
      );
      const minHeight = minRows * textAreaLineHeight;
      const maxHeight = maxRows * textAreaLineHeight;

      textAreaRef.current.style.height = "auto";
      const newHeight = Math.min(
        Math.max(textAreaRef.current.scrollHeight, minHeight),
        maxHeight
      );
      setHeight(`${newHeight}px`);
    }
  }, [value, minRows, maxRows]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <StyledTextField
      ref={textAreaRef}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      style={{ height }}
      rows={minRows}
    />
  );
};

export default TextField;
