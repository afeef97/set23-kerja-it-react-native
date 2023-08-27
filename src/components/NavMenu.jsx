import React from "react";
import { View } from "react-native";
import { useAtom } from "jotai";
import { showNavMenuAtom } from "../atoms";
import LinkButton from "./shared/LinkButton";

const NavMenu = () => {
    const [showNavMenu, setShowNavMenu] = useAtom(showNavMenuAtom);

    return (
        showNavMenu && (
            <View className="bg-white absolute w-11/12 self-center h-max z-10 p-4 items-center rounded-[0_0_8px_8px] shadow-md">
                <LinkButton
                    link="/"
                    variant="ghost"
                    textStyle="text-center text-base"
                    boldLevel="bold"
                    onPress={() => setShowNavMenu(false)}>
                    🏠 Home
                </LinkButton>
                <LinkButton
                    link="/"
                    variant="ghost"
                    textStyle="text-center text-base"
                    boldLevel="bold"
                    onPress={() => setShowNavMenu(false)}>
                    📊 Stats
                </LinkButton>
                <LinkButton
                    link="/"
                    variant="ghost"
                    textStyle="text-center text-base"
                    boldLevel="bold"
                    onPress={() => setShowNavMenu(false)}>
                    🏹 Talents
                </LinkButton>
                <LinkButton
                    link="/"
                    variant="ghost"
                    textStyle="text-center text-base"
                    boldLevel="bold"
                    onPress={() => setShowNavMenu(false)}>
                    📢 Post Jobs
                </LinkButton>
                <LinkButton
                    link="/"
                    variant="ghost"
                    textStyle="text-center text-base"
                    boldLevel="bold"
                    onPress={() => setShowNavMenu(false)}>
                    💌 Get Job Alerts
                </LinkButton>
                <LinkButton
                    link="/"
                    variant="ghost"
                    textStyle="text-center text-base"
                    boldLevel="bold"
                    onPress={() => setShowNavMenu(false)}>
                    ☁️ Login
                </LinkButton>
                <LinkButton
                    link="auth/register"
                    variant="solid"
                    textStyle="text-center text-base text-white"
                    boldLevel="bold"
                    onPress={() => setShowNavMenu(false)}>
                    ✨ Register
                </LinkButton>
            </View>
        )
    );
};

export default NavMenu;
