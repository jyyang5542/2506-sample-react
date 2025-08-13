const formatNumber = (number: number | string): string => {
	const n = typeof number === 'string' ? parseFloat(number) : number;
	if (isNaN(n)) return '';
	return n.toLocaleString();
};

export default formatNumber;
