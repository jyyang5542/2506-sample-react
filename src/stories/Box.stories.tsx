import { CodeBlock, CodeLine } from '@/components/atoms';
import { ARG_TYPES } from '@/constants/storybook';
import { Base } from '@/styles/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const Description = () => {
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
			<h1>Base.Box</h1>
			<div>
				여백을 props로 간단하게 줄 수 있는 블록 컴포넌트입니다.
				<br />
				기본 <CodeLine>{`<div />`}</CodeLine>이지만 <CodeLine>as</CodeLine> 속성을 사용해 다른 HTML 태그로 변경도 가능합니다.
				<br />
				<br />
				<CodeLine>{`import { Base } from '@/styles/Base.style';`}</CodeLine> 한 뒤 다음과 같이 사용합니다.
			</div>
			<br />
			<CodeBlock>{CODE}</CodeBlock>
		</div>
	);
};

const meta = {
	title: 'Base/Base.Box',
	component: Base.Box,
	parameters: {},
	decorators: [
		() => (
			<Base.Box>
				<Description />
			</Base.Box>
		)
	],
	tags: ['autodocs'],
	argTypes: {
		...ARG_TYPES.SPACING
	},
	args: {}
} satisfies Meta<typeof Base.Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
