'use client';

import type { TTabVariant } from '@/components/molecules/Tabs/Tabs.types';
import { Base } from '@/styles/Base/Base.style';
import { darkTheme, lightTheme } from '@/styles/theme';
import { TTheme } from '@/types/common.types';
import { hexToRgba } from '@/utils';
import styled, { css } from 'styled-components';

export const Style = {
	TabBtn: styled(Base.EmptyButton)<{ $isActive: boolean; variant?: TTabVariant; currentTheme: TTheme }>`
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		gap: 4px;

		${({ $isActive = false, variant, currentTheme }) => {
			const isThemeLight = currentTheme === 'light';

			if (variant === 'round') {
				return css`
					height: 30px;
					padding: 0 10px;
					font-size: 0.9em;
					border-radius: 15px;
					border: 1px solid ${({ theme }) => hexToRgba(theme.text, 0.15)};

					${$isActive
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
				return css`
					position: relative;
					line-height: 40px;
					padding: 0 8px;

					${$isActive
						? css`
								font-weight: 600;

								&::after {
									content: '';
									position: absolute;
									display: block;
									width: 100%;
									height: 2px;
									left: 0;
									background-color: ${isThemeLight ? lightTheme.text : darkTheme.text};
								}

								${variant === 'border-top'
									? css`
											&::after {
												top: 0;
											}
									  `
									: css`
											&::after {
												bottom: 0;
											}
									  `}
						  `
						: css`
								opacity: 0.5;
						  `}
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
