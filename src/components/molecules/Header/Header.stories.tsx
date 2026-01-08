import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Header from './Header';

const meta = {
	title: 'Molecules/Header',
	component: Header,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		//
	}
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
