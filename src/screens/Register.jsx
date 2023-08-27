import { ScrollView, TextInput, TouchableHighlight, View } from "react-native";
import React from "react";
import TextInconsolata from "../components/shared/TextInconsolata";
import Footer from "../components/Footer";
import { Link } from "expo-router";

const Register = () => {
    return (
        <ScrollView>
            <View className="bg-white w-11/12 mx-auto rounded-xl py-10 px-12 my-6 shadow-md">
                <View className="border-b border-gray-400 pb-6">
                    <TextInconsolata
                        textStyle="text-2xl text-center"
                        boldLevel="bolder">
                        Sign Up
                    </TextInconsolata>

                    <TextInconsolata textStyle="text-base text-center">
                        Already have an account?{" "}
                        <Link href="/auth/login">
                            <TextInconsolata
                                textStyle="text-base text-blue-600"
                                boldLevel="bold">
                                Sign In
                            </TextInconsolata>
                        </Link>
                    </TextInconsolata>
                </View>

                <View>
                    <TextInconsolata textStyle="text-base mt-4">
                        Email *
                    </TextInconsolata>
                    <View className="flex-row items-center border border-gray-400 rounded px-2 py-1">
                        <TextInput
                            className="w-full"
                            placeholder="Email address"
                            placeholderTextColor="gray"
                        />
                    </View>

                    <TextInconsolata textStyle="text-base mt-4">
                        Password *
                    </TextInconsolata>
                    <View className="flex-row items-center border border-gray-400 rounded px-2 py-1">
                        <TextInput
                            className="w-full"
                            placeholder="Password"
                            placeholderTextColor="gray"
                        />
                    </View>

                    <TextInconsolata textStyle="text-base mt-4">
                        Full name
                    </TextInconsolata>
                    <View className="flex-row items-center border border-gray-400 rounded px-2 py-1">
                        <TextInput
                            className="w-full"
                            placeholder="e.g. Ahmad Farah"
                            placeholderTextColor="gray"
                        />
                    </View>
                </View>

                <TouchableHighlight className="bg-amber-400 mt-6 px-2 py-2 rounded">
                    <TextInconsolata
                        textStyle="text-base text-center text-white"
                        boldLevel="bold">
                        SIGN UP
                    </TextInconsolata>
                </TouchableHighlight>
            </View>

            <Footer />
        </ScrollView>
    );
};

export default Register;
