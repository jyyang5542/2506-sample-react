export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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

export interface ITextProps {
	color?: string;
	fontFamily?: string;
	fontSize?: number;
	fontWeight?: number;
	opacity?: number;
	lineHeight?: string;
	ellipsis?: number;
}
