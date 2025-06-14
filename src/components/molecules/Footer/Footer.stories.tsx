import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import { withSourceCode } from '@/stories/utils';
import { Base } from '@/styles/Base.style';
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

const descProps: IDescription = {
	componentName: 'Footer',
	importData: '',
	code: '',
	description: ''
};

export const Docs: Story = {
	decorators: [
		() => (
			<Base.Box>
				<Description {...descProps} />
			</Base.Box>
		)
	],
	args: {}
};
Docs.parameters = withSourceCode(`<Footer />`);

export const Default: Story = {
	args: {}
};
