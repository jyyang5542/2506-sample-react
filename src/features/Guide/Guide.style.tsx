'use client';

import { Colors, hexToRgba } from '@/constants/Colors';
import { TTheme } from '@/types';
import styled, { css } from 'styled-components';

export const Wrap = styled.div<{ theme: TTheme }>`
	padding: 18px;

	${({ theme }) => css`
		h1 {
			margin-bottom: 20px;
		}
		h2 {
			margin-bottom: 8px;
			font-size: 20px;
		}
		.category-wrap {
			&:not(:last-of-type) {
				margin-bottom: 40px;
			}
		}
		.table-wrap {
			overflow-x: auto;

			table {
				width: 100%;
				min-width: 1280px;
				border-collapse: collapse;

				th,
				td {
					padding: 4px;
					text-align: center;
					font-size: 14px;
					vertical-align: center;
					border: 1px solid ${theme === 'light' ? hexToRgba(Colors.grayC, 0.7) : hexToRgba(Colors.gray4, 0.6)};
				}
				th {
					background-color: ${theme === 'light' ? hexToRgba(Colors.grayE, 0.7) : hexToRgba(Colors.gray4, 0.6)};
				}
				a {
					text-decoration: underline;
					color: ${Colors.gray7};
				}
			}
		}
	`}
`;
