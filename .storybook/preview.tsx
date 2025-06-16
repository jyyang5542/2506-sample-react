import type { Preview } from '@storybook/nextjs-vite';
import React from 'react';
import ThemeProvider from '../src/app/theme-provider';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},

		options: {
			storySort: {
				order: ['Base', 'Atoms', 'Molecules', ['Header', 'SubHeader', 'Footer', '*'], 'Organisms', 'Templates', ['MainPage', 'SubPage'], '*']
			}
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo'
		}
	},

	decorators: [
		Story => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		)
	]
};

export default preview;
