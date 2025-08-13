import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import LayerPopup from './LayerPopup';

const meta = {
	title: 'Organisms/LayerPopup',
	component: LayerPopup,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		isActive: { control: 'boolean', description: '팝업 열림 상태' },
		title: { control: 'text', description: '팝업 제목' },
		content: { control: 'text', description: '팝업 내용' },
		showCloseButton: { control: 'boolean', description: 'X 버튼 표시 여부' },
		variant: {
			control: { type: 'select', options: ['modal', 'bottomSheet', 'alert'] },
			description: '팝업 종류'
		},
		size: { control: { type: 'select', options: ['sm', 'md', 'lg'] }, description: '팝업 크기' },
		actions: { control: false },
		setIsActive: { table: { disable: true } }
	},
	args: {}
} satisfies Meta<typeof LayerPopup>;

export default meta;

type Story = StoryObj<typeof meta>;

const DESCRIPTION_PROPS: IDescription = {
	name: 'LayerPopup',
	from: `import { LayerPopup } from '절대경로'`,
	code: `<LayerPopup />`,
	description: `LayerPopup 컴포넌트 예제 스토리북입니다. variant, 버튼, 제목, 내용 등을 확인할 수 있습니다.`
};

export const Docs: Story = {
	decorators: [
		() => (
			<Base.Box>
				<Description {...DESCRIPTION_PROPS} />
			</Base.Box>
		)
	],
	args: {}
};
Docs.parameters = withSourceCode(DESCRIPTION_PROPS.code);

export const Dialog: Story = {
	decorators: [
		Story => (
			<Base.Box style={{ width: '100%', minHeight: '600px' }}>
				<Story />
			</Base.Box>
		)
	],
	args: {
		isActive: true,
		title: '타이틀',
		content: '내용',
		showCloseButton: true,
		variant: 'dialog',
		actions: [
			{ label: '취소', onClick: () => alert('취소'), variant: 'secondary' },
			{ label: '확인', onClick: () => alert('확인'), variant: 'primary' }
		]
	}
};

export const BottomSheet: Story = {
	decorators: Dialog.decorators,
	args: {
		isActive: true,
		title: '옵션 선택',
		content: (
			<ul>
				<li>옵션 1</li>
				<li>옵션 2</li>
				<li>옵션 3</li>
			</ul>
		),
		variant: 'bottomSheet',
		actions: [{ label: '확인', onClick: () => alert('확인'), variant: 'primary' }]
	}
};

export const Alert: Story = {
	decorators: Dialog.decorators,
	args: {
		isActive: true,
		content: '저장되었습니다.',
		variant: 'alert',
		showCloseButton: false,
		actions: [{ label: '확인', onClick: () => alert('닫기'), variant: 'primary' }]
	}
};
