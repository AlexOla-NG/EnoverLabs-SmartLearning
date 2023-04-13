import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import ColorBgBtn from "../button/ColorBgBtn";
import AvatarGroup from "../avatar/AvatarGroup";
import student1 from "../../assets/images/student-1.png";
import student2 from "../../assets/images/student-2.png";
import student3 from "../../assets/images/student-3.png";

// TODO: 🧹chore
// find a way to improve the picture quality of all images
// it looks blurry

const HeroDesktopView = () => {
	const { user } = UserAuth();
	return (
		<section className="hero-desktop my-1rem">
			<div className="hero-desktop-text">
				<h1>boost your performance in jamb, learn the fun way</h1>

				<p>
					Get access to over 15,000 resources to help improve your
					testing and time management skills and having fun while at
					it. Award winning online platform to boost your grades.
				</p>
				{
					user ? <Link to="/take-a-test"><ColorBgBtn padding="1.1rem 3rem" /></Link> : <Link to="/signup"><ColorBgBtn padding="1.1rem 3rem" /></Link>
				}
				<div className="avatar-group">
					<AvatarGroup />
					<h2>10K+</h2>
					<p>likes</p>
				</div>
			</div>

			<div className="image-wrapper">
				<div className="image image-1">
					<img src={student1} alt="Travis Howard" />
				</div>
				<div className="image image-2">
					<img src={student2} alt="Cindy Baker" />
				</div>
				<div className="image image-2">
					<img src={student3} alt="Syndey Walker" />
				</div>

				<div className="testimonial">
					<div className="text-wrapper">
						<h5>sophia olumide</h5>
						<p>
							I just took a test in use of <br /> English
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroDesktopView;
