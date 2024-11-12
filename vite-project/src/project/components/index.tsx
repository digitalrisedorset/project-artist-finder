import {useNavigate} from "react-router-dom";
import {ProjectList} from "./ProjectList.tsx";

export const ProjectDashboard: React.FC = () => {
    const navigate = useNavigate()

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        navigate('/create-project');
    }

    return (
        <>
            <ProjectList />
            <button type="submit" onClick={handleSubmit}>Create Project</button>
        </>
    )
}