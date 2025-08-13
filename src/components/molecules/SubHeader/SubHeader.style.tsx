'use client';

import { Fonts } from '@/constants/fonts';
import { Base } from '@/styles/Base/Base.style';
import styled from 'styled-components';

export const Style = {
	Wrap: styled(Base.Box)`
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 40px;
		gap: 8px;
	`,

	Back: styled(Base.EmptyButton)`
		flex-shrink: 0;
	`,

	Title: styled.div`
		flex: 1;
		text-align: center;
		font-weight: ${Fonts.weight.bold};
	`,

	Menu: styled(Base.EmptyButton)`
		flex-shrink: 0;
	`
};
