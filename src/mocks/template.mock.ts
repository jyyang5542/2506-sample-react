export const COMPONENT_CODE = `import { Style } from './컴포넌트명.style';

interface Props {}

const 컴포넌트명 = ({}: Props) => {
		return <></>;
};`;

export const STYLE_CODE = `'use client';

import styled from 'styled-components';

export const Story = {
		Wrap: styled.div\`\`
};
`;

export const STORYBOOK_CODE = `import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import 컴포넌트명 from './컴포넌트명';

const meta = {
		title: '스토리북_카테고리/컴포넌트명',
		component: 컴포넌트명,
		parameters: {},
		tags: ['autodocs'],
		argTypes: {
				//
		},
		args: {
				//
		}
} satisfies Meta<typeof 컴포넌트명>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
			//
	}
};
`;
