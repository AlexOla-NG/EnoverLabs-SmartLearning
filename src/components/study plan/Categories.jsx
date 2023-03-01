import React from "react";
import { ReactComponent as CategoriesIcon } from "../../assets/svg/categories-icon.svg";

// TODO: stopped here
// add swiper component for subjectIcon carousel

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
		</section>
	);
};

export default Categories;
