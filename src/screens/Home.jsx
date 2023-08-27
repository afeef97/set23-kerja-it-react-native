import React from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Link } from "expo-router";
import Hero from "../components/Hero";
import TextInconsolata from "../components/shared/TextInconsolata";
import JobList from "../components/JobList";

const Home = ({ onLayout }) => {
    return (
        <ScrollView onLayout={onLayout}>
            <Hero />
            <View className="px-6">
                <Link href="/jobs" className="mb-2" asChild>
                    <Pressable>
                        <TextInconsolata textStyle="text-xl" boldLevel="bold">
                            ⏳ Latest Jobs →
                        </TextInconsolata>
                    </Pressable>
                </Link>
                <JobList />
            </View>
        </ScrollView>
    );
};

export default Home;
