import gql from "graphql-tag";
import {useMutation} from "@apollo/client";

const CREATE_PROJECT_MUTATION = gql`
  mutation CREATE_PROJECT_MUTATION(   
    $name: String!
    $description: String
    $speciality: String!
    $latitude: BigInt
    $longitude: BigInt
  ) {
    createOwnerProject( 
        name: $name, 
        description: $description, 
        speciality: $speciality, 
        latitude: $latitude, 
        longitude: $longitude    
      ) {
          id     
          name
          description
          speciality
          latitude
          longitude      
    }
  }
`;

/*
* {
  "data": {
    "name": "Zenith",
    "startDate": "2020-07-10",
    "latitude": "39393934905",
    "longitude": "29229929",
    "description": "long description",
    "speciality": "painter"
  }
}
* */
export const useCreateProject = (inputs: any) => {
    inputs['latitude'] = '12215435345'
    inputs['longitude'] = '22223344'
    inputs['description'] = 'long description'
    inputs['speciality'] = 'painter'

    const response = useMutation(CREATE_PROJECT_MUTATION, {
        variables: inputs,
    });

    return response;
}