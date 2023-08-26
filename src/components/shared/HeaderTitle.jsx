import { View, Image } from "react-native";
import React from "react";

const HeaderTitle = () => {
    return (
        <View>
            <Image
                style={{ objectFit: "contain" }}
                source={require("../../assets/image/logo.webp")}
                className="w-40 h-auto "
            />
        </View>
    );
};

export default HeaderTitle;
