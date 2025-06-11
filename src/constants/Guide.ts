type TDepth = [string] | [string, string] | [string, string, string] | [string, string, string, string] | [string, string, string, string, string];

interface IGuideList {
	pageName: string;
	dir: string;
	depth: TDepth;
	date: string;
	memo: string;
}

interface IGuideData {
	category: string;
	list: IGuideList[];
}

export const GuideList: IGuideData[] = [
	{
		category: '메인',
		list: [
			{ pageName: 'Main', dir: '/', depth: ['메인'], date: '2025-01-01', memo: '' },
			{ pageName: '{페이지명}', dir: '/', depth: [''], date: '', memo: '' }
		]
	},
	{
		category: '{카테고리}',
		list: [
			{ pageName: '{페이지명}', dir: '/', depth: [''], date: '', memo: '' },
			{ pageName: '{페이지명}', dir: '/', depth: [''], date: '', memo: '' }
		]
	}
];
