import React from "react";
import {FilterPriorityType} from "../../App";

export type TodoListType = {
    tasks: Array<TaskType>
    removeTasks: (id:string) => void
    changeFilter: (value:FilterPriorityType)=>void
}
export type TaskType = {
    id: string
    title: string
    priority: string
}

export function TodoList(props: TodoListType) {
    return (
        <div className="WeeklyToDo">
            <ul>
                {
                    props.tasks.map(t => <li key={t.id}>
                        <span> {t.title}</span>
                        <span> {t.priority}</span>
                        <button onClick={()=>{props.removeTasks(t.id)}}> Remove</button>
                    </li>)
                }
            </ul>
<div> <button onClick={()=>{props.changeFilter("High")}}> High</button>
    <button onClick={()=>{props.changeFilter("Medium")}}> Medium</button>
    <button onClick={()=>{props.changeFilter("Low")}}> Low</button>
    <button onClick={()=>{props.changeFilter("All")}}> All</button>

</div>
        </div>
    );
}