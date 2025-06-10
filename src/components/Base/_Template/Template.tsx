import MockTemplate from '@/mocks/template.mock';
import { Wrap } from './Template.style';

interface Props {}

const Template = ({}: Props) => {
	return (
		<Wrap>
			<MockTemplate />
		</Wrap>
	);
};

export default Template;
