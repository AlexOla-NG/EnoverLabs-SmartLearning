import { ReactComponent as SubjectIcon } from "../../assets/svg/subjectIcon.svg";

const IconText = (props) => {
	const { icon, text } = props;
	return (
		<div className="icon-text-wrapper">
			<div className="icon-wrapper">{icon}</div>
			<p>{text}</p>
		</div>
	);
};

export default IconText;

IconText.defaultProps = {
	icon: <SubjectIcon />,
	text: "english",
};
