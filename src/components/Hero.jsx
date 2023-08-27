import { View } from "react-native";
import React from "react";
import TextInconsolata from "./shared/TextInconsolata";
import LinkButton from "./shared/LinkButton";

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

            <View className="items-center justify-around mt-6 w-80">
                <LinkButton
                    link="/auth/register"
                    variant="solid"
                    boldLevel="bold"
                    textStyle="text-white text-base text-center">
                    🎯 I want companies to find me
                </LinkButton>
                <LinkButton
                    link="/jobs"
                    variant="outline"
                    boldLevel="bold"
                    textStyle="text-base text-center">
                    🔍 Search Jobs
                </LinkButton>
            </View>
        </View>
    );
};

export default Hero;
