import React from "react";
import subjectPreview from "../../assets/images/subjectPreview.png";
import Coin from "../coin/Coin";
import ColorBgBtn from "../button/ColorBgBtn";

const TestCard = (props) => {
	const { coinValue, imagePreview, time, topic } = props;
	return (
		<div className="test-card-wrapper">
			<div className="details">
				<Coin value={coinValue} />
				<div className="topic-wrapper">
					<h5>{topic}</h5>
					<p>{time} minutes</p>
				</div>
				<ColorBgBtn text="start" padding="0.3rem 2rem" />
			</div>
			<div className="image-wrapper">
				<img src={imagePreview} alt={topic} />
			</div>
		</div>
	);
};

export default TestCard;

TestCard.defaultProps = {
	coinValue: 50,
	imagePreview: subjectPreview,
	time: 30,
	topic: "use of english",
};
