import { argTypes } from '@/constants/storybook';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import styled from 'styled-components';
import Swiper from './Swiper';

const Slide = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
`;

const meta = {
	title: 'Molecules/Swiper',
	component: Swiper,
	parameters: {},
	tags: ['autodocs'],
	argTypes: { ...argTypes.SPACING },
	args: {
		slides: Array.from({ length: 3 }, (_, idx) => <Slide key={`slide-${idx}`}>Slide {idx}</Slide>)
	}
} satisfies Meta<typeof Swiper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const SlidesPerView: Story = {
	args: {
		options: { slidesPerView: 2 }
	}
};

export const WithNavigation: Story = {
	args: {
		options: { navigation: true }
	}
};

export const WithPagination: Story = {
	args: {
		options: { pagination: true }
	}
};

export const WithCustomPagination: Story = {
	args: {
		options: { pagination: true },
		customPagination: true
	}
};

export const Autoplay: Story = {
	args: {
		options: { autoplay: { delay: 1000 }, speed: 600, loop: true }
	}
};
