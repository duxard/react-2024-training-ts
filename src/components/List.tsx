import useInput from "../hooks/useInput.ts";
import { ReactElement } from 'react';

export default function ListComponent(): ReactElement {
    const users = ['John', 'Alex', 'Henry'];
    const input = useInput();

    return (
        <>
            <h1>List:</h1>
            <input {...input} type="text"/>
            <ul>
                {
                    users
                        .filter(user => user.toLowerCase().includes(input.value.toLowerCase()))
                        .map((user, id) => (<li key={id}>{user}</li>))
                }
            </ul>
        </>
    )
}
