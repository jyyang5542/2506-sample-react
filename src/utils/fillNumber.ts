const fillNumber = (number: number, max: number): string => {
	if (number < 0) throw new Error('number는 0 이상이어야 합니다.');
	if (max <= 0) throw new Error('max는 0보다 커야 합니다.');

	const digits = Math.floor(Math.log10(max - 1)) + 1;
	return number.toString().padStart(digits, '0');
};

export default fillNumber;
