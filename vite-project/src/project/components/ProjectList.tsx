import {useProjectsOwner} from "../hooks/useProjectsOwner.tsx";
import {useUser} from "../../user-authentication/hooks/useUser"
import {Link} from "react-router-dom";
import {SignOut} from "../../user-authentication/components/SignOut.tsx";

export const ProjectList: React.FC = () => {
    const user = useUser();

    if (!user) return <>Loading</>

    const { data, error, loading } = useProjectsOwner(user?.id)

    console.log('user', data)

    return (
        <>
            {user && (
            <>
                <h2>all your projects</h2>
                {!loading && data?.projectsData.map(
                    (project) => {project.name}
                )}
            </>)}
        </>
    )
}