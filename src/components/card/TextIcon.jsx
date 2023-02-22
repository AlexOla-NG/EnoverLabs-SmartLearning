import React from "react";
import { ReactComponent as BagdeIcon } from "../../assets/svg/badge-icon.svg";

const TextIcon = (props) => {
	const { text, icon } = props;
	return (
		<div className="text-icon-wrapper">
			<p>{text}</p>
			<div className="icon-wrapper">{icon}</div>
		</div>
	);
};

export default TextIcon;

TextIcon.defaultProps = {
	text: "badge",
	icon: <BagdeIcon />,
};
