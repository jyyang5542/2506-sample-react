import type { TTheme } from '@/types/common.types';
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		theme: TTheme;
		background: string;
		text: string;
		colors: {
			primary: string;
		};
	}
}
