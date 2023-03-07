import React from "react";
import { ReactComponent as SignInIcon } from "../assets/svg/SignInIcon.svg";
import ColorBgBtn from "../components/button/ColorBgBtn";
import { ReactComponent as InstagramIcon } from "../assets/svg/instagram-icon.svg";
import { ReactComponent as FacebookIcon } from "../assets/svg/facebook-icon.svg";
import { ReactComponent as MailIcon } from "../assets/svg/gmail-icon.svg";

const SignUp = () => {
	return (
		<div className="mainSignUpContainer">
			<div className="signUpImageContainer"></div>
			<div className="signUpContainer">
				<div className="signIcon">
					<h2>Sign Up</h2>
					<SignInIcon />
				</div>
				<form
					className="form-container"
					onClick={(e) => {
						e.preventDefault();
					}}
				>
					<div className="form-items">
						<label htmlFor="username">Username</label>
						<input type="text" name="username" id="username" />
					</div>
					<div className="form-items">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" />
					</div>
					<div className="form-items">
						<label htmlFor="contact">Phone Number</label>
						<input type="text" name="contact" id="contact" />
					</div>
					<div className="form-items">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" />
					</div>
					<div className="form-items">
						<label htmlFor="confirm-password">
							Confirm Password
						</label>
						<input
							type="password"
							name="confirm-password"
							id="confirm-password"
						/>
					</div>
					<div>
						<ColorBgBtn text="Sign Up" borderRadius="10px" />
					</div>
				</form>
				<div className="separator">OR</div>
				<div className="social-media-icons">
					<MailIcon />
					<FacebookIcon />
					<InstagramIcon />
				</div>
				<p>
					Already have an account? <a href="">Sign In</a>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
