import { createGlobalStyle } from 'styled-components';

// type Props = {
//   theme: ThemeType;
// };
export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
html {
    box-sizing: border-box;
}
*, *::before, *::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    background-color: ${({ theme }): string => theme.body};
    transition: all 0.50s linear;
}

`;

export const light = {
  body: 'hsl(0, 0%, 98%)',
  element: 'hsl(0, 0%, 100%)',
  text: 'hsl(200, 15%, 8%)',
  input: 'hsl(0, 0%, 52%)',
};

export const dark = {
  body: 'hsl(207, 26%, 17%)',
  element: 'hsl(209, 23%, 22%)',
  text: 'hsl(0, 0%, 100%)',
  input: 'hsl(0, 0%, 100%)',
};

type ThemeType = typeof light;
