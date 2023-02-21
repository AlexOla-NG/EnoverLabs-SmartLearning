import React from "react";
import sampleImage from "../../assets/images/image 5.png";

const ImageText = (props) => {
	const { image, name } = props;
	return (
		<div className="image-text-wrapper">
			<img src={image} alt={name} />
			<p>{name}</p>
		</div>
	);
};

export default ImageText;

ImageText.defaultProps = {
	image: sampleImage,
	name: "ekene nduka",
};
