import type { ITabBtnLink, ITabBtnPanel } from '@/components/atoms/TabBtn/TabBtn.types';
import type { ISpacing } from '@/types/common.types';
import { Dispatch, SetStateAction } from 'react';

export type TTabVariant = 'border-top' | 'border-bottom' | 'round';

export interface ITypeCommon extends ISpacing {
	variant?: TTabVariant;
	activeIndex?: number;
	setActiveIndex?: Dispatch<SetStateAction<number>>;
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
