// import { Base } from '@/styles/Base.style';
// import { Style } from './Tabs.style.tsx';
import type { TChildren } from '@/types';

export interface ITabsData {
	label: TChildren;
}

interface Props {
	data: ITabsData[];
}

const Tabs = ({}: Props) => {
	return <>탭메뉴</>;
};

export default Tabs;
