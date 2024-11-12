import { mergeSchemas } from '@graphql-tools/schema'
import type { GraphQLSchema } from 'graphql'
import type { Lists } from '.keystone/types'
import {User} from "./schemas/User";
import {Location} from "./schemas/Location"
import {Project} from "./schemas/Project"
import {Portfolio} from "./schemas/Portfolio";
import {MediaAsset} from "./schemas/MediaAsset";
import {ProjectSubscription} from "./schemas/ProjectSubscription";
import createOwnerProject from "./mutations/createOwnerProject";

export type Session = {
    itemId: string
    data: {
        isAdmin: boolean
    }
}

export const lists = {
    User,
    Location,
    Project,
    Portfolio,
    MediaAsset,
    ProjectSubscription
} satisfies Lists

export function extendGraphqlSchema (baseSchema: GraphQLSchema) {
    return mergeSchemas({
        schemas: [baseSchema],
        typeDefs: `
        type Mutation {
          """ Create a new Project for the logged-in user"""
          createOwnerProject(
             name: String!,
             description: String,
             speciality: String!,
             latitude: BigInt,
             longitude: BigInt          
          ): Project
        }
        `,
        resolvers: {
            Mutation: {
                createOwnerProject
            },
        },
    })
}