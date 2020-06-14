import React, {ChangeEvent, useState, KeyboardEvent} from "react";


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
    const onNameChangeHandler = (event:ChangeEvent<HTMLInputElement>)=>{setNewNameTitle(event.currentTarget.value)};
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>)=> {if (event.charCode=== 13){props.addName(newNameTitle);
        setNewNameTitle(" ")}};
    const addNewName = ()=>{props.addName(newNameTitle);
        setNewNameTitle(" ")};

    return (
        <div className="#">
            <input value ={newNameTitle}
                   onChange={onNameChangeHandler}
                   onKeyPress={onKeyPressHandler}/>
            <ul>
                {
                    props.names.map(n => <li key={n.id}>
                        <span> {n.title}</span>
                        <button onClick={() => {addNewName()}}>
                            Add
                        </button>
                    </li>)
                }
            </ul>
            <span> число </span>
        </div>

    );
}