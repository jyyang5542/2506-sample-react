import { useEffect, useState } from 'react';

const useToggleTheme = () => {
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

	const toggleTheme = () => {
		setIsDark(prev => !prev);
	};

	return { isDark, toggleTheme, mounted };
};

export default useToggleTheme;
