export interface IPerson {
    age: number;
    isMarried: boolean;
    name: string;
}
const Person = (props: IPerson) => {
    return (
        <>
            <p>{ props.age === 20}</p>
            <p>Hello</p>
        </>
    );
};

export default Person;