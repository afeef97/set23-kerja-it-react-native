import React from "react";
import { View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import JOB_DATA from "../../src/assets/data/job-directory-data.json";
import TextInconsolata from "../../src/components/shared/TextInconsolata";

const JobPage = () => {
    const params = useLocalSearchParams();
    const { job } = params;
    const currentJob = JOB_DATA[job - 1];

    return (
        <View>
            <View className="flex-row">
                <Link href="/jobs/jobList">
                    <TextInconsolata textStyle="text-base">
                        Jobs{" "}
                    </TextInconsolata>
                </Link>
                <TextInconsolata textStyle="text-base">
                    / {currentJob.job}
                </TextInconsolata>
            </View>
        </View>
    );
};

export default JobPage;
