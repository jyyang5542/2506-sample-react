import { argTypes } from '@/constants/storybook';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Accordion from './Accordion';

const meta = {
	title: 'Atoms/Accordion',
	component: Accordion,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		opened: { description: '최초 랜더링 시 콘텐츠 노출 여부', control: 'boolean' },
		title: { description: '', control: false },
		contents: { description: '', control: false },
		fontSize: { description: '' },
		onToggle: { description: '', control: false },
		...argTypes.SPACING
	},
	args: {
		title: '아코디언 제목입니다.',
		contents: '아코디언 콘텐츠입니다.',
		opened: false
	}
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const Opened: Story = {
	args: {
		opened: true
	}
};

export const FontSize: Story = {
	args: {
		fontSize: {
			title: 16,
			contents: 16
		}
	}
};
