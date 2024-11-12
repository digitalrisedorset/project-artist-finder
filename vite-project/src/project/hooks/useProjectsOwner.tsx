import {gql, useQuery} from '@apollo/client';

export const ALL_PROJECTS_OWNER_QUERY = gql`
     query Projects($where: ProjectWhereInput!) {
      Projects(where: $where) {
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

export const useProjectsOwner = (userId) => {
    const projectsData = useQuery(ALL_PROJECTS_OWNER_QUERY, {
        variables: {
            "where": {
                "owner": {
                    "equals": userId
                }
            }
        },
        fetchPolicy: 'cache-and-network'
    });

    return projectsData;
}