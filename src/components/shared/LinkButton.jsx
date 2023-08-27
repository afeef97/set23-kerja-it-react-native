import React from "react";
import { Link } from "expo-router";
import { TouchableHighlight } from "react-native";
import TextInconsolata from "./TextInconsolata";

const LinkButton = ({
    link,
    variant,
    textStyle,
    boldLevel,
    children,
    ...props
}) => {
    let variantStyle;
    let underlay;
    switch (variant) {
        case "solid":
            variantStyle = "bg-black rounded py-3 px-2 w-60 md:w-72 my-1";
            underlay = "#314155";
            break;
        case "outline":
            variantStyle =
                "border border-gray-300 rounded py-3 px-2 w-60 md:w-72 my-1";
            underlay = "#ffffff";
            break;
        case "ghost":
            variantStyle = "bg-transparent rounded py-3 px-2 w-60 md:w-72 my-1";
            underlay = "#eeeeee";
            break;
        default:
            variantStyle = "bg-black rounded py-3 px-2 w-60 md:w-72 my-1";
    }

    return (
        <Link href={link} asChild>
            <TouchableHighlight
                className={variantStyle}
                activeOpacity={0.6}
                underlayColor={underlay}
                {...props}>
                <TextInconsolata textStyle={textStyle} boldLevel={boldLevel}>
                    {children}
                </TextInconsolata>
            </TouchableHighlight>
        </Link>
    );
};

export default LinkButton;
