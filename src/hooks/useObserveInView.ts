'use client';

import { useEffect, useRef } from 'react';

interface Props {
	rootMargin?: string;
	threshold?: number | number[];
	className?: string;
}

/**
 * HTML 요소가 화면에 보이는 동안 클래스 부여
 * @example
 * const ref = useObserveInView({ threshold: 0.5 });
 * <div ref={ref}>내용</div>
 */
const useObserveInView = ({ rootMargin = '0px', threshold = 0, className = 'in-view' }: Props) => {
	const elementRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						element.classList.add(className);
					} else {
						element.classList.remove(className);
					}
				});
			},
			{ rootMargin, threshold }
		);

		observer.observe(element);

		return () => {
			observer.unobserve(element);
			observer.disconnect();
		};
	}, [rootMargin, threshold, className]);

	return elementRef;
};

export default useObserveInView;
