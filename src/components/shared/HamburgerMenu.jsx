import React from "react";
import { showNavMenuAtom } from "../../atoms";
import { useAtom } from "jotai";
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const HamburgerMenu = ({ ...props }) => {
    const [showNavMenu, setShowNavMenu] = useAtom(showNavMenuAtom);

    return (
        <Pressable onPress={() => setShowNavMenu(!showNavMenu)}>
            {!showNavMenu && (
                <Feather name="menu" size={24} color="black" {...props} />
            )}
            {showNavMenu && (
                <Feather name="x" size={24} color="black" {...props} />
            )}
        </Pressable>
    );
};

export default HamburgerMenu;
