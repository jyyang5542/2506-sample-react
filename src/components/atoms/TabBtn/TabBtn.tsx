// import { Base } from '@/styles/Base.style';
import type { ITabBtn, ITabBtnLink, ITabBtnPanel } from '@/components/molecules/Tabs/tabsType';
import { Style } from './TabBtn.style';

type Props = (ITabBtnLink | ITabBtnPanel) & ITabBtn;

const TabBtn = ({ index, type, variant, theme, setActiveIndex, ...props }: Props) => {
	const { label, icon, disabled, $isActive } = props;
	const isTypeLink = type === 'link';
	const btnProps = {
		icon,
		disabled,
		$isActive,
		variant,
		theme,
		as: isTypeLink ? 'a' : undefined,
		href: isTypeLink && 'href' in props ? props.href : undefined,
		onClick: () => handleOnClick('onClick' in props ? props.onClick : undefined)
	};

	const handleOnClick = (onClick?: () => void): void => {
		setActiveIndex(index);
		onClick?.();
	};

	return (
		<Style.TabBtn {...btnProps}>
			{!!props.icon && <Style.Icon src={props.icon} alt={`${label} 아이콘`} />}
			<span>{label}</span>
		</Style.TabBtn>
	);
};

export default TabBtn;
