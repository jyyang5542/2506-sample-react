'use client';

import { Base } from '@/styles/Base/Base.style';
import { hexToRgba } from '@/utils';
import styled, { css } from 'styled-components';

export const Style = {
	Wrap: styled.div`
		padding: 18px;
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
				padding: 8px;
				font-size: 14px;
				vertical-align: middle;
				line-height: 1;
				border: 1px solid ${({ theme }) => hexToRgba(theme.text, 0.15)};
			}
			th {
				background-color: ${({ theme }) => hexToRgba(theme.text, 0.15)};
			}
			td {
				a {
					text-decoration: underline;
				}
			}
		}
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
