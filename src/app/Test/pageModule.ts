'use strict';

import type { IPageModule, TAnchorId, TBem, TTargetEl } from './pageModule.types';

export const pageModule: IPageModule = {
	data: {
		common: {
			get isDev(): boolean {
				return window.location.hostname === 'localhost';
			},
			root: '.ssg-voyage',
			prefix: 'ssg-voyage'
		},

		navigation: {
			headerHeight: 50,
			navigationHeight: 50,
			currentIndex: 0
		},

		tickingFlags: {
			behaviorScroll: false,
			sectionScroll: false
		}
	},

	methods: {
		common: {
			animateOnScroll() {
				const observer = new IntersectionObserver(
					entries => {
						entries.forEach(entry => {
							const isVisibleEnough = entry.intersectionRatio > 0;

							if (entry.isIntersecting && isVisibleEnough) {
								entry.target.classList.add('animate');
								observer.unobserve(entry.target);
							}
						});
					},
					{
						root: null,
						threshold: 0.3
					}
				);

				document.querySelectorAll('[data-animate]').forEach(el => {
					observer.observe(el);
				});
			},

			handleImageError() {
				const $images = document.querySelectorAll('img');
				$images.forEach((el: HTMLElement) => {
					el.addEventListener(
						'error',
						() => {
							const parent = el.parentNode;
							if (parent instanceof HTMLElement) {
								parent.classList.add('no-image');
							}
						},
						{ once: true }
					);
				});
			},

			makeClass({ block, element, modifier }: TBem): string {
				return `${block}__${element}${modifier ? `--${modifier}` : ''}`;
			}
		},

		visual: {
			handleBehaviorOnScroll() {
				const { root } = pageModule.data.common;
				const { tickingFlags } = pageModule.data;
				const $visualFilter = document.querySelector(`${root}-visual__filter`);
				if (!($visualFilter instanceof HTMLElement)) return;

				const onScroll = () => {
					const scrollY = window.scrollY;
					const winH = window.innerHeight;
					const scrollRatio = Math.min(scrollY / winH, 1);
					const maxBlurVW = 10;
					const blurValue = scrollRatio * maxBlurVW;

					$visualFilter.style.backdropFilter = `blur(${blurValue}vw)`;
					tickingFlags.behaviorScroll = false;
				};

				window.addEventListener('scroll', () => {
					if (!tickingFlags.behaviorScroll) {
						window.requestAnimationFrame(onScroll);
						tickingFlags.behaviorScroll = true;
					}
				});
			}
		},

		navigation: {
			setNavigationIndex() {
				const { root, prefix } = pageModule.data.common;
				const { currentIndex } = pageModule.data.navigation;
				const { makeClass } = pageModule.methods.common;
				const $btns = document.querySelectorAll(`${root}-navigation__btn`);
				const activeClass = makeClass({
					block: `${prefix}-navigation`,
					element: 'btn',
					modifier: 'active'
				});

				$btns.forEach(($btn, idx) => {
					$btn.classList.toggle(activeClass, idx === currentIndex);
				});
			},

			activateButton($targetEl: TTargetEl) {
				const { root, prefix } = pageModule.data.common;
				const $btns = document.querySelectorAll(`${root}-navigation__btn`);
				const activeClass = `${prefix}-navigation__btn--active`;

				$btns.forEach(($btn, idx) => {
					const isActive = $btn === $targetEl;
					$btn.classList.toggle(activeClass, isActive);
					if (isActive) {
						pageModule.data.navigation.currentIndex = idx;
					}
				});
			},

			observeSectionInView() {
				const { root } = pageModule.data.common;
				const { tickingFlags } = pageModule.data;
				const { navigationHeight } = pageModule.data.navigation;
				const { methods } = pageModule;
				const $btns = Array.from(document.querySelectorAll(`${root}-navigation__btn`)) as HTMLElement[];
				const $root = document.querySelector(root);
				if (!($root instanceof HTMLElement)) return;

				const visualHeight = $root.offsetTop + 524;
				const offset = navigationHeight - visualHeight;

				const sections: Array<{ btn: HTMLElement; sectionEl: HTMLElement }> = $btns
					.map(btn => {
						const id = btn.getAttribute('data-anchor-to');
						if (!id) return null;

						const sectionEl = document.querySelector(id);
						if (!(sectionEl instanceof HTMLElement)) return null;

						return { btn, sectionEl };
					})
					.filter((item): item is { btn: HTMLElement; sectionEl: HTMLElement } => !!item);

				const onScroll = () => {
					const scrollTop = window.scrollY;
					let activeIndex = 0;

					for (let i = 0; i < sections.length; i++) {
						const { sectionEl } = sections[i];
						const top = sectionEl.offsetTop - offset;
						const bottom = top + sectionEl.offsetHeight;

						if (scrollTop >= top && scrollTop < bottom) {
							activeIndex = i;
							break;
						}
					}

					methods.navigation.activateButton(sections[activeIndex].btn);
					tickingFlags.sectionScroll = false;
				};

				const throttledScroll = () => {
					if (!tickingFlags.sectionScroll) {
						window.requestAnimationFrame(onScroll);
						tickingFlags.sectionScroll = true;
					}
				};

				onScroll();
				window.addEventListener('scroll', throttledScroll);
			},

			anchorTo($anchorId: TAnchorId) {
				const { root, isDev } = pageModule.data.common;
				const { headerHeight, navigationHeight } = pageModule.data.navigation;
				const $target = document.querySelector($anchorId);
				const $root = document.querySelector(root);

				if (!($target instanceof HTMLElement) || !($root instanceof HTMLElement)) return;

				const visualHeight = $root.offsetTop + 524;
				const offset = !isDev ? navigationHeight + headerHeight : navigationHeight;
				const targetOffsetTop = $target.offsetTop;

				window.scrollTo({
					top: targetOffsetTop + visualHeight - offset,
					behavior: 'smooth'
				});
			}
		}
	},

	onMounted() {
		const { common, visual, navigation } = pageModule.methods;

		common.animateOnScroll();
		common.handleImageError();
		visual.handleBehaviorOnScroll();
		navigation.setNavigationIndex();
		navigation.observeSectionInView();
	},

	init() {
		const { onMounted } = pageModule;
		if (document.readyState === 'complete' || document.readyState === 'interactive') {
			onMounted();
		} else {
			document.addEventListener('DOMContentLoaded', () => {
				onMounted();
			});
		}
	}
};
