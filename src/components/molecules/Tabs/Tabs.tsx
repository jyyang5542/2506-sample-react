import { TabBtn } from '@/components/atoms';
import useThemeStore from '@/stores/themeStore';
import { Style } from './Tabs.style';
import type { ITypeLink, ITypePanel } from './Tabs.types';

type Props = ITypePanel | ITypeLink;

const Tabs = (props: Props) => {
	const { themeMode } = useThemeStore();
	const { data, type = 'panel', variant = 'border-top', activeIndex = 0, setActiveIndex, px, pl, pr, py, pt, pb, mx, ml, mr, my, mt, mb } = props;

	const commonProps = {
		theme: themeMode,
		type,
		variant,
		setActiveIndex,
		px,
		pl,
		pr,
		py,
		pt,
		pb,
		mx,
		ml,
		mr,
		my,
		mt,
		mb
	};

	return (
		<Style.Wrap>
			<Style.Tab variant={variant}>
				{data.map((item, idx) => {
					const itemProps = {
						index: idx,
						...commonProps,
						...item,
						$isActive: activeIndex === idx
					};
					return <TabBtn key={`tab-${idx}-${item.label}`} {...itemProps} />;
				})}
			</Style.Tab>
		</Style.Wrap>
	);
};

export default Tabs;
