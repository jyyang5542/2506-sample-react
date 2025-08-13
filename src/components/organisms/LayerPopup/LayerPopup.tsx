import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Style } from './LayerPopup.style';

interface ActionButton {
	label: string;
	onClick: () => void;
	variant?: 'primary' | 'secondary';
}

interface LayerPopupProps {
	isActive?: boolean;
	setIsActive?: Dispatch<SetStateAction<boolean>>;
	title?: string;
	content?: ReactNode;
	actions?: ActionButton[];
	showCloseButton?: boolean;
	variant?: 'dialog' | 'bottomSheet' | 'alert';
	size?: 'sm' | 'md' | 'lg';
}

const LayerPopup = ({
	isActive = false,
	setIsActive,
	title,
	content,
	actions = [],
	showCloseButton = true,
	variant = 'dialog',
	size = 'md'
}: LayerPopupProps) => {
	const handleClose = () => {
		if (setIsActive) setIsActive(false);
	};

	if (!isActive) return null;

	return (
		<Style.Overlay variant={variant} onClick={handleClose}>
			<Style.Wrap variant={variant} size={size} onClick={e => e.stopPropagation()}>
				{showCloseButton && <Style.CloseButton onClick={handleClose}>×</Style.CloseButton>}
				{title && <Style.Title>{title}</Style.Title>}
				{content && <Style.Content>{content}</Style.Content>}
				{actions.length > 0 && (
					<Style.Actions>
						{actions.map((btn, idx) => (
							<Style.Button key={idx} variant={btn.variant || 'primary'} onClick={btn.onClick}>
								{btn.label}
							</Style.Button>
						))}
					</Style.Actions>
				)}
			</Style.Wrap>
		</Style.Overlay>
	);
};

export default LayerPopup;
