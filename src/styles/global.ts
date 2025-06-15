import { hexToRgba } from '@/utils';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => hexToRgba(theme.text, 0.3)};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background-color: ${({ theme }) => hexToRgba(theme.text, 0.4)};
  }

  html {
    scrollbar-gutter: stable;
  }
`;

export default GlobalStyle;
