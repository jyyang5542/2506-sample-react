import type { tTheme } from '@/types';
import { create } from 'zustand';

// 로컬 스토리지 키
const THEME_STORAGE_KEY = 'app-theme-mode';

// 로컬 스토리지에서 초기 테마 로드
const getInitialThemeMode = (): tTheme => {
	if (typeof window !== 'undefined') {
		const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as tTheme;
		if (storedTheme) {
			return storedTheme;
		}
		// 시스템 설정에 따른 기본 테마
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
	}
	return 'light'; // 기본값은 'light'
};

interface ThemeState {
	themeMode: tTheme;
	toggleTheme: () => void;
	setTheme: (mode: tTheme) => void;
}

const useThemeStore = create<ThemeState>(set => ({
	themeMode: getInitialThemeMode(), // 초기 테마 설정
	toggleTheme: () =>
		set(state => {
			const newMode = state.themeMode === 'light' ? 'dark' : 'light';
			if (typeof window !== 'undefined') {
				localStorage.setItem(THEME_STORAGE_KEY, newMode);
			}
			return { themeMode: newMode };
		}),
	setTheme: (mode: tTheme) =>
		set(() => {
			if (typeof window !== 'undefined') {
				localStorage.setItem(THEME_STORAGE_KEY, mode);
			}
			return { themeMode: mode };
		})
}));

export default useThemeStore;
