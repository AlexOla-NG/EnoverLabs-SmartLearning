import React from "react";
import { motion } from "framer-motion";

// NOTE: pass backgroundColor, borderRadius & padding values when using WhiteBgBtn in subscribe component

const WhiteBgBtn = (props) => {
	const { backgroundColor, borderRadius, padding, title } = props;

	return (
		<motion.button
			className="btn white-btn"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: "spring", stiffness: 500 }}
			style={{
				backgroundColor: backgroundColor,
				borderRadius: borderRadius,
				padding: padding,
			}}
		>
			{title}
		</motion.button>
	);
};

export default WhiteBgBtn;

WhiteBgBtn.defaultProps = {
	backgroundColor: "none",
	borderRadius: "20px",
	padding: "11px 28px",
	title: "sign in",
};
