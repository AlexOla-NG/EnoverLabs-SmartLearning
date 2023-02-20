import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import WhiteBgBtn from "../button/WhiteBgBtn";
import ColorBgBtn from "../button/ColorBgBtn";

const navlinks = [
	{
		text: "home",
		link: "/",
	},
	{
		text: "pricing",
		link: "pricing",
	},
	{
		text: "study plan",
		link: "study-plan",
	},
	{
		text: "take a test",
		link: "take-a-test",
	},
];

const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const location = useLocation();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			position="static"
			sx={{ backgroundColor: "#fafafa", boxShadow: "unset" }}
		>
			<Container maxWidth="125rem">
				<Toolbar disableGutters>
					<nav>
						<div className="container">
							<NavLink to="/" className="navbar-title">
								<span>Smart</span>
								<span>Learning</span>
							</NavLink>

							{/* NOTE: navlist for small screen, hide navbar on signup & signin pages */}
							{location.pathname === "/signup" ||
							location.pathname === "/signin" ? null : (
								<Box
									sx={{
										display: { xs: "flex", md: "none" },
									}}
								>
									<IconButton
										size="1.125rem"
										aria-label="user menu"
										aria-controls="menu-appbar"
										aria-haspopup="true"
										onClick={handleOpenNavMenu}
										color="#000000"
									>
										<MenuIcon />
									</IconButton>
									<Menu
										id="menu-appbar"
										anchorEl={anchorElNav}
										anchorOrigin={{
											vertical: "bottom",
											horizontal: "left",
										}}
										keepMounted
										transformOrigin={{
											vertical: "top",
											horizontal: "left",
										}}
										open={Boolean(anchorElNav)}
										onClose={handleCloseNavMenu}
										sx={{
											display: {
												xs: "block",
												md: "none",
											},
										}}
									>
										{navlinks.map((navlink, index) => (
											<MenuItem
												key={index}
												onClick={handleCloseNavMenu}
												sx={{
													textTransform: "capitalize",
												}}
											>
												<NavLink
													to={navlink.link}
													className={({ isActive }) =>
														isActive
															? "navbar-items-active"
															: ""
													}
												>
													{navlink.text}
												</NavLink>
											</MenuItem>
										))}

										{/* NOTE: only show signup & signin buttons on home page */}
										{location.pathname === "/" && (
											<MenuItem>
												<div className="login-wrapper">
													<NavLink
														to="signin"
														onClick={
															handleCloseNavMenu
														}
													>
														<WhiteBgBtn text="sign in" />
													</NavLink>
													<NavLink
														to="signup"
														onClick={
															handleCloseNavMenu
														}
													>
														<ColorBgBtn
															text="sign up"
															padding="0.5rem 1.5rem"
														/>
													</NavLink>
												</div>
											</MenuItem>
										)}
									</Menu>
								</Box>
							)}

							{/* NOTE: navlist for large screen */}
							<Box
								sx={{
									flexGrow: 1,
									display: { xs: "none", md: "flex" },
								}}
							>
								<div className="navbar-items">
									{/* NOTE: hide navbar on signup & signin pages */}
									{location.pathname === "/signup" ||
									location.pathname === "/signin"
										? null
										: navlinks.map((navlink, index) => {
												return (
													<NavLink
														key={index}
														to={navlink.link}
														className={({
															isActive,
														}) =>
															isActive
																? "navbar-items-active"
																: ""
														}
														onClick={
															handleCloseNavMenu
														}
													>
														{navlink.text}
													</NavLink>
												);
										  })}

									{/* NOTE: only show signup & signin buttons on home page */}
									{location.pathname === "/" && (
										<div className="login-wrapper">
											<NavLink
												to="signin"
												onClick={handleCloseNavMenu}
											>
												<WhiteBgBtn text="sign in" />
											</NavLink>
											<NavLink
												to="signup"
												onClick={handleCloseNavMenu}
											>
												<ColorBgBtn
													text="sign up"
													padding="0.5rem 1.5rem"
												/>
											</NavLink>
										</div>
									)}
								</div>
							</Box>
						</div>
					</nav>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
