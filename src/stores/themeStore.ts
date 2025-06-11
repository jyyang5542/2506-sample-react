import type { TTheme } from '@/types';
import Cookies from 'js-cookie';
import { create } from 'zustand';

// 쿠키 키
const THEME_COOKIE_KEY = 'app-theme-mode';

interface ThemeState {
	themeMode: TTheme;
	isLoaded: boolean;
	toggleTheme: () => void;
	setTheme: (mode: TTheme) => void;
	initializeTheme: () => void;
}

const useThemeStore = create<ThemeState>((set, get) => ({
	themeMode: 'light',
	isLoaded: false,

	toggleTheme: () =>
		set(state => {
			const newMode = state.themeMode === 'light' ? 'dark' : 'light';
			if (typeof window !== 'undefined') {
				Cookies.set(THEME_COOKIE_KEY, newMode, { expires: 365 }); // 1년 유효
			}
			return { themeMode: newMode };
		}),

	setTheme: (mode: TTheme) =>
		set(() => {
			if (typeof window !== 'undefined') {
				Cookies.set(THEME_COOKIE_KEY, mode, { expires: 365 }); // 1년 유효
			}
			return { themeMode: mode };
		}),

	initializeTheme: () => {
		if (typeof window !== 'undefined' && !get().isLoaded) {
			const storedTheme = Cookies.get(THEME_COOKIE_KEY) as TTheme;
			let initialMode: TTheme;

			if (storedTheme) {
				initialMode = storedTheme;
			} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				initialMode = 'dark';
			} else {
				initialMode = 'light';
			}

			set({ themeMode: initialMode, isLoaded: true });
		}
	}
}));

export default useThemeStore;
