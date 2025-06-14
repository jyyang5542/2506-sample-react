import { TTabType, TTabVariant } from '@/components/molecules/Tabs/Tabs.types';
import type { TChildren } from '@/types';
import { TTheme } from '@/types';
import { Dispatch, SetStateAction } from 'react';

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
