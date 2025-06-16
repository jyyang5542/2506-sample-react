'use client';

import { Base } from '@/styles/Base/Base.style';
import styled, { css } from 'styled-components';

export const Style = {
	Wrap: styled(Base.Box)``,

	Control: styled.div``,

	Bullet: styled.span<{ isActive: boolean }>`
		${({ isActive }) =>
			isActive
				? css`
						font-weight: bold;
				  `
				: css``}
	`
};
