'use client';

import { useEffect, useRef } from 'react';

interface Props {
	offset?: number;
	maxBlur?: number;
}

/**
 * 스크롤 시 blur 효과를 적용하는 훅
 * 사용 예시:
 * const ref = useBlurOnScroll({ maxBlur: 20, offset: 100 });
 * <div ref={ref}>내용</div>
 */
const useBlurOnScroll = ({ offset = 0, maxBlur = 30 }: Props) => {
	const elementRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		let ticking = false;

		const updateBlur = () => {
			const scrollY = window.scrollY - offset;
			const windowHeight = window.innerHeight;
			const scrollRatio = Math.min(Math.max(scrollY / windowHeight, 0), 1);
			const blurValue = scrollRatio * maxBlur;

			element.style.backdropFilter = `blur(${blurValue}px)`;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateBlur);
				ticking = true;
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		updateBlur();

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [offset, maxBlur]);

	return elementRef;
};

export default useBlurOnScroll;
