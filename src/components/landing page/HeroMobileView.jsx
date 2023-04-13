import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import ColorBgBtn from "../button/ColorBgBtn";
import AvatarGroup from "../avatar/AvatarGroup";
import student1 from "../../assets/images/student-1.png";
import student2 from "../../assets/images/student-2.png";
import student3 from "../../assets/images/student-3.png";

const HeroMobileView = () => {
	const { user } = UserAuth();
	return (
		<section className="hero-mobile my-1rem">
			<div className="hero-mobile-text">
				<h1>boost your performance in jamb, learn the fun way</h1>

				<p>
					Get access to over 15,000 resources to help improve your
					testing and time management skills and having fun while at
					it. Award winning online platform to boost your grades.
				</p>
			</div>
			{
				user ? <Link to="/test"><ColorBgBtn padding="1.1rem 3rem" /></Link> : <Link to="/signup"><ColorBgBtn padding="1.1rem 3rem" /></Link>
			}			
			<div className="avatar-group">
				<AvatarGroup />
				<h2>10K+</h2>
				<p>likes</p>
			</div>

			<div className="image-wrapper">
				<img src={student1} alt="Travis Howard" />
				<img src={student2} alt="Cindy Baker" />
				<img src={student3} alt="Syndey Walker" />

				<div className="testimonial">
					<div className="avatar" />
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

export default HeroMobileView;
