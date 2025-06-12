import { CodeBlock, CodeLine } from '@/components/atoms';
import { Base } from '@/styles/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const Description = () => {
	const CODE = `/* 기본 div 태그 상태 */
<Base.Text>
  // 
</Base.Text>

/* p 태그로 변경, color: #000000, 2줄 이상 말줄임 */
<Base.Text as="p" color={COLORS.black} ellipsis={2}>
  // 
</Base.Text>

/* span 태그로 변경 */
<Base.Text as="span">
  // 
</Base.Text>`;

	return (
		<div>
			<h1>Base.Text</h1>
			<p>
				다양한 텍스트 속성을 Props로 간단하게 넘길 수 있는 블록 컴포넌트입니다.
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
	title: 'Base/Base.Text',
	component: Base.Text,
	decorators: [
		() => (
			<Base.Box>
				<Description />
			</Base.Box>
		)
	],
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		children: { description: 'Base.Text 내부에 들어가는 내용', control: false },
		color: { description: '`#000000`, `#FFFFFF` 등', control: false },
		fontFamily: { description: '"Pretendard 등"', control: false },
		fontSize: { control: 'number' },
		fontWeight: { control: 'number' },
		opacity: { description: '0부터 1 사이의 소숫점 숫자', control: 'number' },
		lineHeight: { description: '', control: false },
		ellipsis: { description: '몇 줄 이상부터 말줄임(...) 처리 하는지<br />기본값은 설정되어 있지 않습니다.', control: 'number' }
	},
	args: {
		children: 'This is My Text'
	}
} satisfies Meta<typeof Base.Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
