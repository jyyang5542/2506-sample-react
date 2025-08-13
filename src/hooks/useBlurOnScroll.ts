import { useEffect, useRef, useState } from 'react';

interface Props {
	maxBlur?: number;
}

const useBlurOnScroll = <T extends HTMLElement = HTMLDivElement>({ maxBlur = 30 }: Props) => {
	const elementRef = useRef<T | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = elementRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0 }
		);
		observer.observe(element);

		let ticking = false;

		const updateBlur = () => {
			if (!element) return;

			if (!isVisible) {
				element.style.backdropFilter = `blur(0px)`;
				ticking = false;
				return;
			}

			const rect = element.getBoundingClientRect();

			if (rect.top >= 0) {
				element.style.backdropFilter = `blur(0px)`;
			} else {
				const blurRatio = Math.min(Math.abs(rect.top) / window.innerHeight, 1);
				const blurValue = blurRatio * maxBlur;

				element.style.backdropFilter = `blur(${blurValue}px)`;
			}

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
			observer.disconnect();
			window.removeEventListener('scroll', onScroll);
		};
	}, [isVisible, maxBlur]);

	return elementRef;
};

export default useBlurOnScroll;
