import { SECTION } from '@/constants/sections';
import { TChildren } from '@/types';

type TDepth = [string] | [string, string] | [string, string, string] | [string, string, string, string] | [string, string, string, string, string];

interface IGuideList {
	pageName: string;
	dir: string;
	depth: TDepth;
	date: string;
	memo: TChildren;
}

interface IGuideData {
	category: string;
	list: IGuideList[];
}

const Memo = ({ children }: { children?: TChildren }) => {
	return <>{children}</>;
};

const Update = ({ text, color }: { text: string; color?: 'blue' | 'red' }) => {
	const style = { fontSize: '0.8em', ...(color && { color }) };
	return <p style={style}>* {text}</p>;
};

export const GUIDE_LIST: IGuideData[] = [
	{
		category: '예시',
		list: [
			{
				pageName: '{페이지명}',
				dir: `${SECTION.CATEGORY}/{페이지명}`,
				depth: [''],
				date: 'yy-mm-dd',
				memo: (
					<Memo>
						<Update text='[yy-mm-dd] 업데이트' />
					</Memo>
				)
			},
			{
				pageName: '{페이지명}',
				dir: `${SECTION.CATEGORY}/{페이지명}`,
				depth: [''],
				date: 'yy-mm-dd',
				memo: (
					<Memo>
						<Update color='red' text='[yy-mm-dd] 업데이트' />
					</Memo>
				)
			},
			{
				pageName: '{페이지명}',
				dir: `${SECTION.CATEGORY}/{페이지명}`,
				depth: [''],
				date: 'yy-mm-dd',
				memo: (
					<Memo>
						<Update color='blue' text='[yy-mm-dd] 업데이트' />
					</Memo>
				)
			}
		]
	},
	{
		category: '메인',
		list: [
			{ pageName: 'Home', dir: `${SECTION.DEFAULT}`, depth: ['홈'], date: '', memo: <Memo></Memo> },
			{ pageName: 'Main', dir: `${SECTION.MAIN}`, depth: ['메인'], date: '', memo: <Memo></Memo> }
		]
	},
	{
		category: '{카테고리}',
		list: [
			{ pageName: '{페이지명}', dir: `${SECTION.CATEGORY}/{페이지명}`, depth: [''], date: '', memo: <Memo></Memo> },
			{ pageName: '{페이지명}', dir: `${SECTION.CATEGORY}/{페이지명}`, depth: [''], date: '', memo: <Memo></Memo> }
		]
	}
] as const;
