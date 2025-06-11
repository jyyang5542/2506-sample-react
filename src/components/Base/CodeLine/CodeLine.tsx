'use client';

import useThemeStore from '@/stores/themeStore';
import type { TSyntaxHighlighterLanguage } from '@/types/syntaxHighlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { customStyle, Style } from './CodeLine.style';

interface Props {
	children: string;
	language?: TSyntaxHighlighterLanguage;
}

const CodeLine = ({ children, language = 'javascript' }: Props) => {
	const { themeMode } = useThemeStore();
	const codeStyle = themeMode === 'light' ? oneLight : oneDark;

	return (
		<Style.Wrap theme={themeMode}>
			<SyntaxHighlighter language={language} style={codeStyle} customStyle={customStyle}>
				{children}
			</SyntaxHighlighter>
		</Style.Wrap>
	);
};

export default CodeLine;
