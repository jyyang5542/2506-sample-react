import { CodeBlock, CodeLine } from '@/components/atoms';
import { Base } from '@/styles/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Footer from './Footer';

const Description = () => {
	const CODE = `<Footer />`;

	return (
		<div>
			<h1>Footer</h1>
			<p>
				설명을 작성하세요
				<br />
				<br />
				<CodeLine>{`import { Footer } from '@/components/molecules'`}</CodeLine> 한 뒤 다음과 같이 사용합니다.
			</p>
			<CodeBlock>{CODE}</CodeBlock>
		</div>
	);
};

const meta = {
	title: 'Molecules/Footer',
	component: Footer,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		//
	}
} satisfies Meta<typeof Footer>;

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
