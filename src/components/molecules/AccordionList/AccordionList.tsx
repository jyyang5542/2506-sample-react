import { Accordion } from '@/components/atoms';
import { useEffect, useState } from 'react';
import { Style } from './AccordionList.style';
import type { IAccordionList } from './AccordionList.types';

const AccordionList = ({
	data,
	gap = 8,
	collapseOthers = false,
	fontSize,
	activeIndex = null,
	px,
	pl,
	pr,
	py,
	pt,
	pb,
	mx,
	ml,
	mr,
	my,
	mt,
	mb
}: IAccordionList) => {
	const spacingProps = { px, pl, pr, py, pt, pb, mx, ml, mr, my, mt, mb };
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
		<Style.Wrap $gap={gap} {...spacingProps}>
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
