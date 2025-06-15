import { ISpacing } from '@/styles/Base/Base.types';
import { TChildren } from '@/types/common.types';

interface Props {
	opened?: boolean;
	title?: string;
	contents?: TChildren;
}

export type IAccordion = Props & ISpacing;
