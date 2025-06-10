'use client';

import useThemeStore from '@/stores/themeStore';
import { MainPage } from '@/styles/Base.style';

interface Props {}

const Main = ({}: Props) => {
	const { themeMode, toggleTheme } = useThemeStore();
	return (
		<MainPage>
			메인<button onClick={toggleTheme}>{themeMode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}</button>
		</MainPage>
	);
};

export default Main;
