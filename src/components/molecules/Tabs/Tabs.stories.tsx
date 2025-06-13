import { ARG_TYPES } from '@/constants/storybook';
import { Description, Required } from '@/stories/components';
import type { IDescription } from '@/stories/types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Dispatch, SetStateAction } from 'react';
import Tabs from './Tabs';
import type { ITabBtnLink, ITabBtnPanel } from './tabsType';

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
	{ label: 'DUMMY' }
];

const panelData = COMMON_DATA.map(item => ({
	...item,
	onClick: () => console.log(`${item.label} 클릭`)
})) as ITabBtnPanel[];

const noop: Dispatch<SetStateAction<number>> = () => {};

const meta = {
	title: 'Molecules/Tabs',
	component: Tabs,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		data: { name: <Required label='data' />, description: '탭 메뉴의 각 데이터', control: false, required: true },
		type: {
			name: <Required label='type' />,
			description: '탭 메뉴의 타입<br />`button`으로 사용할 건지, `a`로 사용할 건지',
			control: 'select',
			options: ['panel', 'link']
		},
		variant: { description: '탭 메뉴의 스타일', control: 'select', options: ['border-top', 'border-bottom', 'round'] },
		activeIndex: { name: <Required label='activeIndex' />, description: '최초 로드 시 active 될 탭의 index', control: 'number', required: true },
		setActiveIndex: {
			name: <Required label='setActiveIndex' />,
			description: '페이지에서 컴포넌트로 내려주는 `setState`',
			control: false,
			required: true
		},
		...ARG_TYPES.SPACING
	},
	args: {
		data: panelData,
		type: 'panel',
		activeIndex: 0,
		setActiveIndex: noop
	}
} satisfies Meta<typeof Tabs>;

export default meta;

const descProps: IDescription = {
	componentName: 'Tabs',
	importData: `import { Tabs } from '@/components/molecules'`,
	code: `<Tabs data={[]} type="link" variant="round" activeIndex={2} setActiveIndex={setActiveIndex} />`,
	description: ''
};

export const Docs = () => {
	return (
		<Base.Box>
			<Description {...descProps} />
		</Base.Box>
	);
};
Docs.parameters = withSourceCode(`<Tabs data={panelData} activeIndex={0} />`);

export const Default: StoryObj<typeof meta> = {
	args: {}
};

export const TypeLink: StoryObj<typeof meta> = {
	args: {
		data: COMMON_DATA as ITabBtnLink[],
		activeIndex: 3
	}
};

export const VariantRound: StoryObj<typeof meta> = {
	args: {
		variant: 'round'
	}
};

export const VariantBorderTop: StoryObj<typeof meta> = {
	args: {
		variant: 'border-top'
	}
};

export const VariantBorderBottom: StoryObj<typeof meta> = {
	args: {
		variant: 'border-bottom'
	}
};
