export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type { ISpacing } from '@/types/common.types';

export interface ITextProps {
	color?: string;
	fontFamily?: string;
	fontSize?: number;
	fontWeight?: number;
	opacity?: number;
	lineHeight?: string;
	ellipsis?: number;
}
