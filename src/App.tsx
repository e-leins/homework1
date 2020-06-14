import React, {useState} from 'react';
import './App.css';
import {BlockBack1, BlockBack2, BlockBack3} from "./Components/BlockBack/BlockBack";
import {v1} from "uuid";
import {TodoList, TaskType} from "./Components/TodoList/Todolist";
import {NameList, NameType} from "./Components/NameList/NameList";

export type FilterPriorityType = "All" | "High" | "Medium" | "Low";

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "Job", priority: "High"},
        {id: v1(), title: "Study React", priority: "High"},
        {id: v1(), title: "Study JS", priority: "High"},
        {id: v1(), title: "Cleaning", priority: "Medium"},
        {id: v1(), title: "To water flowers", priority: "High"},
        {id: v1(), title: "Watch TV-show", priority: "Low"},
    ]);
    let [names, setNames] = useState<Array<NameType>>([
        {id: v1(), title: "John"}
    ]);

    let [filter, setFilter] = useState<FilterPriorityType>("All");

    function removeTasks(id: string) {
        let resultTasks = tasks.filter(t => t.id !== id)
        setTasks(resultTasks);
    }

    function changeFilter(value: FilterPriorityType) {
        setFilter(value)
    }

    let tasksTodolist = tasks;
    if (filter === "High") {
        tasksTodolist = tasks.filter(t => t.priority === "High");

    }
    if (filter === "Medium") {
        tasksTodolist = tasks.filter(t => t.priority === "Medium");
    }
    if (filter === "Low") {
        tasksTodolist = tasks.filter(t => t.priority === "Low");
    }

    function addName(title: string) {
        let newName = {id: v1(), title: title};
        let newNames = [...names, newName];
        setNames(newNames);
    }

    return (
        <div>
            <BlockBack1/>
            <BlockBack2/>
            <BlockBack3/>
            <TodoList tasks={tasksTodolist}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}/>
            < NameList names={names}
                       addName={addName}/>
        </div>
    )
}

export default App