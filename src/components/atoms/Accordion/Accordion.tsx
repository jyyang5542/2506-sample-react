'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Style } from './Accordion.style';
import type { IAccordion } from './Accordion.types';

const Accordion = ({ opened = false, title, contents, px, pl, pr, py, pt, pb, mx, ml, mr, my, mt, mb }: IAccordion) => {
	const spacingProps = { px, pl, pr, py, pt, pb, mx, ml, mr, my, mt, mb };
	const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(opened);

	const handleAccordionToggle = () => {
		setIsAccordionOpen(prev => !prev);
	};

	return (
		<Style.Wrap {...spacingProps}>
			<Style.Title onClick={handleAccordionToggle} opened={isAccordionOpen}>
				<span>{title}</span>
				<Image src='https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png' alt='arrow' width={16} height={16} />
			</Style.Title>
			{isAccordionOpen && <Style.Contents>{contents}</Style.Contents>}
		</Style.Wrap>
	);
};

export default Accordion;
