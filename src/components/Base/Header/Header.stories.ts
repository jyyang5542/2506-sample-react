import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import Header from './Header';

const meta = {
	title: 'Base/Header',
	component: Header,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' }
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		// primary: true,
		// label: 'Button'
	}
};
