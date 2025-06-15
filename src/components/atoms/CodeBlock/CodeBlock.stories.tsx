import { CodeBlock, CodeLine } from '@/components/atoms';
import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import { Languages } from '@/stories/constants/syntaxHighlighter';
import { withSourceCode } from '@/stories/utils';
import { Base } from '@/styles/Base/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const COMPONENT_CODE = `import { Style } from './컴포넌트명.style';

interface Props {}

const 컴포넌트명 = ({}: Props) => {
		return <></>;
};`;

const meta = {
	title: 'Atoms/CodeBlock',
	component: CodeBlock,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		children: { control: false },
		language: {
			description: '사용한 코드의 언어',
			control: 'select',
			options: Languages
		},
		showLineNumbers: { control: 'boolean' }
	},
	args: {
		children: COMPONENT_CODE,
		showLineNumbers: false
	}
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

const DESCRIPTION_PROPS: IDescription = {
	name: 'CodeBlock',
	from: `import { CodeBlock } from '@/components/atoms'`,
	code: `/* 기본 */
<CodeBlock>
  // 
</CodeBlock>

/* language 설정*/
<CodeBlock language="javascript">
  // 
</CodeBlock>

/* 라인 넘버 보이기 */
<CodeBlock showLineNumbers>
  // 
</CodeBlock>`,
	description: (
		<>
			<CodeLine>SyntaxHighlighter</CodeLine>를 사용해 코드블럭을 보여줄 수 있는 컴포넌트입니다.
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
Docs.parameters = withSourceCode(`<CodeBlock>YOUR_CODE</CodeBlock>`);

export const Default: Story = {
	args: {}
};

export const Language: Story = {
	args: {
		language: 'python',
		children: `def is_even(n):
    return n % 2 == 0

print(is_even(4))  # True
print(is_even(7))  # False
`
	}
};

export const ShowLineNumbers: Story = {
	args: {
		showLineNumbers: true
	}
};
