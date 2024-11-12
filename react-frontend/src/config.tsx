
export type configInfo = {
    keystone: {
        graphqlEndpoint: string,
        headers: {
            'apollo-require-preflight': string
        }
    },
    speciality: string[]
}

export const config: configInfo = {
    keystone: {
        graphqlEndpoint: (process.env.REACT_APP_KEYSTONE_HOST === undefined) ? 'http://localhost:3000/api/graphql' : `${process.env.REACT_APP_KEYSTONE_HOST}/api/graphql`,
        headers: {
            'apollo-require-preflight': (process.env.REACT_REQUIRE_PREFLIGHT)? 'true': 'false'
        }
    },
    speciality: ['painter', 'sculptor']
}
