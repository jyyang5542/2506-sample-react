import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CodeLine from './CodeLine';

const meta = {
	title: 'Base/CodeLine',
	component: CodeLine,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		//
	}
} satisfies Meta<typeof CodeLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: `<CodeLine>My Code</CodeLine>`
	}
};
