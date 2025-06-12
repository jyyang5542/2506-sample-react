import { CodeBlock, CodeLine } from '@/components/atoms';
import { Base } from '@/styles/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tabs from './Tabs';

const Description = () => {
	const CODE = `/* 기본 */
<Tabs>
	//
</Tabs>
`;

	return (
		<div>
			<h1>Tabs</h1>
			<p>
				설명을 작성하세요
				<br />
				<br />
				<CodeLine>{`import Tabs from '{경로를 작성하세요}'`}</CodeLine> 한 뒤 다음과 같이 사용합니다.
			</p>
			<CodeBlock>{CODE}</CodeBlock>
		</div>
	);
};

const meta = {
	title: 'Atoms/Tabs',
	component: Tabs,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		data: { description: '탭 메뉴의 각 데이터', control: false }
	},
	args: {
		data: []
	}
} satisfies Meta<typeof Tabs>;

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
