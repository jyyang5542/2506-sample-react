export interface IPageModule {
	data: {
		common: {
			get isDev(): boolean;
			root: string;
			prefix: string;
		};

		navigation: {
			headerHeight: number;
			navigationHeight: number;
			currentIndex: number;
		};

		tickingFlags: {
			behaviorScroll: boolean;
			sectionScroll: boolean;
		};
	};

	methods: {
		common: {
			animateOnScroll: () => void;
			handleImageError: () => void;
			makeClass: ({ block, element, modifier }: TBem) => string;
		};

		visual: {
			handleBehaviorOnScroll: () => void;
		};

		navigation: {
			setNavigationIndex: () => void;
			activateButton: ($targetEl: TTargetEl) => void;
			observeSectionInView: () => void;
			anchorTo: ($anchorId: TAnchorId) => void;
		};
	};

	onMounted: () => void;

	init: () => void;
}

export type TBem = {
	block: string;
	element: string;
	modifier: string;
};

export type TTargetEl = HTMLElement;

export type TAnchorId = string;
