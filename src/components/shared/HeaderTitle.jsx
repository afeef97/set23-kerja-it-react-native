import { View, Text, Image } from "react-native";
import React from "react";

const HeaderTitle = () => {
    return (
        <View>
            <Image
                style={{ objectFit: "contain" }}
                source={require("../../asssets/logo.webp")}
                className="w-40 h-auto "
            />
        </View>
    );
};

export default HeaderTitle;
