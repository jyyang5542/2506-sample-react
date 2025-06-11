'use client';

import useThemeStore from '@/stores/themeStore';
import { Base } from '@/styles/Base.style';

interface Props {}

const Main = ({}: Props) => {
	const { themeMode, toggleTheme } = useThemeStore();
	return (
		<Base.Box>
			메인<button onClick={toggleTheme}>{themeMode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}</button>
		</Base.Box>
	);
};

export default Main;
