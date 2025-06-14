'use client';

import { Base } from '@/styles/Base/Base.style';
import { darkTheme, lightTheme } from '@/styles/theme';
import { TTheme } from '@/types';
import { hexToRgba } from '@/utils';
import styled, { css } from 'styled-components';

export const Style = {
	Wrap: styled.div<{ theme: TTheme }>`
		padding: 18px;

		${({ theme }) => css`
			h1 {
				margin-bottom: 20px;
			}
			h2 {
				margin-bottom: 8px;
				font-size: 20px;
			}
			table {
				width: 100%;
				min-width: 1440px;
				border-collapse: collapse;

				th,
				td {
					padding: 4px 8px;
					font-size: 14px;
					vertical-align: middle;
					border: 1px solid ${hexToRgba(theme === 'light' ? lightTheme.text : darkTheme.text, 0.15)};
				}
				th {
					background-color: ${hexToRgba(theme === 'light' ? darkTheme.background : lightTheme.background, 0.15)};
				}
				td {
					a {
						text-decoration: underline;
					}
				}
			}
		`}
	`,

	CategoryWrap: styled(Base.Box)`
		& + & {
			margin-top: 40px;
		}
	`,

	TableWrap: styled.div`
		overflow-x: auto;
	`,

	Td: styled.td<{ align?: 'left' | 'center' | 'right' }>`
		${({ align = 'left' }) =>
			css`
				text-align: ${align};
			`}
	`
};
