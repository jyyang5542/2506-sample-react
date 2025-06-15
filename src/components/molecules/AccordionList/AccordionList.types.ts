import { IAccordion } from '@/components/atoms/Accordion/Accordion.types';
import { ISpacing } from '@/styles/Base/Base.types';

export type IAccordionListItem = Pick<IAccordion, 'title' | 'contents'>;

export type IAccordionList = {
	data: IAccordionListItem[];
	gap?: number;
	collapseOthers?: boolean;
	fontSize?: { title?: number; contents?: number };
	activeIndex?: number | null;
} & ISpacing;
