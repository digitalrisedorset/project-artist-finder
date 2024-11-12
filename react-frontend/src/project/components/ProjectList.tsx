import React from 'react';
import {useProjectsOwner} from "../hooks/useProjectsOwner";
import {Project} from "./Project";
import {KeystoneProject} from "../../types/keystone";


export const ProjectList: React.FC = () => {
    const { data, error, loading } = useProjectsOwner()

    const getUserProjects = (projects: KeystoneProject[]): KeystoneProject[] => {
        return projects.filter((project: KeystoneProject) => project)
    }

    return (
        <>
            {!loading && (
            <>
                <h2>all your projects</h2>
                {getUserProjects(data?.projects).map(
                    (project) => <Project key={project.id} project={project}/>
                )}
            </>)}
        </>
    )
}