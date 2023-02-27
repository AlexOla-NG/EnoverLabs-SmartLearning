import React from "react";
import sampleImage from "../../assets/images/image 5.png";

const ImageText = (props) => {
	const { image, title } = props;
	return (
		<div className="image-text-wrapper">
			<img src={image} alt={title} />
			<p>{title}</p>
		</div>
	);
};

export default ImageText;

ImageText.defaultProps = {
	image: sampleImage,
	title: "ekene nduka",
};
