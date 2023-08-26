import React from "react";
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const HamburgerMenu = ({ ...props }) => {
    return (
        <Pressable>
            <Feather name="menu" size={24} color="black" {...props} />
        </Pressable>
    );
};

export default HamburgerMenu;
