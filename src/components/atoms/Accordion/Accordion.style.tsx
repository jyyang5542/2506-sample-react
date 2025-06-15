'use client';

import { Base } from '@/styles/Base/Base.style';
import { hexToRgba } from '@/utils';
import styled, { css } from 'styled-components';

export const Style = {
	Wrap: styled(Base.Box)`
		border: 1px solid ${({ theme }) => hexToRgba(theme.text, 0.15)};
	`,

	Title: styled.div<{ opened: boolean }>`
		display: flex;
		align-items: center;
		min-height: 30px;
		padding: 8px 16px;
		cursor: pointer;
		line-height: 1.4;

		${({ opened }) => (opened ? css`` : css``)}
	`,

	Contents: styled.div`
		padding: 8px 16px;
		border-top: 1px solid ${({ theme }) => hexToRgba(theme.text, 0.15)};
	`
};
