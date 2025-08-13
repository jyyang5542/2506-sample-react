'use client';

import { BlurOnScroll } from '@/components/atoms';

import MOCK_IMG from '@/assets/mocks/tasting_board.jpg';

export default function Home() {
	return (
		<>
			{Array.from({ length: 5 }).map((_, idx) => (
				<BlurOnScroll key={`blur-test-${idx}`} bgImage={MOCK_IMG.src} style={{ width: '360px', height: '500px' }}>
					TEST {idx}
				</BlurOnScroll>
			))}
		</>
	);
}
