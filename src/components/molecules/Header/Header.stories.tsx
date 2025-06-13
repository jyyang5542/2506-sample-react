import { CodeBlock, CodeLine } from '@/components/atoms';
import { Base } from '@/styles/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Header from './Header';

const Description = () => {
	const CODE = `<Header />`;

	return (
		<div>
			<h1>Header</h1>
			<div>
				설명을 작성하세요
				<br />
				<br />
				<CodeLine>{`import { Header } from '@/components/molecules'`}</CodeLine> 한 뒤 다음과 같이 사용합니다.
			</div>
			<CodeBlock>{CODE}</CodeBlock>
		</div>
	);
};

const meta = {
	title: 'Molecules/Header',
	component: Header,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		//
	}
} satisfies Meta<typeof Header>;

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
