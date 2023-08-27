import React from "react";
import { View } from "react-native";
import { Link } from "expo-router";
import JobCard from "./shared/JobCard";
import JOB_DATA from "../../src/assets/data/job-directory-data.json";

const JobList = () => {
    return (
        <View className="h-max">
            {JOB_DATA.map((job) => (
                <Link
                    key={job.id}
                    className="w-full bg-white my-1 p-4 rounded-xl border border-gray-300"
                    href={`/jobs/${job.id}`}>
                    <JobCard
                        title={job.job}
                        company={job.company}
                        posted={job.post_date}
                        location={`${job.company_state}, ${job.company_country}`}
                        workType={job.work_type}
                    />
                </Link>
            ))}
        </View>
    );
};

export default JobList;
