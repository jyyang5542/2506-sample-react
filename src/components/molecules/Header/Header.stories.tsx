import Description, { type IDescription } from '@/stories/components/Description';
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

export const Default: Story = {
	args: {}
};
