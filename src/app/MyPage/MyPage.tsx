'use client';

import { useThemeStore } from '@/store/useThemeStore';
import { Style } from './MyPage.style';

interface Props {}

const MyPage = ({}: Props) => {
	const { isDark, toggleTheme } = useThemeStore();

	return (
		<Style.Wrap>
			<h1>My Page</h1>
			<br />
			<button onClick={toggleTheme}>{isDark ? '🌞 Light' : '🌙 Dark'}</button>
		</Style.Wrap>
	);
};

export default MyPage;
