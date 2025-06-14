import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Accordion from './Accordion';

const meta = {
	title: 'Atoms/Accordion',
	component: Accordion,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		//
	}
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

const descProps: IDescription = {
	componentName: 'Accordion',
	importData: `import { Accordion } from '@/components/atoms'`,
	// importData: `import Accordion from '절대경로'`,
	code: `코드를_입력하세요`,
	description: `설명을_입력하세요`
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
Docs.parameters = withSourceCode(`<Accordion />`);

export const Default: Story = {
	args: {}
};
