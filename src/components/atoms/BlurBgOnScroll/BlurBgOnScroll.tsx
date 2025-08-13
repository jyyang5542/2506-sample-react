import { useBlurOnScroll } from '@/hooks';
import { CSSProperties, ReactNode } from 'react';
import { Style } from './BlurBgOnScroll.style';

interface Props {
	maxBlur?: number;
	bgImage?: string;
	bgColor?: string;
	style?: CSSProperties;
	children?: string | ReactNode;
}

const BlurBgOnScroll = ({ maxBlur, bgImage, bgColor, style, children }: Props) => {
	const ref = useBlurOnScroll({ maxBlur: maxBlur });
	return (
		<Style.Wrap $bgImage={bgImage} $bgColor={bgColor} style={style}>
			<Style.Content ref={ref}>{children}</Style.Content>
		</Style.Wrap>
	);
};

export default BlurBgOnScroll;
