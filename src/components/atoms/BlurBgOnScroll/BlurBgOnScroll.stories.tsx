import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BlurBgOnScroll from './BlurBgOnScroll';

import MOCK_IMG from '@/assets/mocks/tasting_board.jpg';

const meta = {
	title: 'Atoms/BlurBgOnScroll',
	component: BlurBgOnScroll,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		//
	}
} satisfies Meta<typeof BlurBgOnScroll>;

export default meta;

type Story = StoryObj<typeof meta>;

const DESCRIPTION_PROPS: IDescription = {
	name: 'BlurBgOnScroll',
	from: `import { BlurBgOnScroll } from '절대경로'`,
	// from: `import BlurBgOnScroll from '절대경로'`,
	code: `<BlurBgOnScroll />`,
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

const wrapStyle = {
	width: '300px',
	height: '300px'
};

export const Default: Story = {
	args: {
		style: wrapStyle,
		bgImage: MOCK_IMG.src,
		children: <>SAMPLE CONTENT</>
	}
};
