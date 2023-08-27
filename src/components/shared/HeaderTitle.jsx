import { View, Image, Pressable } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const HeaderTitle = () => {
    return (
        <Pressable
            onPress={() => {
                if (router.canGoBack()) {
                    router.back();
                }
            }}>
            <Image
                style={{ objectFit: "contain" }}
                source={require("../../assets/image/logo.webp")}
                className="w-40 h-auto "
            />
        </Pressable>
    );
};

export default HeaderTitle;
