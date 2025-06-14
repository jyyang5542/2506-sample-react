import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import { withSourceCode } from '@/stories/utils';
import { Base } from '@/styles/Base/Base.style';
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

const DESCRIPTION_PROPS: IDescription = {
	name: '',
	from: '',
	code: '',
	description: ''
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
Docs.parameters = withSourceCode(`<Header />`);

export const Default: Story = {
	args: {}
};
