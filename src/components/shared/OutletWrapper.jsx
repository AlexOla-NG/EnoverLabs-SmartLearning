import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import {
	Box,
	CssBaseline,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Tooltip,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import AccountMenu from "../navigation/AccountMenu";

import { ReactComponent as SearchIcon } from "../../assets/svg/search-icon.svg";
import { ReactComponent as NotificationIcon } from "../../assets/svg/notifications-icon.svg";
import { ReactComponent as ChevronDownIcon } from "../../assets/svg/chevron-down-icon.svg";
import AvatarIcon from "../../assets/images/avatar.png";
import { ReactComponent as HomeIcon } from "../../assets/svg/home-icon.svg";
import { ReactComponent as ResourcesIcon } from "../../assets/svg/resources-icon.svg";
import { ReactComponent as TestIcon } from "../../assets/svg/test-icon.svg";

// TODO: stopped here
// style take-a-test for tablet, desktop screen

// STUB: define drawerwidth & items
const drawerWidth = 240;

const drawerItems = [
	{ text: "dashboard", icon: <HomeIcon /> },
	{ text: "resources", icon: <ResourcesIcon /> },
	{ text: "take a test", icon: <TestIcon /> },
];

// STUB: setup custom components for main, appbar & drawerheader
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: "24px 0 24px",
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const TestMain = styled("main", {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	flexGrow: 1,
	padding: "24px 0 24px",
	transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: `-${drawerWidth}px`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: "auto",
	},
	...(open && {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}),
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	// borderBottom: "0.5px solid #959595",
	padding: "1.2rem 0.87rem",
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "space-between",
}));

const OutletWrapper = ({ children }) => {
	const location = useLocation();
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const [anchorEl, setAnchorEl] = useState(null);
	const openMenu = Boolean(anchorEl);

	// STUB: controls for toggling menu popup
	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	// STUB: controls for toggling drawer
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	// STUB: apply selected class to ListItem
	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	const drawer = (
		<List>
			{drawerItems.map((item, index) => {
				const { text, icon } = item;
				return (
					<ListItemButton
						key={index}
						selected={selectedIndex === index}
						onClick={(event) => handleListItemClick(event, index)}
					>
						<ListItemIcon>{icon}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItemButton>
				);
			})}
		</List>
	);

	return (
		<Box sx={{ display: "flex" }} className="outlet-wrapper">
			<CssBaseline />
			<AppBar
				position="fixed"
				open={open}
				sx={{
					backgroundColor: "#fff",
					borderBottom: "0.5px solid #959595",
					boxShadow: "unset",
				}}
			>
				<Toolbar disableGutters>
					<nav className="nav">
						<div className="outlet-nav">
							{/* STUB: mobile view */}
							<Box
								sx={{
									display: { xs: "flex", sm: "none" },
									alignItems: "center",
									gap: "0.76rem",
									...(open && { display: "none" }),
								}}
							>
								<IconButton
									color="#000"
									aria-label="open drawer"
									onClick={handleDrawerOpen}
									edge="start"
									sx={{
										p: 0,
									}}
								>
									<MenuIcon />
								</IconButton>
								<NavLink
									to="/"
									className="navbar-title controls"
								>
									<span>Smart</span>
									<span>Learning</span>
								</NavLink>
							</Box>

							{/* STUB: desktop view */}
							<Box
								sx={{
									display: { xs: "none", sm: "block" },
									...(open && { display: "none" }),
								}}
							>
								<h1
									className="navbar-title"
									onClick={handleDrawerOpen}
								>
									<span>Smart</span>
									<span>Learning</span>
								</h1>
							</Box>

							<div className="navbar-controls">
								<SearchIcon />
								<NotificationIcon />
								<img
									src={AvatarIcon}
									alt="avatar"
									style={{ width: "32px", height: "32px" }}
								/>
								<Tooltip title="Account settings">
									<IconButton
										size="small"
										sx={{ p: 0 }}
										onClick={handleMenuClick}
										aria-controls={
											openMenu
												? "account-menu"
												: undefined
										}
										aria-haspopup="true"
										aria-expanded={
											openMenu ? "true" : undefined
										}
									>
										<ChevronDownIcon />
									</IconButton>
								</Tooltip>
								<AccountMenu
									handleMenuClose={handleMenuClose}
									openMenu={openMenu}
									anchorEl={anchorEl}
								/>
							</div>
						</div>
					</nav>
				</Toolbar>
			</AppBar>

			<ClickAwayListener
				onClickAway={handleDrawerClose}
				mouseEvent="onMouseDown" // this ensures that handleDrawerOpen works
			>
				<div role="presentation">
					<Drawer
						sx={{
							width: drawerWidth,
							flexShrink: 0,
							"& .MuiDrawer-paper": {
								width: drawerWidth,
								backgroundColor: "#fafafa",
								boxSizing: "border-box",
								borderRight: "0.5px solid #959595",
							},
						}}
						variant="persistent"
						anchor="left"
						open={open}
					>
						<DrawerHeader
							sx={{
								pb: { xs: 0, sm: "1.5rem" },
								pt: { xs: 0, sm: "1.7rem" },
								borderBottom: {
									sm: "0.5px solid #959595",
								},
							}}
						>
							<NavLink to="/" className="navbar-title">
								<span>Smart</span>
								<span>Learning</span>
							</NavLink>

							<IconButton
								onClick={handleDrawerClose}
								sx={{
									display: { xs: "flex", sm: "none" },
								}}
							>
								<CloseIcon />
							</IconButton>
						</DrawerHeader>
						{drawer}
					</Drawer>
				</div>
			</ClickAwayListener>

			{/* STUB: use TestMain if on take-a-test route, else use Main */}
			{location.pathname === "/take-a-test" ? (
				<TestMain open={open}>
					<DrawerHeader />
					<Outlet>{children}</Outlet>
				</TestMain>
			) : (
				<Main open={open}>
					<DrawerHeader />
					<Outlet>{children}</Outlet>
				</Main>
			)}
		</Box>
	);
};

export default OutletWrapper;
