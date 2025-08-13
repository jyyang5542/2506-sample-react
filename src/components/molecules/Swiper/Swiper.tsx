import { forwardRef, useImperativeHandle, useRef, useState, type ForwardedRef } from 'react';
import type SwiperCore from 'swiper';
import { Swiper as SwiperReact, SwiperSlide, type SwiperProps } from 'swiper/react';
import { Style } from './Swiper.style';

import {
	A11y,
	Autoplay,
	Controller,
	EffectCards,
	EffectCoverflow,
	EffectCreative,
	EffectCube,
	EffectFade,
	EffectFlip,
	FreeMode,
	Grid,
	HashNavigation,
	History,
	Keyboard,
	Mousewheel,
	Navigation,
	Pagination,
	Parallax,
	Scrollbar,
	Thumbs,
	Virtual,
	Zoom
} from 'swiper/modules';

import type { ISpacing } from '@/types/common.types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import type { SwiperModule } from 'swiper/types';

type Props = {
	slides: React.ReactNode[];
	options?: SwiperProps;
	customPagination?: boolean;
	autoPlayTime?: number;
	initialSlide?: number;
	onChangeCallback?: (index: number) => void;
} & ISpacing;

const Swiper = forwardRef<SwiperCore, Props>(
	(
		{ slides, options = {}, customPagination = false, initialSlide = 0, autoPlayTime = 5, onChangeCallback, ...spacingProps }: Props,
		ref: ForwardedRef<SwiperCore>
	) => {
		const swiperRef = useRef<SwiperCore | null>(null);
		const prevRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
		const nextRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
		const [activeIndex, setActiveIndex] = useState(initialSlide);

		useImperativeHandle(ref, () => swiperRef.current as SwiperCore, []);
		const isCustomPagination = options.pagination && customPagination;
		const isDefaultPagination = options.pagination && !customPagination;

		const resolvedModules = [
			options.navigation && Navigation,
			isDefaultPagination && Pagination,
			options.scrollbar && Scrollbar,
			options.autoplay && Autoplay,
			options.freeMode && FreeMode,
			options.grid && Grid,
			options.parallax && Parallax,
			options.effect === 'cards' && EffectCards,
			options.effect === 'coverflow' && EffectCoverflow,
			options.effect === 'creative' && EffectCreative,
			options.effect === 'cube' && EffectCube,
			options.effect === 'fade' && EffectFade,
			options.effect === 'flip' && EffectFlip,
			options.thumbs && Thumbs,
			options.zoom && Zoom,
			options.keyboard && Keyboard,
			options.mousewheel && Mousewheel,
			options.virtual && Virtual,
			options.hashNavigation && HashNavigation,
			options.history && History,
			options.controller && Controller,
			true && A11y
		].filter(Boolean) as SwiperModule[];

		return (
			<Style.Wrap {...spacingProps}>
				<SwiperReact
					observer
					observeParents
					spaceBetween={options.spaceBetween ?? 0}
					slidesPerView={options.slidesPerView ?? 1}
					mousewheel={options.mousewheel}
					modules={resolvedModules}
					autoplay={
						options.autoplay && {
							delay: autoPlayTime * 1000,
							disableOnInteraction: true,
							waitForTransition: true,
							pauseOnMouseEnter: true
						}
					}
					navigation={
						options.navigation && {
							prevEl: prevRef.current || undefined,
							nextEl: nextRef.current || undefined
						}
					}
					pagination={isDefaultPagination ? options.pagination : false}
					scrollbar={options.scrollbar}
					onSwiper={swiper => {
						swiperRef.current = swiper;
					}}
					onSlideChange={swiper => {
						setActiveIndex(swiper.realIndex);
						onChangeCallback?.(swiper.realIndex);
					}}
					{...options}
				>
					{slides.map((slide, idx) => (
						<SwiperSlide key={`swiper-slide-${idx}`}>{slide}</SwiperSlide>
					))}

					{isCustomPagination && (
						<Style.Control>
							{slides.map((_, idx) => (
								<Style.Bullet key={`swiper-bullet-${idx}`} $isActive={idx === activeIndex}>
									{idx + 1}
								</Style.Bullet>
							))}
						</Style.Control>
					)}
				</SwiperReact>
			</Style.Wrap>
		);
	}
);

Swiper.displayName = 'Swiper';

export default Swiper;
