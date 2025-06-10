'use client';

import useThemeStore from '@/stores/themeStore';
import type { tSyntaxHighlighterLanguage } from '@/types/syntaxHighlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
	children: string;
	language?: tSyntaxHighlighterLanguage;
}

const CodeLine = ({ children, language = 'javascript' }: Props) => {
	const { themeMode } = useThemeStore();
	const codeStyle = themeMode === 'light' ? oneLight : oneDark;

	return (
		<span
			style={{
				backgroundColor: themeMode === 'light' ? 'rgba(235, 248, 255, 0.7)' : 'rgba(45, 55, 72, 0.7)',
				color: themeMode === 'light' ? '#2D3748' : '#F7FAFC',
				padding: '0.2em 0.4em',
				borderRadius: '3px',
				fontFamily: 'monospace',
				fontSize: '0.9em',
				whiteSpace: 'nowrap'
			}}
		>
			<SyntaxHighlighter
				language={language}
				style={codeStyle}
				customStyle={{
					display: 'inline',
					padding: 0,
					margin: 0,
					background: 'none',
					overflowX: 'visible',
					whiteSpace: 'pre-wrap'
				}}
			>
				{children}
			</SyntaxHighlighter>
		</span>
	);
};

export default CodeLine;
