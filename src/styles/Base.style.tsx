'use client';

import type { ISpacing, ITextProps } from '@/types/baseStyle';
import styled, { css } from 'styled-components';

export const PADDING_X = 18;

export const Page = styled.div``;

export const Box = styled.div<ISpacing>`
	${({ my = null, mx = null, mt = 0, mb = 0, ml = 0, mr = 0 }) => css`
		margin: ${my ?? mt}px ${mx ?? mr}px ${my ?? mb}px ${mx ?? ml}px;
	`};
	${({ py = null, px = null, pt = 0, pb = 0, pl = 0, pr = 0 }) => css`
		padding: ${py ?? pt}px ${px ?? pr}px ${py ?? pb}px ${px ?? pl}px;
	`};

	* {
		box-sizing: border-box;
	}
`;

export const ellipsisStyle = (lines: number) => css`
	display: -webkit-box;
	word-break: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: ${lines};
	-webkit-box-orient: vertical;
`;

export const Text = styled.div<ITextProps>`
	max-width: 100%;
	${({ color }) => !!color && `color: ${color}`};
	font-size: ${({ fontSize = 12 }) => fontSize}px;
	font-weight: ${({ fontWeight = 400 }) => fontWeight};
	line-height: ${({ lineHeight = '1' }) => lineHeight};
	${({ ellipsis }) => ellipsis && ellipsisStyle(ellipsis)};
`;
