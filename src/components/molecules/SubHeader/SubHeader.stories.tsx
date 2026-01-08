import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SubHeader from './SubHeader';

const meta = {
	title: 'Molecules/SubHeader',
	component: SubHeader,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		title: '페이지명'
	}
} satisfies Meta<typeof SubHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const NoBack: Story = {
	args: { hasBack: false }
};

export const WithMenu: Story = {
	args: { hasMenu: true }
};
