import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";

export default function AccountMenu(props) {
	const { handleMenuClose, openMenu, anchorEl } = props;
	const navigate = useNavigate();

	const navigateHome = () => {
		navigate("/");
	};

	return (
		<>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={openMenu}
				onClose={handleMenuClose}
				onClick={handleMenuClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				anchorOrigin={{ horizontal: 23, vertical: "bottom" }}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
			>
				<MenuItem onClick={navigateHome}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
}
