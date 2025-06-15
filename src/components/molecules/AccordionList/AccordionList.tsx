import { Accordion } from '@/components/atoms';
import { useEffect, useState } from 'react';
import { Style } from './AccordionList.style';
import type { IAccordionListItem } from './AccordionList.types';

interface Props {
	data: IAccordionListItem[];
	gap?: number;
	collapseOthers?: boolean;
	fontSize?: { title?: number; contents?: number };
	activeIndex?: number | null;
}

const AccordionList = ({ data, gap = 8, collapseOthers = false, fontSize, activeIndex = null }: Props) => {
	const [openedList, setOpenedList] = useState<boolean[]>(data.map((_, i) => activeIndex !== null && i === activeIndex));

	useEffect(() => {
		setOpenedList(data.map((_, i) => activeIndex !== null && i === activeIndex));
	}, [activeIndex, data]);

	const handleToggle = (index: number) => {
		setOpenedList(prev => {
			if (collapseOthers) {
				const isAlreadyOpened = prev[index];
				return prev.map((_, i) => (i === index ? !isAlreadyOpened : false));
			} else {
				return prev.map((opened, i) => (i === index ? !opened : opened));
			}
		});
	};

	return (
		<Style.Wrap gap={gap}>
			{data.map((item, index) => (
				<Accordion
					key={`accordion-item-${index}-${item.title}`}
					title={item.title}
					contents={item.contents}
					opened={openedList[index]}
					onToggle={() => handleToggle(index)}
					fontSize={fontSize}
				/>
			))}
		</Style.Wrap>
	);
};

export default AccordionList;
