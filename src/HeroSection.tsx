import { Box, Paper, styled, Typography } from "@mui/material";
import { useState } from "react";
import backgndImg from "./Background.png";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const HeroImg = styled("div")(({ theme }) => ({
	backgroundImage: `url(${backgndImg})`,
	height: "calc(100vh - 64px)",
	marginTop: "64px",
	backgroundPosition: "center bottom",
	backgroundSize: "initial",
}));

const HeroSection = () => {
	const [fadeClass, setFadeClass] = useState("");
	return (
		<HeroImg>
			<Box sx={{ p: "15% 5% 0 5%" }}>
				<Typography variant="h1">Lorem ipsum dolor sit amet.</Typography>
				<Typography
					variant="h2"
					className={fadeClass}
					onClick={() => {
						setFadeClass("main-heading");
					}}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing.
				</Typography>
			</Box>
		</HeroImg>
	);
};
export default HeroSection;
