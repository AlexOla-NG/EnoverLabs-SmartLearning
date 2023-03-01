import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import IconText from "../card/IconText";
import "swiper/css";
import "swiper/css/navigation";

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
	return (
		<>
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
						slidesPerView: 3,
						spaceBetween: 3.65,
					},
					// when window width is >= 640px
					640: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
				}}
				navigation={true}
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
		</>
	);
};

export default Carousel;
