'use client';

import { Icons } from '@/mocks/icons.mock';
import Image from 'next/image';
import { Style } from './Accordion.style';
import type { IAccordion } from './Accordion.types';

const Accordion = ({ opened = false, title, contents, fontSize, onToggle, px, pl, pr, py, pt, pb, mx, ml, mr, my, mt, mb }: IAccordion) => {
	const spacingProps = { px, pl, pr, py, pt, pb, mx, ml, mr, my, mt, mb };

	return (
		<Style.Wrap {...spacingProps}>
			<Style.Title onClick={onToggle} $opened={opened} $fontSize={fontSize?.title}>
				<span>{title}</span>
				<Image
					src={Icons.ARROW_DOWN}
					alt='arrow'
					width={16}
					height={16}
					style={{
						transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
						transition: 'transform 0.2s ease'
					}}
				/>
			</Style.Title>
			{opened && <Style.Contents $fontSize={fontSize?.contents}>{contents}</Style.Contents>}
		</Style.Wrap>
	);
};

export default Accordion;
