import React from "react";
import { View } from "react-native";
import TextInconsolata from "./TextInconsolata";
import { Octicons } from "@expo/vector-icons";

const JobCard = ({ title, company, posted, location, workType }) => {
    return (
        <View className="bg-white">
            <TextInconsolata textStyle="text-lg" boldLevel="bold">
                {title}
            </TextInconsolata>
            <TextInconsolata textStyle="text-base">{company}</TextInconsolata>

            <View className="mt-2">
                <View className="flex-row">
                    <Octicons
                        name="calendar"
                        style={{ marginRight: 5 }}
                        size={16}
                        color="black"
                    />
                    <TextInconsolata>Posted on {posted}</TextInconsolata>
                </View>
                <View className="flex-row">
                    <Octicons
                        name="location"
                        style={{ marginRight: 5 }}
                        size={16}
                        color="black"
                    />
                    <TextInconsolata>{location}</TextInconsolata>
                </View>
                <View className="flex-row">
                    <Octicons
                        name="briefcase"
                        style={{ marginRight: 5 }}
                        size={16}
                        color="black"
                    />
                    <TextInconsolata>{workType}</TextInconsolata>
                </View>
            </View>
        </View>
    );
};

export default JobCard;
