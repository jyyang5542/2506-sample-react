import type { TChildren } from '@/types';

export interface IDescription {
	componentName: string;
	importData: string;
	code: string;
	description?: TChildren;
}
