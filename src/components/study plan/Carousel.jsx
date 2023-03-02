import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import IconText from "../card/IconText";
import { ReactComponent as NextIcon } from "../../assets/svg/next-icon.svg";
import { ReactComponent as PrevIcon } from "../../assets/svg/previous-icon.svg";
import "swiper/scss";
import "swiper/scss/navigation";

const subjects = [
	"maths",
	"physics",
	"biology",
	"chemistry",
	"english",
	"geography",
	"economics",
	"commerce",
	"ict",
];

const Carousel = () => {
	const [isSliderStart, setISliderStart] = useState(false);
	const [isSliderEnd, setISliderEnd] = useState(false);

	// STUB: add disabled class to button if slider is at end or beginning
	const handleSliderEvent = (e) => {
		if (e.isEnd) {
			setISliderEnd(true);
		} else {
			setISliderEnd(false);
		}

		if (e.isBeginning) {
			setISliderStart(true);
		} else {
			setISliderStart(false);
		}
	};

	return (
		<div className="swiper-wrapper" style={{ alignItems: "center" }}>
			<PrevIcon
				className={`review-swiper-button-prev ${
					isSliderStart ? "disabled" : ""
				} `}
			/>
			<Swiper
				slidesPerView={5}
				// spaceBetween={10}
				breakpoints={{
					320: {
						slidesPerView: 3,
						spaceBetween: 3.65,
					},
					// when window width is >= 480px
					425: {
						slidesPerView: 4,
						spaceBetween: 3.65,
					},
					// when window width is >= 640px
					640: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
				}}
				navigation={{
					nextEl: ".review-swiper-button-next",
					prevEl: ".review-swiper-button-prev",
				}}
				onActiveIndexChange={handleSliderEvent}
				modules={[Navigation]}
				className="mySwiper"
			>
				{subjects.map((subject, i) => {
					return (
						<SwiperSlide key={i}>
							<IconText title={subject} />
						</SwiperSlide>
					);
				})}
			</Swiper>
			<NextIcon
				className={`review-swiper-button-next ${
					isSliderEnd ? "disabled" : ""
				} `}
			/>
		</div>
	);
};

export default Carousel;
