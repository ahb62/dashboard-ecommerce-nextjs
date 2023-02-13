import React, { useState } from "react";
import {
	Box,
	Toolbar,
	AppBar,
	Typography,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SideBar from "./components/SideBar";
import { width as drawerWidth } from "./components/drawer";

function pxToRem(number: number, baseNumber = 16) {
    return `${number / baseNumber}rem`;
  }

interface DashboardLayoutProps {
	children: React.ReactNode;
}

interface TopBarProps {
	openMenu: boolean;
	setOpenMenu: any;
	open: boolean;
}

const TopBar: React.FC<TopBarProps> = (props: TopBarProps) => {
	// Here, we receive the openMenu and setOpenMenu hooks like props
	const { openMenu, setOpenMenu, } = props;

	const [auth, setAuth] = useState(true);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	// const userName = sessionStorage.getItem("user_name");


	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	//


	const appbarCollapsed: any = { sm: `calc(100% - ${pxToRem(drawerWidth + 24)})` }

	const appbarFull: any = {sm: `calc(100%)`};

	const handleWidth: any = () => 
	{
		return openMenu == true ? appbarCollapsed : appbarFull;
	}


	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="fixed"
				sx={{
					width: handleWidth(),
					ml: { sm: pxToRem(drawerWidth + 24) },
					boxShadow: "none",
					borderRadius: "10px",
					marginTop: "18px",
					border: "1px solid rgba(255, 255, 255, 0.18)",
					backdropFilter: "blur(16px)",
					background:
						"linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
				}}
			>
				<Toolbar>
					{/* Here, we use a onClick event for manipulate the setOpenMenu state*/}
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={() => setOpenMenu((prevOpen: any) => !prevOpen)}
					>
						<MenuIcon sx={{ color: "white" }} />
					</IconButton>
					<Typography
						variant="h6"
						color="white"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Ecommerce
					</Typography>
					{auth && (
						<div>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
								sx={{ padding: "5px" }}
							>
								<Typography sx={{ marginRight: "5px", color: "white" }}>
									User
								</Typography>
								<AccountCircle sx={{ color: "white" }} />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
	// a parent state that passed like props in topbar and sidebar
	const [openMenu, setOpenMenu] = useState(false);

	const contentCollapsed: any = pxToRem(drawerWidth + 10); 

	const contentFull: any = pxToRem(10);

	const handleWidth: any = () => 
	{
		return openMenu == true ? contentCollapsed : contentFull;
	}

	// the dashboardLayout:

	return (
		<Box>
			{/*the topbar contains the state openMenu and the setState for openMenu like props */}
			<TopBar openMenu={openMenu} setOpenMenu={setOpenMenu} open={openMenu} />

			<SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
			<Box
				sx={{
					p: 2,
					marginLeft: handleWidth(),
				}}
			>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};

export default DashboardLayout;