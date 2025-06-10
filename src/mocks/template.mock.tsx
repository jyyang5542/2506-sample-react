import CodeBlock from '@/components/Base/CodeBlock/CodeBlock';
import CodeLine from '@/components/Base/CodeLine/CodeLine';

const MockTemplate = () => {
	const COMPONENT_CODE = `
  import { Wrap } from './컴포넌트명.style';
  
  interface Props {}
  
  const 컴포넌트명 = ({}: Props) => {
    return (
      // 여기에 작성
    );
  };
  
  export default 컴포넌트명;
  `;

	const STYLE_CODE = `'use client';

import styled from 'styled-components';

export const Wrap = styled.div\`\`;
`;

	const STORYBOOK_CODE = `import type { Meta, StoryObj } from '@storybook/nextjs-vite';
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

	return (
		<div>
			<h1>기본 템플릿</h1>
			<ul>
				<li>
					<CodeLine>@/components/Base/_Template</CodeLine> 경로를 폴더 채로 복제해서 사용합니다.
				</li>
				<li>
					폴더 안에는 <CodeLine>컴포넌트명.tsx</CodeLine>, <CodeLine>컴포넌트명.style.tsx</CodeLine>, <CodeLine>컴포넌트명.stories.tsx</CodeLine> 3개
					파일이 포함되어 있습니다.
				</li>
			</ul>
			<br />

			<h2>컴포넌트명.tsx</h2>
			<CodeBlock>{COMPONENT_CODE}</CodeBlock>
			<br />

			<h2>컴포넌트명.style.tsx</h2>
			<CodeBlock>{STYLE_CODE}</CodeBlock>
			<br />

			<h2>컴포넌트명.stories.tsx</h2>
			<CodeBlock>{STORYBOOK_CODE}</CodeBlock>
		</div>
	);
};

export default MockTemplate;
