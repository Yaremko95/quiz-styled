import { css } from 'styled-components';

const mediaQuery = (minWidth: number) => {
  return (styles: TemplateStringsArray, ...args: any[]) => css`
    @media (min-width: ${minWidth}px) {
      ${css(styles, ...args)}
    }
  `;
};

export const media = {
  xs: (styles: TemplateStringsArray, ...args: any[]) => mediaQuery(0)(styles, ...args),
  sm: (styles: TemplateStringsArray, ...args: any[]) => mediaQuery(600)(styles, ...args),
  md: (styles: TemplateStringsArray, ...args: any[]) => mediaQuery(900)(styles, ...args),
  lg: (styles: TemplateStringsArray, ...args: any[]) => mediaQuery(1200)(styles, ...args),
  xl: (styles: TemplateStringsArray, ...args: any[]) => mediaQuery(1536)(styles, ...args),
};