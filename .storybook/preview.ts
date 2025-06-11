import type { Preview } from '@storybook/nextjs-vite';

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
				method: 'alphabetical',
				order: ['Template', 'Base', ['Header', 'Footer', '*'], '*']
			}
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo'
		}
	}
};

export default preview;
