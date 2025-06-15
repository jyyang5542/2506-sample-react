import { SECTION } from '@/constants/routes';
import { TChildren } from '@/types/common.types';

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

// prettier-ignore
export const GUIDE_LIST: IGuideData[] = [
	{
		category: '예시',
		list: [
			{ pageName: '{페이지명}', dir: `${SECTION.CATEGORY}/{페이지명}`, depth: [''], date: 'yy-mm-dd', memo: (<Memo></Memo>) },
			{ pageName: '{페이지명}', dir: `${SECTION.CATEGORY}/{페이지명}`, depth: [''], date: 'yy-mm-dd', memo: (<Memo><Update text='[yy-mm-dd] 업데이트' /></Memo>) },
			{ pageName: '{페이지명}', dir: `${SECTION.CATEGORY}/{페이지명}`, depth: [''], date: 'yy-mm-dd', memo: (<Memo><Update text='[yy-mm-dd] 업데이트' color="red" /></Memo>) },
			{ pageName: '{페이지명}', dir: `${SECTION.CATEGORY}/{페이지명}`, depth: [''], date: 'yy-mm-dd', memo: (<Memo><Update text='[yy-mm-dd] 업데이트' color="blue" /></Memo>) },
		]
	},
	{
		category: '메인',
		list: [
			{ pageName: 'Home', dir: `${SECTION.DEFAULT}`, depth: ['홈'], date: '', memo: (<Memo></Memo>) },
			{ pageName: 'Main', dir: `${SECTION.MAIN}`, depth: ['메인'], date: '', memo: (<Memo></Memo>) },
		]
	},
] as const;
