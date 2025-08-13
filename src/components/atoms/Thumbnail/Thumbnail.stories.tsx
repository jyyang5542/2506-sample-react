import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Thumbnail from './Thumbnail';

import MOCK_IMG from '@/assets/mocks/tasting_board.jpg';
import MOCK_VIDEO from '@/assets/mocks/tasting_board.mp4';

const meta = {
	title: 'Atoms/Thumbnail',
	component: Thumbnail,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		//
	},
	args: {
		//
	}
} satisfies Meta<typeof Thumbnail>;

export default meta;

type Story = StoryObj<typeof meta>;

const DESCRIPTION_PROPS: IDescription = {
	name: 'Thumbnail',
	from: `import { Thumbnail } from '절대경로'`,
	// from: `import Thumbnail from '절대경로'`,
	code: `<Thumbnail />`,
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
	args: {
		src: MOCK_IMG.src
	}
};
Docs.parameters = withSourceCode(DESCRIPTION_PROPS.code);

export const Default: Story = {
	args: {
		src: MOCK_IMG.src
	}
};

export const Image: Story = {
	args: {
		src: MOCK_IMG.src
	}
};

export const Video: Story = {
	args: {
		type: 'video',
		src: MOCK_VIDEO,
		defaultImage: MOCK_IMG.src
	}
};

export const SizingWithWidthAndHeight: Story = {
	args: {
		src: MOCK_IMG.src,
		width: 500,
		height: 500
	}
};

export const SizingWithRatio: Story = {
	args: {
		src: MOCK_IMG.src,
		ratio: '3/4'
	}
};

export const OnError: Story = {
	args: {}
};
