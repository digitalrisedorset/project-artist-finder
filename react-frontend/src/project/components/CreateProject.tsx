import React from 'react';
import {Form} from '../../global/styles/Form';
import {useForm} from '../../global/hooks/useForm';
import {DisplayError} from '../../global/components/ErrorMessage';
import {useCreateProject} from "../hooks/useCreateProject";

export const CreateProject: React.FC = () => {
    const { inputs, handleChange, resetForm } = useForm({
        name: '',
        speciality: '',
        description: ''
    });
    const [createProject, { data, error }] = useCreateProject(inputs)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault(); // stop the form from submitting
        const res = await createProject().catch(console.error);
        resetForm();
        // Send the email and password to the graphqlAPI
    }

    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <h2>New Project</h2>
            <DisplayError error={error} />
            <fieldset>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={inputs.name}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="speciality">
                    Speciality
                    <input
                        type="text"
                        id="speciality"
                        name="speciality"
                        placeholder="speciality"
                        value={inputs.speciality}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="description">
                    Description
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={inputs.description}
                    />
                </label>

                <button type="submit">+ Add Project</button>
            </fieldset>
        </Form>
    )
}