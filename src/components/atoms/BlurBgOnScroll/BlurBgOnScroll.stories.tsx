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
