import { create } from 'zustand';

interface ThemeState {
	isDark: boolean;
	mounted: boolean;
	toggleTheme: () => void;
	setMounted: (value: boolean) => void;
	setIsDark: (value: boolean) => void;
}

export const useThemeStore = create<ThemeState>(set => ({
	isDark: false,
	mounted: false,
	toggleTheme: () =>
		set(state => {
			const newValue = !state.isDark;
			localStorage.setItem('theme', newValue ? 'dark' : 'light');
			return { isDark: newValue };
		}),
	setMounted: value => set({ mounted: value }),
	setIsDark: value => set({ isDark: value })
}));
