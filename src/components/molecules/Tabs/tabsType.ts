import type { TChildren } from '@/types';
import { TTheme } from '@/types';
import type { ISpacing } from '@/types/baseStyle';
import { Dispatch, SetStateAction } from 'react';

export type TTabVariant = 'border-top' | 'border-bottom' | 'round';

export interface ITypeCommon extends ISpacing {
	variant?: TTabVariant;
	activeIndex: number;
	setActiveIndex: Dispatch<SetStateAction<number>>;
}

export type TTabType = 'panel' | 'link';

export interface ITypePanel extends ITypeCommon {
	data: ITabBtnPanel[];
	type: 'panel';
}

export interface ITypeLink extends ITypeCommon {
	data: ITabBtnLink[];
	type: 'link';
}

interface ITabBtnCommon {
	label: TChildren;
	icon?: string;
	disabled?: boolean;
	$isActive: boolean;
}

export interface ITabBtnPanel extends ITabBtnCommon {
	onClick?: () => void;
}

export interface ITabBtnLink extends ITabBtnCommon {
	href?: string | undefined;
}

export interface ITabBtn {
	index: number;
	type: TTabType;
	variant: TTabVariant;
	theme: TTheme;
	setActiveIndex: Dispatch<SetStateAction<number>>;
}
