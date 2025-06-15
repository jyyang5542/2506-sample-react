import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Accordion from './Accordion';

const meta = {
	title: 'Atoms/Accordion',
	component: Accordion,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		opened: { description: '최초 랜더링 시 콘텐츠 노출 여부', control: 'boolean' },
		title: { control: false },
		contents: { control: false }
	},
	args: {
		title: '아코디언 제목입니다.',
		contents: '아코디언 콘텐츠입니다.',
		opened: false
	}
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

const DESCRIPTION_PROPS: IDescription = {
	name: 'Accordion',
	from: `import { Accordion } from '@/components/atoms'`,
	code: `<Accordion title="아코디언 제목입니다." contents="아코디언 콘텐츠입니다." opened />`
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

export const Opened: Story = {
	args: {
		opened: true
	}
};
