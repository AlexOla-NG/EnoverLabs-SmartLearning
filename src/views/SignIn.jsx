import React from 'react'
import { ReactComponent as SignInIcon } from "../assets/svg/SignInIcon.svg";
import ColorBgBtn from '../components/button/ColorBgBtn';
import { ReactComponent as InstagramIcon } from "../assets/svg/instagram-icon.svg";
import { ReactComponent as FacebookIcon } from "../assets/svg/facebook-icon.svg";
import { ReactComponent as MailIcon } from "../assets/svg/gmail-icon.svg";


const SignIn = () => {
  return (
	<div className='mainSignInContainer'>
	  <div className='signInImageContainer'>
	  </div>
	  <div className='signInContainer'>
		<div className='signIcon'>
			<h2>Sign In</h2>
			<SignInIcon/>
		</div>
		<form className='form-container'>
			<div className='form-items'>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email"/>
			</div>
			<div className='form-items'>
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password"/>
			</div>
			<div className="remember-div">
				<div>
					<input type="checkbox" name="" id="" />
					<span>Remember Me</span>
				</div>
				<p>Forgot Password?</p>
			</div>
			<div>
				<ColorBgBtn text = "Sign In" borderRadius = "10px"/>
			</div>
		</form>
		<div class="separator">OR</div>
		<div className='social-media-icons'>
			<MailIcon />
			<FacebookIcon />
			<InstagramIcon />
		</div>
		<p>Don’t have an account? <a href="">Sign Up</a></p>
	  </div>
	</div>
  )
}

export default SignIn


