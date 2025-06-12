import { CodeBlock, CodeLine } from '@/components/atoms';
import { Base } from '@/styles/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const COMPONENT_CODE = `import { Style } from './컴포넌트명.style';

interface Props {}

const 컴포넌트명 = ({}: Props) => {
		return <></>;
};`;

const Description = () => {
	const CODE = `/* 기본 */
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
</CodeBlock>`;

	return (
		<div>
			<h1>CodeBlock</h1>
			<p>
				<CodeLine>SyntaxHighlighter</CodeLine>를 사용해 코드블럭을 보여줄 수 있는 컴포넌트입니다.
				<br />
				<br />
				<CodeLine>{`import { CodeBlock } from '@/components/Base';`}</CodeLine> 한 뒤 다음과 같이 사용합니다.
			</p>
			<CodeBlock>{CODE}</CodeBlock>
		</div>
	);
};

const meta = {
	title: 'Base/CodeBlock',
	component: CodeBlock,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		children: { control: false }
	},
	args: {
		children: COMPONENT_CODE
	}
} satisfies Meta<typeof CodeBlock>;

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
	args: {}
};

export const Language: Story = {
	args: {
		language: 'javascript'
	}
};

export const ShowLineNumbers: Story = {
	args: {
		showLineNumbers: true
	}
};
