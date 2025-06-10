'use client';

import StyledComponentsRegistry from '@/libs/registry';
import useThemeStore from '@/stores/themeStore';
import GlobalStyle from '@/styles/Global.style';
import { darkTheme, lightTheme } from '@/styles/theme';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'Next App',
	description: 'Next 프로젝트 템플릿'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { themeMode } = useThemeStore();
	const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

	return (
		<html lang='ko'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<StyledComponentsRegistry>
					<ThemeProvider theme={currentTheme}>
						<GlobalStyle $themeMode={themeMode} />
						{children}
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
