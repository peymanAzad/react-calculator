import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Appbar from "./Appbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ColorModeContext } from "./ColorModeContext";
import HeroSection from "./HeroSection";
import Calculator from "./calculator/Calculator";
import { themeOptionsDark, themeOptionsLight } from "./themeConf";

export default function ToggleColorMode() {
	const [mode, setMode] = React.useState<"light" | "dark">("light");
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === "light"
						? themeOptionsLight.palette
						: themeOptionsDark.palette),
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

function App() {
	return (
		<div className="App">
			<Appbar />
			<Calculator />
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
		</div>
	);
}
