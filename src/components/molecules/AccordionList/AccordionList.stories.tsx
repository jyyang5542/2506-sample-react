import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AccordionList from './AccordionList';

const meta = {
	title: 'Molecules/AccordionList',
	component: AccordionList,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		//
	}
} satisfies Meta<typeof AccordionList>;

export default meta;

type Story = StoryObj<typeof meta>;

const descProps: IDescription = {
	componentName: 'AccordionList',
	importData: `import { AccordionList } from '@/components/molecules'`,
	// importData: `import AccordionList from '절대경로'`,
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
Docs.parameters = withSourceCode(`<AccordionList />`);

export const Default: Story = {
	args: {}
};
