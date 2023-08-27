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
            <TextInconsolata textStyle="text-base text-gray-500">
                {company}
            </TextInconsolata>

            <View className="mt-2">
                <View className="flex-row items-center">
                    <Octicons
                        name="calendar"
                        style={{ marginRight: 5 }}
                        size={16}
                        color="gray"
                    />
                    <TextInconsolata textStyle="text-base text-gray-500">
                        Posted on {posted}
                    </TextInconsolata>
                </View>
                <View className="flex-row items-center">
                    <Octicons
                        name="location"
                        style={{ marginRight: 5 }}
                        size={16}
                        color="gray"
                    />
                    <TextInconsolata textStyle="text-base text-gray-500">
                        {location}
                    </TextInconsolata>
                </View>
                <View className="flex-row items-center">
                    <Octicons
                        name="briefcase"
                        style={{ marginRight: 5 }}
                        size={16}
                        color="gray"
                    />
                    <TextInconsolata textStyle="text-base text-gray-500">
                        {workType}
                    </TextInconsolata>
                </View>
            </View>

            <TextInconsolata textStyle="text-base text-gray-500 mt-3">
                Added on {posted}
            </TextInconsolata>
        </View>
    );
};

export default JobCard;
