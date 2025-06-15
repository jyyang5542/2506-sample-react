import { CodeLine } from '@/components/atoms';
import { argTypes } from '@/constants/storybook';
import { Description } from '@/stories/components';
import type { IDescription } from '@/stories/components/Description/Description.types';
import withSourceCode from '@/stories/utils/withSourceCode';
import { Base } from '@/styles/Base/Base.style';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const DESCRIPTION_PROPS: IDescription = {
	name: 'Base.Text',
	from: `import { Base } from '@/styles/Base/Base.style';`,
	code: `/* 기본 div 태그 상태 */
<Base.Text>
  // 
</Base.Text>

/* p 태그로 변경, color: #000000, 2줄 이상 말줄임 */
<Base.Text as="p" color={Colors.black} ellipsis={2}>
  // 
</Base.Text>

/* span 태그로 변경 */
<Base.Text as="span">
  // 
</Base.Text>`,
	description: (
		<>
			다양한 텍스트 속성을 Props로 간단하게 넘길 수 있는 블록 컴포넌트입니다.
			<br />
			기본 <CodeLine>{`<div />`}</CodeLine>이지만 <CodeLine>as</CodeLine> 속성을 사용해 다른 HTML 태그로 변경도 가능합니다.
		</>
	)
};

const meta = {
	title: 'Base/Base.Text',
	component: Base.Text,
	decorators: [
		() => (
			<Base.Box>
				<Description {...DESCRIPTION_PROPS} />
			</Base.Box>
		)
	],
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		children: { description: '`Base.Text` 내부에 들어가는 내용', control: false },
		...argTypes.TEXT
	},
	args: {
		children: 'This is My Text'
	}
} satisfies Meta<typeof Base.Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
	args: {}
};
Docs.parameters = withSourceCode(`<Base.Text></Base.Text>`);
