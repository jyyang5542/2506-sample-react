import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import Footer from './Footer';

const meta = {
	title: 'Base/Footer',
	component: Footer,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' }
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		// primary: true,
		// label: 'Button'
	}
};
