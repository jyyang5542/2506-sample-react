import { ISpacing } from '@/styles/Base/Base.types';
import { TChildren } from '@/types/common.types';

export interface IAccordion extends ISpacing {
	opened?: boolean;
	title?: string;
	contents?: TChildren;
	fontSize?: {
		title?: number;
		contents?: number;
	};
	onToggle?: () => void;
}
