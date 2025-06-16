import { Icons } from '@/mocks/icons.mock';
import { PADDING_X } from '@/styles/Base/Base.style';
import Image from 'next/image';
import { Style } from './SubHeader.style';

interface Props {
	title: string;
	hasBack?: boolean;
	hasMenu?: boolean;
}

const SubHeader = ({ title, hasBack = true, hasMenu = false }: Props) => {
	const IconBtn = ({ type }: { type: 'back' | 'menu' }) => {
		const icon = type === 'back' ? Icons.ARROW_LEFT : Icons.MENU;
		const alt = type === 'back' ? '뒤로가기' : '메뉴';

		return <Image src={icon} alt={alt} width={16} height={16} />;
	};
	return (
		<Style.Wrap px={PADDING_X} py={0}>
			{hasBack && (
				<Style.Back onClick={() => history.back()}>
					<IconBtn type='back' />
				</Style.Back>
			)}
			<Style.Title>{title}</Style.Title>
			{hasMenu && (
				<Style.Menu onClick={() => console.log('메뉴 버튼 클릭')}>
					<IconBtn type='menu' />
				</Style.Menu>
			)}
		</Style.Wrap>
	);
};

export default SubHeader;
