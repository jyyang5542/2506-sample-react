'use client';

import { useEffect, useRef } from 'react';
import { pageModule } from './pageModule';
import type { IPageModule } from './pageModule.types';
import { source } from './sampleSource';

declare global {
	interface Window {
		pageModule: IPageModule;
	}
}

const ExhibitSample = () => {
	useEffect(() => {
		pageModule.init();
		window.pageModule = pageModule;
	}, []);

	// Dev 환경 반영
	const isDev = useRef<boolean>(window.location.hostname === 'localhost');

	useEffect(() => {
		requestAnimationFrame(() => {
			if (isDev.current) {
				const $navigation = document.querySelector('.ssg-voyage-navigation') as HTMLElement;
				if ($navigation) {
					$navigation.style.top = '0';
				}
			}
		});
	}, []);

	return (
		<>
			<div dangerouslySetInnerHTML={{ __html: source }}></div>
		</>
	);
};

export default ExhibitSample;
