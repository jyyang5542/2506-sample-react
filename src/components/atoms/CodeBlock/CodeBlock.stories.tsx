import { CodeBlock } from '@/components/atoms';
import { Languages } from '@/stories/constants/syntaxHighlighter';
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
