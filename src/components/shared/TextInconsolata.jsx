import { Text } from "react-native";
import React from "react";

const TextInconsolata = ({ textStyle, boldLevel, children }) => {
    let fontStyle;
    switch (boldLevel) {
        case "lighter":
            fontStyle = `${textStyle} font-['Lighter']`;
            break;
        case "light":
            fontStyle = `${textStyle} font-['Light']`;
            break;
        case "normal": // default
            fontStyle = `${textStyle} font-['Regular']`;
            break;
        case "medium":
            fontStyle = `${textStyle} font-['Medium']`;
            break;
        case "semibold":
            fontStyle = `${textStyle} font-['SemiBold']`;
            break;
        case "bold":
            fontStyle = `${textStyle} font-['Bold']`;
            break;
        case "extrabold":
            fontStyle = `${textStyle} font-['ExtraBold']`;
            break;
        case "black":
            fontStyle = `${textStyle} font-['Black']`;
            break;
        default:
            fontStyle = `${textStyle} font-['Regular']`;
    }

    return <Text className={fontStyle}>{children}</Text>;
};

export default TextInconsolata;
