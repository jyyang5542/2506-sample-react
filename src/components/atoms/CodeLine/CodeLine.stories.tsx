import { Languages } from '@/stories/constants/syntaxHighlighter';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CodeLine from './CodeLine';

const COMPONENT_CODE = `import React from 'react';`;

const meta = {
	title: 'Atoms/CodeLine',
	component: CodeLine,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		children: { control: false },
		language: {
			description: '사용한 코드의 언어',
			control: 'select',
			options: Languages
		}
	},
	args: {
		children: COMPONENT_CODE
	}
} satisfies Meta<typeof CodeLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: `<Base.Box>YOUR_CODE</Base.Box>`
	}
};

export const Language: Story = {
	args: {
		language: 'python',
		children: `squared = [x**2 for x in range(10)]`
	}
};
