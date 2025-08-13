'use client';

import { useEffect, useRef } from 'react';

interface Props {
	className?: string;
}

/**
 * 이미지 / 비디오 로드 에러 시 부모에 클래스 부여
 * @example
 * const ref = useMediaErrorHandler({ className: 'no-image' });
 * <div ref={ref}> ... </div>
 */
const useHandleMediaError = <T extends HTMLElement = HTMLDivElement>({ className = 'no-media' }: Props = {}) => {
	const containerRef = useRef<T | null>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// 이미지 에러 처리
		const images = container.querySelectorAll<HTMLImageElement>('img');
		images.forEach(img => {
			img.addEventListener(
				'error',
				() => {
					img.parentElement?.classList.add(className);
				},
				{ once: true }
			);
		});

		// 비디오 에러 처리
		const videos = container.querySelectorAll<HTMLVideoElement>('video');
		videos.forEach(video => {
			const wrapper = video.parentElement;

			// 비디오 로드 에러
			video.addEventListener(
				'error',
				() => {
					wrapper?.classList.add(className);
				},
				{ once: true }
			);

			// poster 검사
			const poster = video.getAttribute('poster');
			if (poster) {
				const img = new Image();
				img.src = poster;
				img.onerror = () => {
					wrapper?.classList.add(className);
				};
			} else {
				wrapper?.classList.add(className);
			}
		});

		return () => {
			images.forEach(img => {
				img.removeEventListener('error', () => {});
			});
			videos.forEach(video => {
				video.removeEventListener('error', () => {});
			});
		};
	}, [className]);

	return containerRef;
};

export default useHandleMediaError;
