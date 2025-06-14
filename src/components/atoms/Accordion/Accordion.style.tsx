'use client';

import { Base } from '@/styles/Base/Base.style';
import styled from 'styled-components';

export const Style = {
	Wrap: styled(Base.Box)``,

	Title: styled.div<{ isOpen?: boolean }>`
		display: flex;
		align-items: center;
		min-height: 30px;
		padding: 8px 16px;
		cursor: pointer;
		line-height: 1.4;
	`,

	Contents: styled.div`
		padding: 8px 16px;
	`
};
