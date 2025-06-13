import { CodeBlock, CodeLine } from '@/components/atoms';
import { ARG_TYPES } from '@/constants/storybook';
import { Base } from '@/styles/Base.style';
import type { Meta } from '@storybook/nextjs-vite';
import { useState } from 'react';
import Tabs from './Tabs';
import type { ITabBtnLink, ITabBtnPanel } from './tabsType';

const Description = () => {
	const CODE = `/* 기본 */
<Tabs />
`;

	return (
		<div>
			<h1>Tabs</h1>
			<div>
				설명을 작성하세요
				<br />
				<br />
				<CodeLine>{`import { Tabs } from '@/components/molecules'`}</CodeLine> 한 뒤 다음과 같이 사용합니다.
			</div>
			<CodeBlock>{CODE}</CodeBlock>
		</div>
	);
};

const meta = {
	title: 'Molecule/Tabs',
	component: Tabs,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		data: { description: '탭 메뉴의 각 데이터', control: false },
		...ARG_TYPES.SPACING
	},
	args: {
		data: []
	}
} satisfies Meta<typeof Tabs>;

export default meta;

export const Docs: React.FC = () => {
	return (
		<Base.Box>
			<Description />
		</Base.Box>
	);
};

const icMypage = 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png';
const icLocation = 'https://cdn-icons-png.flaticon.com/512/535/535239.png';

const COMMON_DATA = [
	{ label: '탭 메뉴 1' },
	{ label: '탭 메뉴 2', icon: icMypage },
	{ label: '탭 메뉴 3', icon: icLocation, disabled: true },
	{ label: '탭 메뉴 4' },
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

const createStory = (props: StoryConfig['props'], name: string) => {
	const Story = () => {
		const [activeIndex, setActiveIndex] = useState(0);

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
export const TypeLink = createStory({ type: 'link', data: COMMON_DATA as ITabBtnLink[] }, 'TypeLink');
export const VariantRound = createStory({ variant: 'round' }, 'VariantRound');
export const VariantBorderTop = createStory({ variant: 'border-top' }, 'VariantBorderTop');
export const VariantBorderBottom = createStory({ variant: 'border-bottom' }, 'VariantBorderBottom');
