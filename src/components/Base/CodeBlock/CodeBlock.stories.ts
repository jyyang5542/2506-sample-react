import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import CodeBlock from './CodeBlock';

const meta = {
	title: 'Base/CodeBlock',
	component: CodeBlock,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {},
	args: {}
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

const CODE_SAMPLE = `'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
	code: string;
}

const CodeBlock = ({ code }: Props) => {
	return (
		<SyntaxHighlighter language={'javascript'} style={oneLight}>
			{code}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;`;

export const Default: Story = {
	args: {
		children: CODE_SAMPLE
	}
};
