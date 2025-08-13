'use client';

import NoImg from '@/assets/images/no_img.png';
import { Colors } from '@/constants/colors';
import { setEmptyContent } from '@/styles/mixin';
import Image from 'next/image';
import styled, { css } from 'styled-components';

export const Style = {
	Wrap: styled.div<{ $width: number; $height: number; $ratio?: string }>`
		position: relative;
		${({ $ratio, $width, $height }) =>
			$ratio
				? css`
						width: ${$width}px;
						aspect-ratio: ${$ratio};
				  `
				: css`
						width: ${$width}px;
						height: ${$height}px;
				  `}
		background-color: ${Colors.gray_222};
		overflow: hidden;

		&::after {
			${setEmptyContent}
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: url(${NoImg.src}) no-repeat center / contain;
			pointer-events: none;
			z-index: 0;
		}
	`,

	Image: styled(Image)`
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 1;
	`,

	Video: styled.video`
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 1;
	`
};
