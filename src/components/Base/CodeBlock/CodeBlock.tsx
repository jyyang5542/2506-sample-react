'use client';

import useThemeStore from '@/stores/themeStore';
import type { TSyntaxHighlighterLanguage } from '@/types/syntaxHighlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
	children: string;
	language?: TSyntaxHighlighterLanguage;
}

const CodeBlock = ({ children, language = 'javascript' }: Props) => {
	const { themeMode } = useThemeStore();
	const codeStyle = themeMode === 'light' ? oneLight : oneDark;

	return (
		<SyntaxHighlighter language={language} style={codeStyle}>
			{children}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
