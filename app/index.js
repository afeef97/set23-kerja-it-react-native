import React, { useCallback } from "react";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import Home from "../src/screens/Home";
import Header from "../src/components/Header";

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [fontsLoaded] = useFonts({
        ExtraLight: require("../src/assets/fonts/Inconsolata-ExtraLight.ttf"),
        Light: require("../src/assets/fonts/Inconsolata-Light.ttf"),
        Regular: require("../src/assets/fonts/Inconsolata-Regular.ttf"),
        Medium: require("../src/assets/fonts/Inconsolata-Medium.ttf"),
        SemiBold: require("../src/assets/fonts/Inconsolata-SemiBold.ttf"),
        Bold: require("../src/assets/fonts/Inconsolata-Bold.ttf"),
        Bolder: require("../src/assets/fonts/Inconsolata-ExtraBold.ttf"),
        Black: require("../src/assets/fonts/Inconsolata-Black.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <Header />
            <Home onLayout={onLayoutRootView} />
        </>
    );
};

export default App;
