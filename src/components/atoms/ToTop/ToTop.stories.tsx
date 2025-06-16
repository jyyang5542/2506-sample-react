import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ToTop from './ToTop';

const meta = {
	title: 'Atoms/ToTop',
	component: ToTop,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		//
	}
} satisfies Meta<typeof ToTop>;

export default meta;

type Story = StoryObj<typeof meta>;

const DESCRIPTION_PROPS: IDescription = {
	name: 'ToTop',
	from: `import { ToTop } from '절대경로'`,
	// from: `import ToTop from '절대경로'`,
	code: `<ToTop />`,
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
