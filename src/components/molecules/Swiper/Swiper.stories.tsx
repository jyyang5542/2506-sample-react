import { argTypes } from '@/constants/storybook';
import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base/Base.style';
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

const DESCRIPTION_PROPS: IDescription = {
	name: 'Swiper',
	from: `import { Swiper } from '@/components/molecules'`,
	code: `<Swiper
 slides={[
   <>Slide 1</>,
   <>Slide 2</>,
   <>Slide 3</>
 ]}
/>`
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
