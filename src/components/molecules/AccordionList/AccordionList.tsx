import { Accordion } from '@/components/atoms';
import type { ISpacing } from '@/types/common.types';
import { useEffect, useState } from 'react';
import { Style } from './AccordionList.style';
import type { IAccordionList } from './AccordionList.types';

type Props = IAccordionList & ISpacing;

const AccordionList = ({ data, gap = 8, collapseOthers = false, fontSize, activeIndex = null, ...spacingProps }: Props) => {
	const [openedIndex, setOpenedIndex] = useState<number | null>(() => (collapseOthers ? activeIndex : null));

	const [openedIndices, setOpenedIndices] = useState<number[]>(() => {
		return !collapseOthers && activeIndex !== null ? [activeIndex] : [];
	});

	const handleToggle = (index: number) => {
		if (collapseOthers) {
			setOpenedIndex(prevIndex => (prevIndex === index ? null : index));
		} else {
			setOpenedIndices(prevIndices => {
				if (prevIndices.includes(index)) {
					return prevIndices.filter(item => item !== index);
				} else {
					return [...prevIndices, index];
				}
			});
		}
	};

	useEffect(() => {
		if (collapseOthers) {
			setOpenedIndex(activeIndex);
		} else {
			setOpenedIndices(activeIndex !== null ? [activeIndex] : []);
		}
	}, [activeIndex, collapseOthers]);

	return (
		<Style.Wrap $gap={gap} {...spacingProps}>
			{data.map((item, index) => (
				<Accordion
					key={`accordion-item-${index}-${item.title}`}
					title={item.title}
					contents={item.contents}
					opened={collapseOthers ? openedIndex === index : openedIndices.includes(index)}
					onToggle={() => handleToggle(index)}
					fontSize={fontSize}
				/>
			))}
		</Style.Wrap>
	);
};

export default AccordionList;
