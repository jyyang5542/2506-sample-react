import { CodeBlock, CodeLine } from '@/components/Base';
import { Base } from '@/styles/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const ArgChildren = () => {
	const CODE = `/* 기본 div 태그 상태 */
<Base.Box>
  // 
</Base.Box>

/* p 태그로 변경, padding: 2px 4px 2px 2px;*/
<Base.Box as="p" py={2} px={4}>
  // 
</Base.Box>

/* a 태그로 변경 */
<Base.Box as="a">
  // 
</Base.Box>`;

	return (
		<div>
			<h1>{`<Base.Box>`}</h1>
			<p>
				여백을 속성으로 간단하게 줄 수 있는 블록 컴포넌트입니다.
				<br />
				기본 <CodeLine>{`<div />`}</CodeLine>이지만 <CodeLine>as</CodeLine> 속성을 사용해 다른 HTML 태그로 변경도 가능합니다.
				<br />
				<br />
				<CodeLine>{`import { Base } from '@/styles/Base.style';`}</CodeLine> 한 뒤 다음과 같이 사용합니다.
			</p>
			<br />
			<CodeBlock>{CODE}</CodeBlock>
		</div>
	);
};

const meta = {
	title: 'Base/Base.Box',
	component: Base.Box,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		children: { description: 'Base.Box 내부에 들어가는 내용', control: false },
		mx: { description: 'margin-left & margin-right', control: 'number' },
		my: { description: 'margin-top & margin-bottom', control: 'number' },
		mt: { description: 'margin-top', control: 'number' },
		mb: { description: 'margin-bottom', control: 'number' },
		ml: { description: 'margin-left', control: 'number' },
		mr: { description: 'margin-right', control: 'number' },
		px: { description: 'padding-left & padding-right', control: 'number' },
		py: { description: 'padding-top & padding-bottom', control: 'number' },
		pt: { description: 'padding-top', control: 'number' },
		pb: { description: 'padding-bottom', control: 'number' },
		pl: { description: 'padding-left', control: 'number' },
		pr: { description: 'padding-right', control: 'number' }
	},
	args: {
		children: <ArgChildren />
	}
} satisfies Meta<typeof Base.Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
