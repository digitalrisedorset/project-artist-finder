import {ItemStyles} from '../../global/styles/ItemStyles';
import {Title} from '../../global/styles/Title';
import {KeystoneProject} from "../../types/keystone";

interface ProjectProps {
    project: KeystoneProject
}
export const Project: React.FC<ProjectProps> = ({project}: ProjectProps) => {
    return (<ItemStyles>
        <Title>
            {project.name}
        </Title>
        <span className="type">{project.speciality}</span>
    </ItemStyles>)
}