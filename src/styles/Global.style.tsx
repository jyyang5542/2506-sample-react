'use client';

import type { tTheme } from '@/types';
import { createGlobalStyle, css } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

const GlobalStyle = createGlobalStyle<{ $themeMode: tTheme }>`
  :root {
    --background: ${lightTheme.background};
    --text: ${lightTheme.text};

  // dark 모드가 활성화되었을 때 변수 오버라이드
  ${props =>
		props.$themeMode === 'dark' &&
		css`
			--background: ${darkTheme.background};
			--text: ${darkTheme.text};
		`}
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: var(--text);
    background: var(--background);
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

export default GlobalStyle;
