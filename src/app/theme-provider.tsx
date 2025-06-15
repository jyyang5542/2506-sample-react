'use client';

import GlobalStyle from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles/theme';
import { useEffect, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [isDark, setIsDark] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const saved = localStorage.getItem('theme');
		if (saved === 'dark') setIsDark(true);
		else if (saved === 'light') setIsDark(false);
		else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			setIsDark(prefersDark);
		}
		setMounted(true);
	}, []);

	useEffect(() => {
		if (mounted) {
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		}
	}, [isDark, mounted]);

	if (!mounted) return null;

	const theme = isDark ? darkTheme : lightTheme;

	return (
		<StyledProvider theme={theme}>
			<GlobalStyle />
			<button style={{ position: 'fixed', top: 16, right: 16, zIndex: 999 }} onClick={() => setIsDark(prev => !prev)}>
				{isDark ? '🌞 Light' : '🌙 Dark'}
			</button>
			{children}
		</StyledProvider>
	);
}
