'use client';

import { useToggleTheme } from '@/hooks';
import GlobalStyle from '@/styles/global';
import { darkTheme, lightTheme } from '@/styles/theme';
import { ThemeProvider as StyledProvider } from 'styled-components';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const { isDark, mounted } = useToggleTheme();

	if (!mounted) return null;

	const theme = isDark ? darkTheme : lightTheme;

	return (
		<StyledProvider theme={theme}>
			<GlobalStyle />
			{/* <button
				style={{ position: 'fixed', top: 16, right: 16, zIndex: 999 }}
				onClick={toggleTheme}
			>
				{isDark ? '🌞 Light' : '🌙 Dark'}
			</button> */}
			{children}
		</StyledProvider>
	);
}
