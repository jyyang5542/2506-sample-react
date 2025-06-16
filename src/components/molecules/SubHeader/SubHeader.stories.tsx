import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SubHeader from './SubHeader';

const meta = {
	title: 'Molecules/SubHeader',
	component: SubHeader,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		title: '페이지명'
	}
} satisfies Meta<typeof SubHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

const DESCRIPTION_PROPS: IDescription = {
	name: 'SubHeader',
	from: `import { SubHeader } from '@/components/molecules'`,
	// from: `import SubHeader from '절대경로'`,
	code: `<SubHeader />`
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

export const NoBack: Story = {
	args: { hasBack: false }
};

export const WithMenu: Story = {
	args: { hasMenu: true }
};
