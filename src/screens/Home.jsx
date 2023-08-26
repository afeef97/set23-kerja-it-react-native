import React from "react";
import { View } from "react-native";
import Hero from "../components/Hero";

const Home = ({ onLayout }) => {
    return (
        <View onLayout={onLayout}>
            <Hero />
        </View>
    );
};

export default Home;
