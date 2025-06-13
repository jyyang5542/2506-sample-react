import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Header from './Header';

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

const descProps: IDescription = {
	componentName: '',
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
Docs.parameters = withSourceCode(`<Header />`);

export const Default: Story = {
	args: {}
};
