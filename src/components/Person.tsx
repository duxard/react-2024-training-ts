import React, { useId } from "react";

export interface IPerson {
    age: number;
    isMarried: boolean;
    name: string;
    admin?: boolean;
    children?: React.ReactNode;
}
const Person = (props: IPerson) => {
    const passwordHintId = useId();
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        console.log( (event.target as HTMLInputElement).value );
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(passwordHintId)
    }

    return (
        <>
            <p>{ props.age === 20}</p>
            <p>Hello</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input id="name" type="text" onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            { props.children }
            <hr/>
        </>
    );
};

export default Person;