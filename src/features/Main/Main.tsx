'use client';

import useThemeStore from '@/stores/themeStore';
import { Page } from '@/styles/Base.style';

interface Props {}

const Main = ({}: Props) => {
	const { themeMode, toggleTheme } = useThemeStore();
	return (
		<Page>
			메인<button onClick={toggleTheme}>{themeMode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}</button>
		</Page>
	);
};

export default Main;
