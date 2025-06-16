'use client';

import { useThemeStore } from '@/store/useThemeStore';
import GlobalStyle from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles/theme';
import { useEffect } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const { isDark, mounted, setMounted, setIsDark } = useThemeStore();

	useEffect(() => {
		const saved = localStorage.getItem('theme');
		if (saved === 'dark') setIsDark(true);
		else if (saved === 'light') setIsDark(false);
		else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			setIsDark(prefersDark);
		}
		setMounted(true);
	}, [setIsDark, setMounted]);

	if (!mounted) return null;

	const theme = isDark ? darkTheme : lightTheme;

	return (
		<StyledProvider theme={theme}>
			<GlobalStyle />
			{children}
		</StyledProvider>
	);
}
