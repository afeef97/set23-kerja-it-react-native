import { Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HeaderTitle = () => {
    return (
        <Link href="/" asChild>
            <Pressable>
                <Image
                    style={{ objectFit: "contain" }}
                    source={require("../../assets/image/logo.webp")}
                    className="w-40 h-auto "
                />
            </Pressable>
        </Link>
    );
};

export default HeaderTitle;
