import React from "react";
import { ReactComponent as WhiteCircle } from "../../assets/svg/whiteCircle.svg";

const PriceCard = (props) => {
	const { title, subtitle, price, backgroundColor } = props;
	return (
		<div
			className="price-card-wrapper"
			style={{ backgroundColor: backgroundColor }}
		>
			<div>
				<div className="title-wrapper">
					<h3>{title}</h3>
					<h3>{price}</h3>
				</div>
				<p>Charged {subtitle}</p>
			</div>
			<WhiteCircle />
		</div>
	);
};

export default PriceCard;

PriceCard.defaultProps = {
	title: "monthly plan",
	subtitle: "monthly",
	price: "N1000",
	backgroundColor: "hsl(217, 92%, 90%)",
};
