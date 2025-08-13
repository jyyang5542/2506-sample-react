import { ReactNode } from 'react';

export type TTheme = 'light' | 'dark';

export type TChildren = string | ReactNode;

export interface ISpacing {
	px?: number;
	pl?: number;
	pr?: number;
	py?: number;
	pt?: number;
	pb?: number;
	mx?: number;
	ml?: number;
	mr?: number;
	my?: number;
	mt?: number;
	mb?: number;
}
