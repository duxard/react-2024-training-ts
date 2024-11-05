import './App.css'
import Person from "./components/Person.tsx";
import { ReactElement, useContext } from "react";
import { StoreContext } from "./components/StoreProvider.tsx";
import ParentComponent from "./components/Parent.tsx";
import ListComponent from "./components/List.tsx";

function App(): ReactElement {
    const { appId } = useContext(StoreContext);

    return (
    <>
        <Person age={20} isMarried={false} name={'john'}>
            <p>child node</p>
            <p>{appId}</p>
        </Person>

        <ParentComponent isAdmin={true} disabled={false}/>
        <ListComponent />
    </>
    )
}

export default App
