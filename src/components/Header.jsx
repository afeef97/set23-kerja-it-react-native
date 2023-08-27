import React from "react";
import HeaderTitle from "./shared/HeaderTitle";
import HamburgerMenu from "./shared/HamburgerMenu";
import { Stack } from "expo-router";

const Header = () => {
    return (
        <Stack.Screen
            options={{
                headerLeft: () => <HeaderTitle />,
                headerTitle: () => null,
                headerRight: () => <HamburgerMenu />,
            }}
        />
    );
};

export default Header;
