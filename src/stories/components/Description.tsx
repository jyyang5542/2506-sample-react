import { CodeBlock, CodeLine } from '@/components/atoms';
import type { TChildren } from '@/types';

export interface IDescription {
	componentName: string;
	importData: string;
	code: string;
	description?: TChildren;
}

const Description = ({ componentName, importData, code, description }: IDescription) => {
	return (
		<div>
			<h1>{componentName}</h1>
			<div>
				{!!description && (
					<>
						description
						<br />
						<br />
					</>
				)}
				<CodeLine>{importData}</CodeLine> 한 뒤 다음과 같이 사용합니다.
			</div>
			<br />
			<CodeBlock>{code}</CodeBlock>
		</div>
	);
};

export default Description;
