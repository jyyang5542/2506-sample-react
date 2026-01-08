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
