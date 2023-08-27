import React from "react";
import { View } from "react-native";
import TextInconsolata from "./shared/TextInconsolata";

const Footer = () => {
    return (
        <View className="w-screen py-8 px-6 flex-row justify-between items-center">
            <View>
                <TextInconsolata textStyle="text-sm text-gray-400">
                    Copyright 2023
                </TextInconsolata>
                <TextInconsolata textStyle="text-sm text-gray-400">
                    Kerja IT
                </TextInconsolata>
            </View>

            <View className="flex-row justify-between">
                <TextInconsolata textStyle="text-sm text-gray-400 ml-2">
                    Open-Source
                </TextInconsolata>
                <TextInconsolata textStyle="text-sm text-gray-400 ml-2">
                    Email
                </TextInconsolata>
                <TextInconsolata textStyle="text-sm text-gray-400 ml-2">
                    Twitter
                </TextInconsolata>
            </View>
        </View>
    );
};

export default Footer;
