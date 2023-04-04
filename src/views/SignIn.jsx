import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";
import { ReactComponent as SignInIcon } from "../assets/svg/SignInIcon.svg";
import ColorBgBtn from '../components/button/ColorBgBtn';
import { ReactComponent as InstagramIcon } from "../assets/svg/instagram-icon.svg";
import { ReactComponent as FacebookIcon } from "../assets/svg/facebook-icon.svg";
import { ReactComponent as MailIcon } from "../assets/svg/gmail-icon.svg";

const SignIn = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();

	const { logIn } = UserAuth();
	const navigate = useNavigate();

	const handleLogIn = async (e) => {
		e.preventDefault();
		try {
			await logIn(email, password);
			navigate("/")
		} catch (err) {
			console.log(err)
			setError(err);
		}
	}
  return (
	<div className='mainSignInContainer'>
	  <div className='signInImageContainer'>
	  </div>
	  <div className='signInContainer'>
		<div className='signIcon'>
			<h2>Sign In</h2>
			<SignInIcon/>
		</div>

		<form className='form-container' onSubmit={handleLogIn}>
			<div className='form-items'>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
			</div>
			<div className='form-items'>
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password"  onChange={(e)=>setPassword(e.target.value)}/>
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
		<p>Don’t have an account? <Link to="/signup">Sign Up</Link></p>
	  </div>
	</div>
  )
}

export default SignIn


