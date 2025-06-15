import { ISpacing } from '@/styles/Base/Base.types';
import { TChildren } from '@/types/common.types';

interface Props {
	opened?: boolean;
	title?: string;
	contents?: TChildren;
	fontSize?: { title?: number; contents?: number };
}

export type IAccordion = Props & ISpacing;
