'use client';

import { Colors, hexToRgba } from '@/constants/Colors';
import type { TTheme } from '@/types';
import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

export const Style = {
	Wrap: styled.span<{ theme: TTheme }>`
		padding: 0 0.4em;
		border-radius: 3px;
		fontfamily: 'monospace' !important;
		fontsize: 0.9em !important;
		whitespace: nowrap;
		${({ theme }) =>
			theme === 'light'
				? css`
						color: ${Colors.gray2};
						background-color: ${hexToRgba(Colors.grayE, 0.7)};
				  `
				: css`
						color: ${Colors.grayE};
						background-color: ${hexToRgba(Colors.gray2, 0.7)};
				  `}

		* {
			margin: 0;
			padding: 0;
			height: auto;
		}
		code {
			background: none !important;
		}
	`
};

export const customStyle: CSSProperties = {
	display: 'inline',
	padding: 0,
	margin: 0,
	background: 'none',
	overflowX: 'visible',
	whiteSpace: 'pre-wrap'
};
