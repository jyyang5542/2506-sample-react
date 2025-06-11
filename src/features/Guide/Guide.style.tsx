'use client';

import { Colors, hexToRgba } from '@/constants/Colors';
import { TTheme } from '@/types';
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
				min-width: 1280px;
				border-collapse: collapse;

				th,
				td {
					padding: 4px;
					font-size: 14px;
					vertical-align: middle;
					border: 1px solid ${theme === 'light' ? hexToRgba(Colors.grayC, 0.7) : hexToRgba(Colors.gray4, 0.6)};
				}
				th {
					background-color: ${theme === 'light' ? hexToRgba(Colors.grayE, 0.7) : hexToRgba(Colors.gray4, 0.6)};
				}
				td {
					a {
						text-decoration: underline;
						color: ${Colors.gray7};
					}
				}
			}
		`}
	`,

	CategoryWrap: styled.div`
		& + & {
			margin-top: 40px;
		}
	`,

	TableWrap: styled.div`
		overflow-x: auto;
	`,

	Td: styled.td<{ align?: 'left' | 'center' | 'right' }>`
		${({ align = 'center' }) =>
			css`
				text-align: ${align};
			`}
	`
};
