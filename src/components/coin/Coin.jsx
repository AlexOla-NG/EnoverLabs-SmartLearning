import React from "react";
import { ReactComponent as CoinIcon } from "../../assets/svg/coin-icon.svg";

const Coin = (props) => {
	const { value } = props;
	return (
		<div className="coin">
			<p>{value}</p>
			<CoinIcon />
		</div>
	);
};

export default Coin;

Coin.defaultProps = {
	value: 20,
};
