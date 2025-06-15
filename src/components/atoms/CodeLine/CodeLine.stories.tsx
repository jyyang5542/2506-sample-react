import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import { Languages } from '@/stories/constants/syntaxHighlighter';
import { withSourceCode } from '@/stories/utils';
import { Base } from '@/styles/Base/Base.style';
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

const DESCRIPTION_PROPS: IDescription = {
	name: 'CodeLine',
	from: `import { CodeLine } from '@/components/atoms'`,
	code: `/* 기본 */
<CodeLine>YOUR_CODE</CodeLine>

/* language 설정*/
<CodeLine language="javascript">YOUR_CODE</CodeLine>`,
	description: (
		<>
			<CodeLine>SyntaxHighlighter</CodeLine>를 사용해 코드라인을 보여줄 수 있는 컴포넌트입니다.
		</>
	)
};

export const Docs: Story = {
	decorators: [
		() => (
			<Base.Box>
				<Description {...DESCRIPTION_PROPS} />
			</Base.Box>
		)
	],
	args: {}
};
Docs.parameters = withSourceCode(`<CodeLine>YOUR_CODE</CodeLine>`);

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
