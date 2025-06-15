'use client';

import type { TSyntaxHighlighterLanguage } from '@/stories/constants/syntaxHighlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'styled-components';
import { Style } from './CodeLine.style';

interface Props {
	children: string;
	language?: TSyntaxHighlighterLanguage;
}

const CodeLine = ({ children, language = 'javascript' }: Props) => {
	const { theme } = useTheme();
	const codeStyle = theme === 'light' ? oneLight : oneDark;

	return (
		<SyntaxHighlighter language={language} style={codeStyle} customStyle={Style}>
			{children}
		</SyntaxHighlighter>
	);
};

export default CodeLine;
