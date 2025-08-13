import { Icons } from '@/mocks/icons.mock';
import type { ISpacing } from '@/types/common.types';
import Image from 'next/image';
import { Style } from './Accordion.style';
import type { IAccordion } from './Accordion.types';

type Props = IAccordion & ISpacing;

const Accordion = ({ opened = false, onToggle, title, contents, fontSize, ...spacingProps }: Props) => {
	return (
		<Style.Wrap {...spacingProps}>
			<Style.Title onClick={onToggle} $opened={opened} $fontSize={fontSize?.title}>
				<span>{title}</span>
				<Image src={Icons.ARROW_DOWN} alt='arrow' width={16} height={16} />
			</Style.Title>
			{opened && <Style.Contents $fontSize={fontSize?.contents}>{contents}</Style.Contents>}
		</Style.Wrap>
	);
};

export default Accordion;
