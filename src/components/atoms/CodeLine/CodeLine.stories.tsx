import { CodeBlock, CodeLine } from '@/components/atoms';
import { syntaxHighlighterLanguages } from '@/mocks/syntaxHighlighter.mock';
import { Base } from '@/styles/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const COMPONENT_CODE = `import React from 'react';`;

const Description = () => {
	const CODE = `/* 기본 */
<CodeLine>YOUR_CODE</CodeLine>

/* language 설정*/
<CodeLine language="javascript">YOUR_CODE</CodeLine>`;

	return (
		<div>
			<h1>CodeLine</h1>
			<p>
				<CodeLine>SyntaxHighlighter</CodeLine>를 사용해 코드라인을 보여줄 수 있는 컴포넌트입니다.
				<br />
				<br />
				<CodeLine>{`import { CodeLine } from '@/components/atoms'`}</CodeLine> 한 뒤 다음과 같이 사용합니다.
			</p>
			<CodeBlock>{CODE}</CodeBlock>
		</div>
	);
};

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
			options: syntaxHighlighterLanguages
		}
	},
	args: {
		children: COMPONENT_CODE
	}
} satisfies Meta<typeof CodeLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
	decorators: [
		() => (
			<Base.Box>
				<Description />
			</Base.Box>
		)
	],
	args: {}
};

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
