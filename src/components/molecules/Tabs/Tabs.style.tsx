'use client';

import { Base, hideScrollBars } from '@/styles/Base/Base.style';
import { darkTheme, lightTheme } from '@/styles/theme';
import { TTheme } from '@/types';
import { hexToRgba } from '@/utils';
import styled, { css } from 'styled-components';
import type { TTabVariant } from './Tabs.types';

export const Style = {
	Wrap: styled.div`
		overflow-x: auto;
		${hideScrollBars}
	`,

	Tab: styled.div<{ variant: TTabVariant }>`
		display: flex;
		flex-wrap: nowrap;

		${({ variant }) => {
			if (variant === 'round') {
				return css`
					gap: 4px;
				`;
			}
		}}
	`,

	TabBtn: styled(Base.EmptyButton)<{ isActive: boolean; variant?: TTabVariant; theme: TTheme; disabled?: boolean }>`
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		gap: 4px;

		${({ isActive = false, variant, theme }) => {
			const isThemeLight = theme === 'light';

			if (variant === 'round') {
				return css`
					height: 30px;
					padding: 0 10px;
					font-size: 0.9em;
					border-radius: 15px;
					border: 1px solid ${hexToRgba(isThemeLight ? lightTheme.text : darkTheme.text, 0.15)};

					${isActive
						? css`
								color: ${darkTheme.text} !important;
								background-color: ${darkTheme.background};
								${isThemeLight &&
								css`
									img {
										filter: invert(1);
									}
								`}
						  `
						: css`
								color: ${lightTheme.text};
								background-color: ${lightTheme.background};
								${!isThemeLight &&
								css`
									img {
										filter: invert(1);
									}
								`}
						  `}
				`;
			} else {
				const border = `2px solid ${isThemeLight ? lightTheme.text : darkTheme.text}`;
				return css`
					${isActive &&
					(variant === 'border-top'
						? css`
								border-top: ${border};
						  `
						: css`
								border-bottom: ${border};
						  `)}
				`;
			}
		}}

		span {
			color: inherit;
		}
	`,

	Icon: styled.img`
		width: 16px;
		height: 16px;
	`
};
