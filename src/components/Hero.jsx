import { TouchableHighlight, View } from "react-native";
import React from "react";
import TextInconsolata from "./shared/TextInconsolata";
import { Link } from "expo-router";

const Hero = () => {
    return (
        <View className="py-12 items-center container mx-auto">
            <TextInconsolata
                textStyle="text-4xl text-center leading-loose"
                boldLevel="bold">
                Find Tech Jobs In Malaysia 🇲🇾
            </TextInconsolata>
            <TextInconsolata textStyle="text-lg text-center leading-loose">
                Let employers find you. Or apply to companies directly.
            </TextInconsolata>

            <View className="items-center gap-2 mt-3 w-80">
                <Link href="/">
                    <TouchableHighlight
                        className="bg-black rounded py-2 px-2 w-60 md:w-80"
                        underlayColor="#fff">
                        <TextInconsolata
                            textStyle="text-base text-white text-center"
                            boldLevel="bold">
                            🎯 I want companies to find me
                        </TextInconsolata>
                    </TouchableHighlight>
                </Link>
                <Link href="/">
                    <TouchableHighlight className="border border-gray-400 rounded py-2 px-2 w-60 md:w-72">
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
