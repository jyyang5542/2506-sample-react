export const COLORS = {
	white: '#FFFFFF',
	black: '#000000',
	gray1: '#111111',
	gray2: '#222222',
	gray3: '#333333',
	gray4: '#444444',
	gray5: '#555555',
	gray6: '#666666',
	gray7: '#777777',
	gray8: '#888888',
	gray9: '#999999',
	grayA: '#aaaaaa',
	grayB: '#bbbbbb',
	grayC: '#cccccc',
	grayD: '#dddddd',
	grayE: '#eeeeee',
	transparent: 'transparent'
};

export const hexToRgba = (hex: string, alpha: number): string => {
	hex = hex.replace(/^#/, '');

	if (hex.length === 3) {
		hex = hex
			.split('')
			.map(char => char + char)
			.join('');
	}

	if (hex.length !== 6) {
		throw new Error(`Invalid hex color: ${hex}`);
	}

	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
