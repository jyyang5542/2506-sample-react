import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Footer from './Footer';

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

const DESCRIPTION_PROPS: IDescription = {
	name: 'Footer',
	from: `import { Footer } from '절대경로'`,
	// from: `import Footer from '절대경로'`,
	code: `<Footer />`,
	description: `설명을_입력하세요`
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
Docs.parameters = withSourceCode(DESCRIPTION_PROPS.code);

export const Default: Story = {
	args: {}
};
