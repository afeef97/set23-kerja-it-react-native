import React from "react";
import { Stack } from "expo-router";
import HeaderTitle from "./shared/HeaderTitle";
import HamburgerMenu from "./shared/HamburgerMenu";
import NavMenu from "./NavMenu";

const Header = () => {
    return (
        <>
            <Stack.Screen
                options={{
                    headerLeft: () => <HeaderTitle />,
                    headerTitle: () => null,
                    headerRight: () => <HamburgerMenu />,
                }}
            />
            <NavMenu />
        </>
    );
};

export default Header;
