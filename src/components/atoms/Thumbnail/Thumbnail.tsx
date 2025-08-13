import { useHandleMediaError } from '@/hooks';
import { useEffect, useRef } from 'react';
import { Style } from './Thumbnail.style';

interface Props {
	src?: string;
	alt?: string;
	type?: 'image' | 'video';
	width?: number;
	height?: number;
	defaultImage?: string;
	className?: string;
	errorClassName?: string;
	ratio?: string;
}

const isValidRatio = (ratio: string): boolean => /^\d+\/\d+$/.test(ratio);

const parseAspectRatio = (ratio: string): string | undefined => {
	const [w, h] = ratio.split('/').map(Number);
	if (!w || !h) return undefined;
	return `${w} / ${h}`;
};

const Thumbnail = ({
	src,
	alt = '',
	type = 'image',
	width = 324,
	height = 236,
	defaultImage,
	className = '',
	errorClassName = 'no-image',
	ratio
}: Props) => {
	const containerRef = useHandleMediaError({ className: errorClassName });
	const videoRef = useRef<HTMLVideoElement>(null);

	const validRatio = ratio && isValidRatio(ratio) ? ratio : undefined;
	const aspectRatio = validRatio ? parseAspectRatio(validRatio) : undefined;

	useEffect(() => {
		if (type !== 'video' || !videoRef.current) return;

		const video = videoRef.current;
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						video.play().catch(() => {
							// 자동 재생 거부 시 처리
						});
					} else {
						video.pause();
					}
				});
			},
			{ threshold: 0.25 }
		);

		observer.observe(video);

		return () => {
			observer.unobserve(video);
		};
	}, [type]);

	return (
		<Style.Wrap ref={containerRef} className={`thumbnail-${className}`} $width={width} $height={height} $ratio={aspectRatio}>
			{type === 'image' && src ? (
				<Style.Image src={src} alt={alt} fill sizes='(max-width: 768px) 100vw, 768px' />
			) : (
				<Style.Video ref={videoRef} src={src} poster={defaultImage} muted playsInline controls={false} loop />
			)}
		</Style.Wrap>
	);
};

export default Thumbnail;
