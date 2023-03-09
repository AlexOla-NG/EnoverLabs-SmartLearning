import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
	AppBar,
	Box,
	CssBaseline,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

import TextIcon from "../card/TextIcon";

import { ReactComponent as HomeIcon } from "../../assets/svg/home-icon.svg";
import { ReactComponent as ResourcesIcon } from "../../assets/svg/resources-icon.svg";
import { ReactComponent as TestIcon } from "../../assets/svg/test-icon.svg";

// TODO: stopped here
// transfer PersistentDrawer contents here

const drawerItems = [
	{ text: "dashboard", icon: <HomeIcon /> },
	{ text: "resources", icon: <ResourcesIcon /> },
	{ text: "take a test", icon: <TestIcon /> },
];

const OutletWrapper = ({
	children,
	drawerWidth,
	mobileOpen,
	handleDrawerToggle,
}) => {
	const drawer = (
		<div>
			<Toolbar disableGutters>
				<div onClick={handleDrawerToggle} className="navbar-title">
					<span>Smart</span>
					<span>Learning</span>
				</div>
			</Toolbar>
			<div>
				{drawerItems.map((item, index) => {
					return <TextIcon key={index} {...item} />;
				})}
			</div>
		</div>
	);
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					backgroundColor: "#fff",
					boxShadow: "unset",
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar disableGutters>
					<nav className="nav">
						<div className="container">
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}
								sx={{ mr: 2, display: { sm: "none" } }}
							>
								<MenuIcon />
							</IconButton>
							<NavLink to="/" className="navbar-title">
								<span>Smart</span>
								<span>Learning</span>
							</NavLink>
						</div>
					</nav>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					// variant="temporary"
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					// open
					open={mobileOpen}
					onClose={handleDrawerToggle}
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				<Outlet>{children}</Outlet>
			</Box>
		</Box>
	);
};

export default OutletWrapper;
