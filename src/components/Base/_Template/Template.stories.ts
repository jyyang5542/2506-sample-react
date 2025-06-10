import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Template from './Template';

const meta = {
	title: 'Base/기본 템플릿',
	component: Template,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		//
	}
} satisfies Meta<typeof Template>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		//
	}
};
