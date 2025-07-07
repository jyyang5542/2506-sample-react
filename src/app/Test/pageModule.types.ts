export interface IPageModule {
	data: {
		common: IDCommon;
		navigation: IDNavigation;
		tickingFlags: IDTickingFlags;
	};

	methods: {
		common: IMCommon;
		visual: IMVisual;
		navigation: IMNavigation;
	};

	onMounted: () => void;
	init: () => void;
}

interface IDCommon {
	get isDev(): boolean;
	currentUrl: string;
	root: string;
	prefix: string;
}

interface IDNavigation {
	headerHeight: number;
	navigationHeight: number;
	currentIndex: number;
	$navigation: HTMLElement | null;
}

interface IDTickingFlags {
	behaviorScroll: boolean;
	sectionScroll: boolean;
}

export interface IBem {
	block: string;
	element: string;
	modifier: string;
}

interface IMCommon {
	animateOnScroll: () => void;
	handleImageError: () => void;
	makeClass: ({ block, element, modifier }: IBem) => string;
}

interface IMVisual {
	handleBehaviorOnScroll: () => void;
}

interface IMNavigation {
	setNavigationIndex: () => void;
	activateButton: ($targetEl: HTMLElement) => void;
	observeSectionInView: () => void;
	anchorTo: ($anchorId: string) => void;
}
