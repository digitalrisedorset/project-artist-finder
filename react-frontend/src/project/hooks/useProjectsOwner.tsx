import {gql, useQuery} from '@apollo/client';
import {useUser} from "../../user-authentication/hooks/useUser";

export const ALL_PROJECTS_OWNER_QUERY = gql`
     query Projects($where: ProjectWhereInput!) {
      projects(where: $where) {
        id
        name
        speciality
        members {
           name
           speciality
        }      
      } 
  }
`;

export const useProjectsOwner = () => {
    const user = useUser();

    const projectsData = useQuery(ALL_PROJECTS_OWNER_QUERY, {
        variables: {
            "where": {
                "owner": {"id": {"equals": user?.id}}
            }
        },
        fetchPolicy: 'cache-and-network'
    });

    return projectsData;
}