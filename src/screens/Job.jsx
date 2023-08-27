import React from "react";
import { View, TouchableHighlight, Pressable, ScrollView } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import JOB_DATA from "../../src/assets/data/job-directory-data.json";
import TextInconsolata from "../../src/components/shared/TextInconsolata";
import { Octicons } from "@expo/vector-icons";

const Job = () => {
    const params = useLocalSearchParams();
    const { job } = params;
    const currentJob = JOB_DATA[job - 1];

    return (
        <ScrollView>
            <View className="flex-row py-8 px-4">
                <Link href="/jobs/jobList">
                    <TextInconsolata textStyle="text-base">
                        Jobs{" "}
                    </TextInconsolata>
                </Link>
                <TextInconsolata textStyle="text-base">
                    / {currentJob.job}
                </TextInconsolata>
            </View>

            <View className="w-screen bg-white px-4 py-2">
                <View className="flex-row items-center my-4">
                    {currentJob.stacks.map((stack, index) => (
                        <View
                            key={index}
                            className="rounded bg-gray-200 py-1 px-2 mr-2"
                            style={{ marginTop: 3 }}>
                            <TextInconsolata textStyle="text-base text-black">
                                {stack}
                            </TextInconsolata>
                        </View>
                    ))}
                </View>

                <TextInconsolata textStyle="text-2xl" boldLevel="bold">
                    {currentJob.job}
                </TextInconsolata>
                <TextInconsolata textStyle="text-base">
                    {currentJob.company}
                </TextInconsolata>

                <View className="mt-2">
                    <View className="flex-row items-center">
                        <Octicons
                            name="calendar"
                            style={{ marginRight: 5 }}
                            size={12}
                            color="gray"
                        />
                        <TextInconsolata textStyle="text-sm text-black">
                            Posted on {currentJob.post_date}
                        </TextInconsolata>
                    </View>
                    <View className="flex-row items-center">
                        <Octicons
                            name="location"
                            style={{ marginRight: 5 }}
                            size={12}
                            color="gray"
                        />
                        <TextInconsolata textStyle="text-sm text-black">
                            {currentJob.district}
                            {", "}
                            {currentJob.company_state}
                            {", "}
                            {currentJob.company_country}
                        </TextInconsolata>
                    </View>
                    <View className="flex-row items-center">
                        <Octicons
                            name="briefcase"
                            style={{ marginRight: 5 }}
                            size={12}
                            color="gray"
                        />
                        <TextInconsolata textStyle="text-sm text-black">
                            {currentJob.work_type}
                        </TextInconsolata>
                    </View>
                </View>

                <TouchableHighlight
                    className="bg-blue-600 rounded py-3 px-2 w-full mt-8 mb-1"
                    underlayColor="#39aaff">
                    <TextInconsolata
                        textStyle="text-base text-center text-white"
                        boldLevel="bold">
                        Apply Now 🚀
                    </TextInconsolata>
                </TouchableHighlight>

                <TextInconsolata textStyle="text-sm text-gray-500">
                    Please mention that you found the job on Kerja-IT.com, this
                    helps us get more companies to post here. Thanks.
                </TextInconsolata>

                <View className="my-8">
                    <Pressable>
                        <TextInconsolata textStyle="text-xl" boldLevel="bold">
                            ✍️ Job Description
                        </TextInconsolata>
                    </Pressable>
                </View>

                <View>
                    <TextInconsolata
                        textStyle="text-base underline"
                        boldLevel="bold">
                        Key Responsibilities
                    </TextInconsolata>

                    {
                        /* Write a list using React Native */
                        currentJob.details.job_description.map(
                            (description, index) => (
                                <View
                                    key={index}
                                    className="flex-row items-start my-2">
                                    <Octicons
                                        name="dot-fill"
                                        style={{
                                            marginRight: 5,
                                            paddingTop: 3,
                                        }}
                                        size={12}
                                        color="black"
                                    />
                                    <TextInconsolata textStyle="text-sm text-black">
                                        {description}
                                    </TextInconsolata>
                                </View>
                            )
                        )
                    }

                    <TextInconsolata
                        textStyle="text-base underline"
                        boldLevel="bold">
                        Qualification
                    </TextInconsolata>

                    {
                        /* Write a list using React Native */
                        currentJob.details.qualification.map(
                            (qualification, index) => (
                                <View
                                    key={index}
                                    className="flex-row items-start my-2">
                                    <Octicons
                                        name="dot-fill"
                                        style={{
                                            marginRight: 5,
                                            paddingTop: 3,
                                        }}
                                        size={12}
                                        color="black"
                                    />
                                    <TextInconsolata textStyle="text-sm text-black">
                                        {qualification}
                                    </TextInconsolata>
                                </View>
                            )
                        )
                    }
                </View>
            </View>
        </ScrollView>
    );
};

export default Job;
