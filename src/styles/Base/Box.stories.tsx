import { CodeLine } from '@/components/atoms';
import { argTypes } from '@/constants/storybook';
import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const DESCRIPTION_PROPS: IDescription = {
	name: 'Base.Box',
	from: `import { Base } from '@/styles/Base/Base.style';`,
	code: `/* 기본 div 태그 상태 */
<Base.Box>
  // 
</Base.Box>

/* p 태그로 변경, padding: 2px 4px 2px 2px;*/
<Base.Box as="p" py={2} px={4}>
  // 
</Base.Box>

/* a 태그로 변경 */
<Base.Box as="a">
  // 
</Base.Box>`,
	description: (
		<>
			여백을 props로 간단하게 줄 수 있는 블록 컴포넌트입니다.
			<br />
			기본 <CodeLine>{`<div />`}</CodeLine>이지만 <CodeLine>as</CodeLine> 속성을 사용해 다른 HTML 태그로 변경도 가능합니다.
		</>
	)
};

const meta = {
	title: 'Base/Base.Box',
	component: Base.Box,
	parameters: {},
	decorators: [
		() => (
			<Base.Box>
				<Description {...DESCRIPTION_PROPS} />
			</Base.Box>
		)
	],
	tags: ['autodocs'],
	argTypes: {
		...argTypes.SPACING
	},
	args: {}
} satisfies Meta<typeof Base.Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
	args: {}
};
Docs.parameters = withSourceCode(`<Base.Box></Base.Box>`);
