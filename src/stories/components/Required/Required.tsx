interface Props {
	label?: string;
}

const Required = ({ label }: Props) => {
	const requiredStyle = {
		color: 'rgb(255, 68, 0)',
		fontFamily:
			'ui-monospace, Menlo, Monaco, "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Droid Sans Mono", "Courier New", monospace',
		cursor: 'help',
		fontWeight: 300
	};

	return (
		<>
			{label}
			<span style={requiredStyle}>*</span>
		</>
	);
};

export default Required;
