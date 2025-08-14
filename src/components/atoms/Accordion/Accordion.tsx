import { Icons } from '@/mocks/icons.mock';
import type { ISpacing } from '@/types/common.types';
import Image from 'next/image';
import { useState } from 'react';
import { Style } from './Accordion.style';
import type { IAccordion } from './Accordion.types';

type Props = IAccordion &
	ISpacing & {
		opened?: boolean;
		onToggle?: () => void;
	};

const Accordion = ({ opened, onToggle, title, contents, fontSize, ...spacingProps }: Props) => {
	const [internalOpened, setInternalOpened] = useState(opened || false);

	const isControlled = onToggle !== undefined;
	const isOpen = isControlled ? opened : internalOpened;

	const handleToggle = () => {
		if (isControlled) {
			onToggle?.();
		} else {
			setInternalOpened(prev => !prev);
		}
	};

	return (
		<Style.Wrap {...spacingProps}>
			<Style.Title onClick={handleToggle} $opened={!!isOpen} $fontSize={fontSize?.title}>
				<span>{title}</span>
				<Image src={Icons.ARROW_DOWN} alt='arrow' width={16} height={16} />
			</Style.Title>
			{isOpen && <Style.Contents $fontSize={fontSize?.contents}>{contents}</Style.Contents>}
		</Style.Wrap>
	);
};

export default Accordion;
