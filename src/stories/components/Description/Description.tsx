import { CodeBlock, CodeLine } from '@/components/atoms';
import { IDescription } from '@/stories/components/Description/Description.types';

const Description = ({ name, from, code, description }: IDescription) => {
	return (
		<div>
			<h1>{name}</h1>
			<div>
				{!!description && (
					<>
						{description}
						<br />
						<br />
					</>
				)}
				<CodeLine>{from}</CodeLine> 한 뒤, 다음과 같이 사용합니다.
			</div>
			<br />
			<CodeBlock>{code}</CodeBlock>
		</div>
	);
};

export default Description;
