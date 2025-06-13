import { ARG_TYPES } from '@/constants/storybook';
import Description, { type IDescription } from '@/stories/components/Description';
import { Base } from '@/styles/Base.style';
import type { Meta } from '@storybook/nextjs-vite';
import { useState } from 'react';
import Tabs from './Tabs';
import type { ITabBtnLink, ITabBtnPanel } from './tabsType';

const meta = {
	title: 'Molecules/Tabs',
	component: Tabs,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		data: { description: '탭 메뉴의 각 데이터', control: false },
		type: { description: '탭 메뉴의 타입<br />`button`으로 사용할 건지, `a`로 사용할 건지', control: 'select', options: ['panel', 'link'] },
		variant: { description: '탭 메뉴의 스타일', control: 'select', options: ['border-top', 'border-bottom', 'round'] },
		activeIndex: { description: '최초 로드 시 active 될 탭의 index', control: 'number' },
		setActiveIndex: { description: '페이지에서 컴포넌트로 내려주는 `setState`', control: false },
		...ARG_TYPES.SPACING
	},
	args: {
		data: [],
		type: 'panel',
		variant: 'border-top',
		activeIndex: 0
	}
} satisfies Meta<typeof Tabs>;

export default meta;

const descProps: IDescription = {
	componentName: 'Tabs',
	importData: `import { Tabs } from '@/components/molecules'`,
	code: `<Tabs data={[]} type="link" variant="round" activeIndex={2} setActiveIndex={setActiveIndex} />`,
	description: ''
};

export const Docs: React.FC = () => {
	return (
		<Base.Box>
			<Description {...descProps} />
		</Base.Box>
	);
};

const icMypage = 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png';
const icLocation = 'https://cdn-icons-png.flaticon.com/512/535/535239.png';

const COMMON_DATA = [
	{ label: '탭 메뉴 1' },
	{ label: '탭 메뉴 2', icon: icMypage },
	{ label: '탭 메뉴 3', disabled: true },
	{ label: '탭 메뉴 4', icon: icLocation },
	{ label: '탭 메뉴 5' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' },
	{ label: 'DUMMY' }
];

type StoryConfig = {
	name: string;
	props: Partial<Parameters<typeof Tabs>[0]>;
};

const createStory = (props: StoryConfig['props'] & { initial?: number }, name: string) => {
	const Story = () => {
		const [activeIndex, setActiveIndex] = useState<number>(props.initial || 0);

		return <Tabs {...props} data={props.data ?? panelData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
	};

	Story.displayName = name;
	return Story;
};

const panelData = COMMON_DATA.map(item => ({
	...item,
	onClick: () => console.log(`${item.label} 클릭`)
})) as ITabBtnPanel[];

export const Default = createStory({}, 'Default');
export const TypeLink = createStory({ type: 'link', data: COMMON_DATA as ITabBtnLink[], initial: 3 }, 'TypeLink');
export const VariantRound = createStory({ variant: 'round' }, 'VariantRound');
export const VariantBorderTop = createStory({ variant: 'border-top' }, 'VariantBorderTop');
export const VariantBorderBottom = createStory({ variant: 'border-bottom' }, 'VariantBorderBottom');
