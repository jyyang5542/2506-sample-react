'use client';

import styled, { css } from 'styled-components';

export const Style = {
	Wrap: styled.div<{ $bgImage?: string; $bgColor?: string }>`
		height: 100%;
		${({ $bgImage, $bgColor }) =>
			css`
				background: ${$bgColor} url(${$bgImage}) no-repeat center / cover;
			`}
		will-change: backdrop-filter;
		overflow: hidden;
	`,

	Content: styled.div`
		position: relative;
		width: 100%;
		height: 100%;
	`
};
