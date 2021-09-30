import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";

export default function PrimarySearchAppBar() {
	return (
		<Box sx={{ flexGrow: 1, background: "transparent" }}>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ display: { xs: "none", sm: "block" } }}
					>
						Calculator
					</Typography>

					<Box sx={{ flexGrow: 1 }} />
					<ThemeToggleBtn />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
