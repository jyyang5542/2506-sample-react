'use client';

import { Colors, hexToRgba } from '@/constants/Colors';
import type { TTheme } from '@/types';
import { createGlobalStyle, css } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

const GlobalStyle = createGlobalStyle<{ $themeMode: TTheme }>`
${props => {
	const isThemeLight = props.$themeMode === 'light';
	return css`
		:root {
			${isThemeLight
				? css`
						--background: ${lightTheme.background};
						--text: ${lightTheme.text};
				  `
				: css`
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

			&::-webkit-scrollbar {
				width: 10px;
				height: 10px;
				background: ${Colors.transparent};
			}
			&::-webkit-scrollbar-thumb {
				background-color: ${isThemeLight ? hexToRgba(Colors.black, 0.3) : hexToRgba(Colors.white, 0.3)};
				border-radius: 5px;
			}
			&::-webkit-scrollbar-track {
				background: ${Colors.transparent};
			}
			&::-webkit-scrollbar-button,
			&::-webkit-scrollbar-corner {
				display: none;
				height: 0;
				width: 0;
			}
			* {
				scrollbar-width: thin;
				scrollbar-color: ${isThemeLight ? hexToRgba(Colors.black, 0.3) : hexToRgba(Colors.white, 0.3)} ${Colors.transparent};
			}
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
}}

`;

export default GlobalStyle;
