import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";

const getFonts = () =>
	Font.loadAsync({
		"nunito-regular" : require("./assets/fonts/Nunito-Regular.ttf"),
		"nunito-bold"    : require("./assets/fonts/Nunito-Bold.ttf"),
	});

const App = () => {
	const [ fontsLoaded, setFontsLoaded ] = useState(false);

	if (fontsLoaded) return <Navigator />; // if fonts are loaded show app

	return <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />; // if fonts are not loaded, load them.
};

export default App;
