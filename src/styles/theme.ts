import { Colors } from '@/constants/colors';
import type { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
	theme: 'light',
	background: Colors.white,
	text: '#000000',
	colors: {
		primary: '#0070f3'
	}
};

export const darkTheme: DefaultTheme = {
	theme: 'dark',
	background: Colors.gray_111,
	text: Colors.white,
	colors: {
		primary: '#79b8ff'
	}
};
