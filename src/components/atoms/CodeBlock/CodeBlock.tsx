'use client';

import { Colors } from '@/constants/colors';
import type { TSyntaxHighlighterLanguage } from '@/stories/constants/syntaxHighlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'styled-components';
import { Style } from './CodeBlock.style';

interface Props {
	children: string;
	language?: TSyntaxHighlighterLanguage;
	showLineNumbers?: boolean;
}

const CodeBlock = ({ children, language = 'javascript', showLineNumbers = false }: Props) => {
	const { theme } = useTheme();
	const codeStyle = theme === 'light' ? oneLight : oneDark;

	return (
		<SyntaxHighlighter
			language={language}
			style={codeStyle}
			showLineNumbers={showLineNumbers}
			customStyle={Style}
			lineNumberStyle={{
				minWidth: '2em',
				marginLeft: '-10px',
				paddingRight: '1.5em',
				fontSize: '0.875rem',
				color: Colors.gray_8
			}}
		>
			{children}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
