import { TabBtn } from '@/components/atoms';
import { useEffect, useState } from 'react';
import { Style } from './Tabs.style';
import type { ITypeLink, ITypePanel } from './Tabs.types';

type Props = ITypePanel | ITypeLink;

const Tabs = ({ data, type = 'panel', variant = 'border-top', activeIndex = 0, setActiveIndex, ...spacingProps }: Props) => {
	const [currentActiveIndex, setCurrentActiveIndex] = useState<number>(activeIndex);

	useEffect(() => {
		setActiveIndex?.(currentActiveIndex);
	}, [currentActiveIndex, setActiveIndex]);

	const commonProps = {
		type,
		variant,
		activeIndex: currentActiveIndex,
		setActiveIndex: setCurrentActiveIndex
	};

	return (
		<Style.Wrap {...spacingProps}>
			<Style.Tab variant={variant}>
				{data.map((item, idx) => {
					const itemProps = {
						index: idx,
						...commonProps,
						...item,
						$isActive: currentActiveIndex === idx
					};
					return <TabBtn key={`tab-${idx}-${item.label}`} {...itemProps} />;
				})}
			</Style.Tab>
		</Style.Wrap>
	);
};

export default Tabs;
