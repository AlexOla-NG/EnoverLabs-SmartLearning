import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";

import {
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Tooltip,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
// style sidebar
// set take a test width: `calc(100% - ${drawerWidth}px)` & marginLeft: "auto",

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
		// [theme.breakpoints.up("sm")]: {
		// 	width: `calc(100% - ${drawerWidth}px)`,
		// 	marginLeft: "auto",
		// },
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

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
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

const OutletWrapper = ({ children }) => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);

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

	const drawer = (
		<List>
			{drawerItems.map((item, index) => {
				const { text, icon } = item;
				return (
					<ListItem key={index} disablePadding>
						<ListItemButton>
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				open={open}
				sx={{
					backgroundColor: "#fff",
					boxShadow: "unset",
				}}
			>
				<Toolbar>
					<nav className="nav">
						<div className="container outlet-nav">
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "0.76rem",
								}}
							>
								<IconButton
									color="#000"
									aria-label="open drawer"
									onClick={handleDrawerOpen}
									edge="start"
									sx={{
										p: 0,
										...(open && { display: "none" }),
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

			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				{drawer}
			</Drawer>

			<Main open={open}>
				<DrawerHeader />
				<Outlet>{children}</Outlet>
			</Main>
		</Box>
	);
};

export default OutletWrapper;
