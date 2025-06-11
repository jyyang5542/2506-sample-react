'use client';

import { Colors } from '@/constants/Colors';
import useThemeStore from '@/stores/themeStore';
import type { TSyntaxHighlighterLanguage } from '@/types/syntaxHighlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
	children: string;
	language?: TSyntaxHighlighterLanguage;
	showLineNumbers?: boolean;
}

const CodeBlock = ({ children, language = 'javascript', showLineNumbers = false }: Props) => {
	const { themeMode } = useThemeStore();
	const codeStyle = themeMode === 'light' ? oneLight : oneDark;

	return (
		<SyntaxHighlighter
			language={language}
			style={codeStyle}
			showLineNumbers={showLineNumbers}
			lineNumberStyle={{
				minWidth: '2em',
				marginLeft: '-10px',
				paddingRight: '1.5em',
				fontSize: '0.875rem',
				color: Colors.gray8
			}}
		>
			{children}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
