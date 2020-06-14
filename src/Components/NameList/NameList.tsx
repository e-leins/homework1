import React, {useState} from "react";


export type NameListType = {
    names: Array<NameType>
    addName: (title: string) => void
}
export type NameType = {
    id: string
    title: string
}

export function NameList(props: NameListType) {

    const [newNameTitle,setNewNameTitle] = useState (" ");
    return (
        <div className="#">
            <input value ={newNameTitle} onChange={(event)=>{setNewNameTitle(event.currentTarget.value)}}/>
            <ul>
                {
                    props.names.map(n => <li key={n.id}>
                        <span> {n.title}</span>
                        <button onClick={() => {props.addName(newNameTitle)}}>
                            Add
                        </button>
                    </li>)
                }
            </ul>
            <span> количество</span>
        </div>

    );
}