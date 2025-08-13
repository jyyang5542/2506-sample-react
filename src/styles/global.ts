import { hexToRgba } from '@/utils';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  /* 기본 body 스타일 */
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 이미지, 미디어 */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* 링크 기본 스타일 제거 */
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &:focus {
      text-decoration: underline;
      outline: none;
    }
  }

  /* 폼 요소 기본 스타일 */
  input, button, textarea, select {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  /* 리스트 스타일 초기화 */
  ul, ol {
    list-style: none;
  }

  /* 스크롤바 스타일 (웹킷 기반) */
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
    background-color: ${({ theme }) => hexToRgba(theme.text, 0.4)};
  }

  /* 스크롤바 갭 유지 */
  html {
    scrollbar-gutter: stable;
  }
`;

export default GlobalStyle;
