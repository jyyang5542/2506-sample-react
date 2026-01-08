import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SubPage from './SubPage';

const meta = {
	title: 'Templates/SubPage',
	component: SubPage,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		//
	}
} satisfies Meta<typeof SubPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
