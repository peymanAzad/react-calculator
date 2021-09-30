import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ButtonBase as muiBtn, Box } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";

const Button = styled(muiBtn)(({ theme }) => ({
	height: "45px",
	width: "45px",
	borderRadius: "50%",
	// border: "1px solid",
	boxShadow: theme.shadows[7],
	color: theme.palette.text.primary,
}));
const Button2 = styled(Button)(({ theme }) => ({
	color: theme.palette.primary.main,
}));
const EqualBtn = styled(muiBtn)(({ theme }) => ({
	height: "100%",
	width: "45px",
	borderRadius: "25px",
	// border: "1px solid",
	boxShadow: theme.shadows[7],
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.background.default,
}));

export default function Calculator() {
	const [calcArr, setCalcArr] = React.useState(["0"]);
	const [result, setResult] = React.useState("0");
	const operators = ["+", "*", "/", "%", "-"];
	const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
	const handleClick = (btn: string) => {
		if (btn === "AC") {
			setCalcArr(["0"]);
			setResult("0");
		}
		if (operators.includes(btn)) {
			const last = calcArr.pop();
			if (!last) return;
			if (operators.includes(last)) {
				setCalcArr([...calcArr, btn]);
			} else if (numbers.includes(last[0])) {
				setCalcArr([...calcArr, last, btn]);
			}
		}
		if (numbers.includes(btn)) {
			const last = calcArr.pop();
			if (!last) {
				setCalcArr([btn]);
				return;
			}
			if (numbers.includes(last[0])) {
				setCalcArr([
					...calcArr,
					last === "0" && btn !== "." ? btn : last + btn,
				]);
			} else if (operators.includes(last)) {
				setCalcArr([...calcArr, last, btn]);
			}
		} else if (btn === "=") {
			try {
				const res = eval(calcArr.join(""));
				setResult(res);
			} catch {
				setResult("invalid");
			}
		} else if (btn === "Backspace") {
			const last = calcArr.pop();
			if (!last) return;
			else if (operators.includes(last)) {
				setCalcArr([...calcArr]);
			} else if (numbers.includes(last[0])) {
				setCalcArr([...calcArr, last.substring(0, last.length - 1)]);
			}
		}
	};
	return (
		<Paper
			sx={{
				p: 2,
				margin: "auto",
				mt: 11,
				maxWidth: 250,
				flexGrow: 1,
				boxShadow: 5,
				borderRadius: 3,
			}}
		>
			<Grid container rowSpacing={5}>
				<Grid item xs>
					<Box
						sx={{
							mb: 4,
							mt: 10,
							borderRadius: 4,
							p: 2,
							textAlign: "right",
							boxShadow:
								"inset 3px 3px 0px 0px rgba(0,0,0,.3),inset -.5px -.5px 0px 0px rgba(200,200,200,.9)",
						}}
					>
						<Box sx={{ pb: 2 }}>{calcArr}</Box>
						<Box>{result}</Box>
					</Box>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<Button2
						onClick={() => {
							handleClick("AC");
						}}
					>
						<Typography variant="h6">AC</Typography>
					</Button2>
				</Grid>
				<Grid item xs={3}>
					<Button2
						onClick={() => {
							handleClick("/");
						}}
					>
						<Typography variant="h5">/</Typography>
					</Button2>
				</Grid>
				<Grid item xs={3}>
					<Button2
						onClick={() => {
							handleClick("*");
						}}
					>
						<ClearOutlinedIcon></ClearOutlinedIcon>
					</Button2>
				</Grid>
				<Grid item xs={3}>
					<Button2
						onClick={() => {
							handleClick("Backspace");
						}}
					>
						<BackspaceOutlinedIcon />
					</Button2>
				</Grid>
				<Grid item xs={3}>
					<Button
						onClick={() => {
							handleClick("7");
						}}
					>
						<Typography variant="h6">7</Typography>
					</Button>
				</Grid>
				<Grid item xs={3}>
					<Button
						onClick={() => {
							handleClick("8");
						}}
					>
						<Typography variant="h6">8</Typography>
					</Button>
				</Grid>
				<Grid item xs={3}>
					<Button
						onClick={() => {
							handleClick("9");
						}}
					>
						<Typography variant="h6">9</Typography>
					</Button>
				</Grid>
				<Grid item xs={3}>
					<Button2
						onClick={() => {
							handleClick("-");
						}}
					>
						<Typography variant="h4">-</Typography>
					</Button2>
				</Grid>
				<Grid item xs={3}>
					<Button
						onClick={() => {
							handleClick("4");
						}}
					>
						<Typography variant="h6">4</Typography>
					</Button>
				</Grid>
				<Grid item xs={3}>
					<Button
						onClick={() => {
							handleClick("5");
						}}
					>
						<Typography variant="h6">5</Typography>
					</Button>
				</Grid>
				<Grid item xs={3}>
					<Button
						onClick={() => {
							handleClick("6");
						}}
					>
						<Typography variant="h6">6</Typography>
					</Button>
				</Grid>
				<Grid item xs={3}>
					<Button2
						onClick={() => {
							handleClick("+");
						}}
					>
						<Typography variant="h5">+</Typography>
					</Button2>
				</Grid>
				<Grid item xs={9} container spacing={2}>
					<Grid item xs={4}>
						<Button
							onClick={() => {
								handleClick("1");
							}}
						>
							<Typography variant="h6">1</Typography>
						</Button>
					</Grid>
					<Grid item xs={4}>
						<Button
							onClick={() => {
								handleClick("2");
							}}
						>
							<Typography variant="h6">2</Typography>
						</Button>
					</Grid>
					<Grid item xs={4}>
						<Button
							onClick={() => {
								handleClick("3");
							}}
						>
							<Typography variant="h6">3</Typography>
						</Button>
					</Grid>
					<Grid item xs={4}>
						<Button
							onClick={() => {
								handleClick("%");
							}}
						>
							<Typography variant="h6">%</Typography>
						</Button>
					</Grid>
					<Grid item xs={4}>
						<Button
							onClick={() => {
								handleClick("0");
							}}
						>
							<Typography variant="h6">0</Typography>
						</Button>
					</Grid>
					<Grid item xs={4}>
						<Button
							onClick={() => {
								handleClick(".");
							}}
						>
							<Typography variant="h6">,</Typography>
						</Button>
					</Grid>
				</Grid>
				<Grid item xs={3}>
					<EqualBtn
						onClick={() => {
							handleClick("=");
						}}
					>
						<Typography variant="h4">=</Typography>
					</EqualBtn>
				</Grid>
			</Grid>
		</Paper>
	);
}
