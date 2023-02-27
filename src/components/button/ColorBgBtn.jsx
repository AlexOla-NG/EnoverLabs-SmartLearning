import React from "react";
import { motion } from "framer-motion";

// NOTE: pass borderRadius & padding values when using ColorBgBtn in signup/login pages

// TODO: 🐛bugfix
// text position shifts after hover effect is applied. this behaviour is observed in the HeroDesktopView component
// button does not render value prop. Is it because it's wrapped in a framer component?
// plzz fix

const ColorBgBtn = (props) => {
	const { borderRadius, padding, text } = props;

	return (
		<motion.button
			className="btn color-btn"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: "spring", stiffness: 500 }}
			style={{ borderRadius: borderRadius, padding: padding }}
			// value={text}/>
		>
			{text}
		</motion.button>
	);
};

export default ColorBgBtn;

ColorBgBtn.defaultProps = {
	borderRadius: "20px",
	padding: "11px 28px",
	text: "get started",
};
