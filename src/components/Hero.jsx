import { TouchableHighlight, View } from "react-native";
import React from "react";
import TextInconsolata from "./shared/TextInconsolata";
import { Link } from "expo-router";

const Hero = () => {
    return (
        <View className="py-12 items-center mx-auto">
            <View className="w-60 md:w-80">
                <TextInconsolata
                    textStyle="text-4xl text-center leading-loose mb-2 leading-[1.2]"
                    boldLevel="bold">
                    Find Tech Jobs In Malaysia 🇲🇾
                </TextInconsolata>
                <TextInconsolata textStyle="text-lg text-center leading-loose">
                    Let employers find you. Or apply to companies directly.
                </TextInconsolata>
            </View>

            <View className="items-center gap-3 mt-6 w-80">
                <Link href="/auth/register" asChild>
                    <TouchableHighlight
                        className="bg-black rounded py-3 px-2 w-60 md:w-72"
                        activeOpacity={0.6}
                        underlayColor="#314155">
                        <TextInconsolata
                            textStyle="text-base text-white text-center"
                            boldLevel="bold">
                            🎯 I want companies to find me
                        </TextInconsolata>
                    </TouchableHighlight>
                </Link>
                <Link href="/jobs" asChild>
                    <TouchableHighlight
                        className="border border-gray-400 rounded py-3 px-2 w-60 md:w-72"
                        underlayColor="#fff">
                        <TextInconsolata
                            textStyle="text-base text-center"
                            boldLevel="bold">
                            🔍 Search Jobs
                        </TextInconsolata>
                    </TouchableHighlight>
                </Link>
            </View>
        </View>
    );
};

export default Hero;
