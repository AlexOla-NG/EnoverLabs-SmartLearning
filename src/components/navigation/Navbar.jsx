import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WhiteBgBtn from "../button/WhiteBgBtn";
import ColorBgBtn from "../button/ColorBgBtn";
import { UserAuth } from "../../context/AuthContext";

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

// TODO: refactor code. it's too messy and not DRY enough
// add hover effect for navlinks. use framer.motion

// TODO: stopped here
// redo navbar
// study plan, take a test & dynamic test page is logo, notification icon, avatar dropdown
// setup drawer

const Navbar = (props) => {
	const { drawerWidth, handleDrawerToggle } = props;
	const [anchorElNav, setAnchorElNav] = useState(null);
	const location = useLocation();
	const { user, logOut } = UserAuth();

	// STUB: open nav menu
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	// STUB: close nav menu
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleLogOut = () => {
		logOut();
	}

	let output;

	if (location.pathname === "/") {
		output = (
			<AppBar
				position="static"
				sx={{ backgroundColor: "#fff", boxShadow: "unset" }}
			>
				<Toolbar disableGutters>
					<nav className="nav">
						<div className="container">
							<NavLink to="/" className="navbar-title">
								<span>Smart</span>
								<span>Learning</span>
							</NavLink>

							{/* NOTE: navlist for small screen*/}
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

									<MenuItem>
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
									</MenuItem>
								</Menu>
							</Box>

							{/* NOTE: navlist for large screen */}
							<Box
								sx={{
									flexGrow: 1,
									display: { xs: "none", md: "flex" },
									justifyContent: "center",
								}}
							>
								<div className="navbar-items">
									<div className="navlinks-wrapper">
										{navlinks.map((navlink, index) => {
											return (
												<NavLink
													key={index}
													to={navlink.link}
													className={({ isActive }) =>
														isActive
															? "navbar-items-active"
															: ""
													}
													onClick={handleCloseNavMenu}
												>
													{navlink.text}
												</NavLink>
											);
										})}
									</div>

									<div className="login-wrapper">
										{
											!user &&
											<>
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
										</>
										}
										
										{
											user && 
											<NavLink
												to="/"
												onClick={handleLogOut}
											>
												<ColorBgBtn
													text="sign out"
													padding="0.5rem 1.5rem"
												/>
											</NavLink>
										}
										
									</div>
								</div>
							</Box>
						</div>
					</nav>
				</Toolbar>
			</AppBar>
		);
	} else if (location.pathname === "/pricing") {
		output = (
			<AppBar
				position="static"
				sx={{ backgroundColor: "#fff", boxShadow: "unset" }}
			>
				<Toolbar disableGutters>
					<nav className="nav">
						<div className="container pricing-nav">
							<NavLink to="/" className="navbar-title">
								<span>Smart</span>
								<span>Learning</span>
							</NavLink>

							{/* NOTE: navlist for small screen*/}
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
								</Menu>
							</Box>

							{/* NOTE: navlist for large screen */}
							<Box
								sx={{
									flexGrow: 1,
									display: { xs: "none", md: "flex" },
									justifyContent: "center",
								}}
							>
								<div className="navbar-items">
									<div className="navlinks-wrapper">
										{navlinks.map((navlink, index) => {
											return (
												<NavLink
													key={index}
													to={navlink.link}
													className={({ isActive }) =>
														isActive
															? "navbar-items-active"
															: ""
													}
													onClick={handleCloseNavMenu}
												>
													{navlink.text}
												</NavLink>
											);
										})}
									</div>
								</div>
							</Box>
						</div>
					</nav>
				</Toolbar>
			</AppBar>
		);
	} else if (
		location.pathname === "/signin" ||
		location.pathname === "/signup"
	) {
		output = (
			<AppBar
				position="static"
				sx={{ backgroundColor: "#fff", boxShadow: "unset" }}
			>
				<Toolbar disableGutters>
					<nav className="nav">
						<div className="container signin-nav">
							<NavLink to="/" className="navbar-title">
								<span>Smart</span>
								<span>Learning</span>
							</NavLink>
						</div>
					</nav>
				</Toolbar>
			</AppBar>
		);
	}
	// else if (
	// 	location.pathname === "/study-plan" ||
	// 	location.pathname === "/take-a-test" ||
	// 	location.pathname === "/take-a-test/:id"
	// ) {
	// 	output = (
	// 		<AppBar
	// 			position="fixed"
	// 			sx={{
	// 				backgroundColor: "#fff",
	// 				boxShadow: "unset",
	// 				width: { sm: `calc(100% - ${drawerWidth}px)` },
	// 				ml: { sm: `${drawerWidth}px` },
	// 			}}
	// 		>
	// 			<Toolbar disableGutters>
	// 				<nav className="nav">
	// 					<div className="container">
	// 						<IconButton
	// 							aria-label="open drawer"
	// 							edge="start"
	// 							onClick={handleDrawerToggle}
	// 							sx={{ display: { sm: "none" }, m: 0, p: 0 }}
	// 						>
	// 							<MenuIcon />
	// 						</IconButton>

	// 						<NavLink to="/" className="navbar-title">
	// 							<span>Smart</span>
	// 							<span>Learning</span>
	// 						</NavLink>
	// 					</div>
	// 				</nav>
	// 			</Toolbar>
	// 		</AppBar>
	// 	);
	// }

	return output;
};
export default Navbar;
