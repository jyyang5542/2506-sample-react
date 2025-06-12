'use client';

import StyledComponentsRegistry from '@/libs/registry';
import useThemeStore from '@/stores/themeStore';
import GlobalStyle from '@/styles/Global.style';
import { darkTheme, lightTheme } from '@/styles/theme';
import type { TChildren } from '@/types';
import { useEffect } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

interface Props {
	children: TChildren;
}

const ThemeProvider = ({ children }: Props) => {
	const { themeMode, isLoaded, initializeTheme } = useThemeStore();

	useEffect(() => {
		initializeTheme();
	}, [initializeTheme]);

	if (!isLoaded) return null;

	const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

	return (
		<StyledComponentsRegistry>
			<Provider theme={currentTheme}>
				<GlobalStyle $themeMode={themeMode} />
				{children}
			</Provider>
		</StyledComponentsRegistry>
	);
};

export default ThemeProvider;
