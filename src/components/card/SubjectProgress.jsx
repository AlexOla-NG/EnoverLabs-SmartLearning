import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import TextIcon from "./TextIcon";
import subjectPreview from "../../assets/images/subjectPreview.png";
import { ReactComponent as BagdeIcon } from "../../assets/svg/badge-icon.svg";
import { ReactComponent as ShareIcon } from "../../assets/svg/share-icon.svg";
import { ReactComponent as CoinIcon } from "../../assets/svg/coin-icon.svg";

const options = [
	{ text: "badge", icon: <BagdeIcon /> },
	{ text: "coins", icon: <CoinIcon /> },
	{ text: "share", icon: <ShareIcon /> },
];

const SubjectProgress = (props) => {
	const { imagePreview, progressValue, topic } = props;
	return (
		<div className="subject-progress">
			<div
				className="image-wrapper"
				style={{ backgroundImage: `url(${imagePreview})` }}
			></div>
			<div className="progress-wrapper">
				<div className="progress">
					<h4>{topic}</h4>
					<Box sx={{ width: "100%" }}>
						<LinearProgress
							variant="determinate"
							value={progressValue}
							sx={{ borderRadius: 4, height: "0.625rem" }}
						/>
					</Box>
				</div>
				<h4>{Math.round(progressValue)}%</h4>
			</div>
			<div className="options-wrapper">
				{options.map((option, i) => {
					return <TextIcon key={i} {...option} />;
				})}
			</div>
		</div>
	);
};

export default SubjectProgress;

SubjectProgress.defaultProps = {
	imagePreview: subjectPreview,
	progressValue: 100,
	topic: "english",
};
