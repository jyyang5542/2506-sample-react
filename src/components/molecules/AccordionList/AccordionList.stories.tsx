import { argTypes } from '@/constants/storybook';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AccordionList from './AccordionList';
import type { IAccordionListItem } from './AccordionList.types';

const ACCORDION_LIST = Array.from({ length: 5 }).map((_, index) => ({
	title: `아코디언 ${index}`,
	contents: `내용 ${index}`
})) as IAccordionListItem[];

const meta = {
	title: 'Molecules/AccordionList',
	component: AccordionList,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		data: { control: false },
		gap: { description: '', control: 'number' },
		collapseOthers: { description: '', control: 'boolean' },
		fontSize: { description: '' },
		activeIndex: { description: '', control: 'number' },
		...argTypes.SPACING
	},
	args: {
		data: ACCORDION_LIST
	}
} satisfies Meta<typeof AccordionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const CollapseOthers: Story = {
	args: { collapseOthers: true }
};

export const Gap: Story = {
	args: { gap: 20 }
};

export const FontSize: Story = {
	args: {
		fontSize: {
			title: 16,
			contents: 16
		}
	}
};

export const ActiveIndex: Story = {
	args: {
		activeIndex: 2
	}
};
