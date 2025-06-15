'use client';

import { Base } from '@/styles/Base/Base.style';
import styled from 'styled-components';

export const Style = {
	Wrap: styled(Base.Box)<{ gap: number }>`
		display: flex;
		flex-direction: column;
		gap: ${({ gap }) => gap}px;
	`
};
