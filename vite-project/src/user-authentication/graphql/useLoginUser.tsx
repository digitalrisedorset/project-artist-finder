import {useMutation} from "@apollo/client";
import {CURRENT_USER_QUERY} from "../hooks/useUser";
import gql from "graphql-tag";
import {useActions} from "../../global/hooks/useActions";
import {formProps} from "../../types/form";

const SIGNIN_MUTATION = gql`
  mutation AuthenticateUserWithPassword($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
          type
          speciality  
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

export const useLoginUser = (inputs: formProps) => {
    const [signin] = useMutation(SIGNIN_MUTATION, {
        variables: inputs,
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
    });

    const setUserLogged = async () => {
        const res = await signin(inputs);
        if (res?.data?.authenticateUserWithPassword?.item) {
            const user = res.data.authenticateUserWithPassword.item
        }

        return (res?.data?.authenticateUserWithPassword.__typename === 'UserAuthenticationWithPasswordFailure')
            ? res?.data?.authenticateUserWithPassword
            : undefined
    }

    return setUserLogged
}