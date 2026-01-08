import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import MainPage from './MainPage';

const meta = {
	title: 'Templates/MainPage',
	component: MainPage,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		//
	}
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
