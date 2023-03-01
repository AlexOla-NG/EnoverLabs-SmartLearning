import React from "react";
import { ReactComponent as CategoriesIcon } from "../../assets/svg/categories-icon.svg";
import Carousel from "./Carousel";

// TODO: stopped here
// fix icons responsiveness in swipper

const Categories = () => {
	return (
		<section className="categories-wrapper">
			<div className="text-details">
				<div className="header-wrapper">
					<h1>Browse by categories</h1>
					<CategoriesIcon />
				</div>
				<p>Select the subject you will like to study</p>
			</div>
			<Carousel />
		</section>
	);
};

export default Categories;
