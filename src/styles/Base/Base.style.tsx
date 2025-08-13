'use client';

import { Fonts } from '@/constants/fonts';
import type { ITextProps } from '@/styles/Base/Base.types';
import type { ISpacing } from '@/types/common.types';
import styled, { css } from 'styled-components';

export const PADDING_X = 18;
export const DEFAULT_FONT_SIZE = Fonts.size.default;

export const ellipsisStyle = (lines: number) => css`
	display: -webkit-box;
	word-break: break-word;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: ${lines};
	-webkit-box-orient: vertical;
`;

export const hideScrollBars = () => css`
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Base = {
	Box: styled.div<ISpacing>`
		${({ my = null, mx = null, mt = 0, mb = 0, ml = 0, mr = 0 }) => css`
			margin: ${my ?? mt}px ${mx ?? mr}px ${my ?? mb}px ${mx ?? ml}px;
		`};
		${({ py = null, px = null, pt = 0, pb = 0, pl = 0, pr = 0 }) => css`
			padding: ${py ?? pt}px ${px ?? pr}px ${py ?? pb}px ${px ?? pl}px;
		`};
	`,

	Text: styled.div<ITextProps>`
		max-width: 100%;
		${({ color }) => !!color && `color: ${color}`};
		font-size: ${({ fontSize = DEFAULT_FONT_SIZE }) => fontSize}px;
		font-weight: ${({ fontWeight = Fonts.weight.medium }) => fontWeight};
		line-height: ${({ lineHeight = '1' }) => lineHeight};
		${({ ellipsis }) => ellipsis && ellipsisStyle(ellipsis)};
	`,

	EmptyButton: styled.button<{ disabled?: boolean }>`
		margin: 0;
		padding: 0;
		font-size: ${DEFAULT_FONT_SIZE}px;
		line-height: 1;
		background: none;
		border: none;
		outline: none;
		color: var(--text);
		opacity: 1;
		cursor: pointer;

		${({ disabled = false }) =>
			disabled &&
			css`
				pointer-events: none;
				cursor: default;
				opacity: 0.2 !important;
			`}

		img {
			object-fit: contain;
		}
	`
};
