'use client';

import { Base } from '@/styles/Base/Base.style';
import { hexToRgba } from '@/utils';
import styled, { css } from 'styled-components';

const DEFAULT_FONT_SIZE = 14;

export const Style = {
	Wrap: styled(Base.Box)`
		border: 1px solid ${({ theme }) => hexToRgba(theme.text, 0.15)};
	`,

	Title: styled.div<{ $opened: boolean; $fontSize?: number }>`
		display: flex;
		align-items: center;
		min-height: 30px;
		padding: 8px 16px;
		cursor: pointer;
		line-height: 1.4;
		gap: 16px;

		span {
			flex: 1;
			font-size: ${({ $fontSize = DEFAULT_FONT_SIZE }) => $fontSize}px;
		}

		img {
			transform: rotate(${({ $opened }) => ($opened ? css`180deg` : css`0deg`)});
		}
	`,

	Contents: styled.div<{ $fontSize?: number }>`
		display: flex;
		align-items: center;
		padding: 8px 16px;
		min-height: 30px;
		font-size: ${({ $fontSize = DEFAULT_FONT_SIZE }) => $fontSize}px;
		background-color: ${({ theme }) => hexToRgba(theme.text, 0.05)};
		border-top: 1px solid ${({ theme }) => hexToRgba(theme.text, 0.15)};
	`
};
