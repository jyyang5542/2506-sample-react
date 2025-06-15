'use client';

import { ISpacing } from '@/styles/Base/Base.types';
import { TChildren } from '@/types/common.types';
import { useState } from 'react';
import { Style } from './Accordion.style';

type Props = { opened?: boolean; title?: string; contents?: TChildren } & ISpacing;

const Accordion = ({ opened = false, title, contents, px, pl, pr, py, pt, pb, mx, ml, mr, my, mt, mb }: Props) => {
	const spacingProps = { px, pl, pr, py, pt, pb, mx, ml, mr, my, mt, mb };
	const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(opened);

	const handleAccordionToggle = () => {
		setIsAccordionOpen(prev => !prev);
	};

	return (
		<Style.Wrap {...spacingProps}>
			<Style.Title onClick={handleAccordionToggle} opened={opened}>
				{title}
			</Style.Title>
			{isAccordionOpen && <Style.Contents>{contents}</Style.Contents>}
		</Style.Wrap>
	);
};

export default Accordion;
