/* eslint-disable @typescript-eslint/no-require-imports */
const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true
	// disable: process.env.NODE_ENV === 'development', // 개발 모드에서는 PWA 비활성화 (선택 사항)
});
/* eslint-enable @typescript-eslint/no-require-imports */

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	distDir: 'out',
	compiler: {
		styledComponents: true
	}
};

module.exports = withPWA(nextConfig);
