import React from "react";
import { Pressable } from "react-native";
import Home from "../src/screens/Home";
import { Stack } from "expo-router";
import HamburgerMenu from "../src/components/shared/HamburgerMenu";
import HeaderTitle from "../src/components/shared/HeaderTitle";

const App = () => {
    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: () => <HeaderTitle />,
                    headerRight: () => <HamburgerMenu />,
                }}
            />
            <Home />
        </>
    );
};

export default App;
