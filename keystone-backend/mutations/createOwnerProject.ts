import type { Context } from '.keystone/types'
import { type Session } from '../schema'
export default async function createOwnerProject(root: any, {
    name,
    description,
    speciality,
    latitude,
    longitude
} : {
    name: string,
    description: string,
    speciality: string,
    latitude: number,
    longitude: number,
}, context: Context) {
    // 1. Query the current user see if they are signed in
    const sesh = context.session as Session;
    if (!sesh || !sesh.itemId) {
        throw new Error('You must be logged in to do this!');
    }

    console.log('find key for prisma', Object.keys(context.prisma))

    // Example query working with Prisma
    // const count = await context.query.Project.count({
    //     where: { owner: { id: {'equals': 'fc83ec7b-2866-460b-badf-30bc2ed175ef'}} , name: { startsWith: 'H' } },
    // });

    // 2. Query the current users project with the filter name
    const projectsOwner = await context.query.Project.findMany({
        where: { owner: { id: {equals: sesh.itemId}}, name: { equals: name } },
        resolveFields: 'id'
    });

    const [project] = projectsOwner;

    if (project) {
        console.log(`Found existing project for logged-in user with name ${name}`)
        // 2. Update the project data
        const newProject = await context.query.Project.updateOne({
            where: {id: project.id},
            data: {
                name,
                description,
                speciality,
                latitude,
                longitude
            },
            resolveFields: false,
        });

        return newProject
    }

    // 4. if it isnt, create a new cart item!
    const today = new Date()
    const formattedDate = today.toISOString().split('T')[0]
    console.log(`Create new project for logged-in user with name: ${name}, start date: ${formattedDate}`)
    return await context.query.Project.createOne({
        data: {
            owner: { connect: { id: sesh.itemId}},
            name,
            description,
            speciality,
            latitude,
            longitude,
            startDate: formattedDate   // "startDate": "2020-07-10",
        }
    })
}