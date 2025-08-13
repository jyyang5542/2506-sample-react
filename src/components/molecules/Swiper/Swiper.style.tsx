'use client';

import { Base } from '@/styles/Base/Base.style';
import styled, { css } from 'styled-components';

export const Style = {
	Wrap: styled(Base.Box)``,

	Control: styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
	`,

	Bullet: styled.span<{ $isActive: boolean }>`
		cursor: pointer;
		${({ $isActive }) =>
			$isActive
				? css`
						font-weight: bold;
				  `
				: css``}
	`,

	Prev: styled.button``,

	Next: styled.button``
};
