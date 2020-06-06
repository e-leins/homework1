import React from "react";
import classes from "./Message.module.css"
type MessageType= {
    name:string
    message:string
    time:string
}
export function Message (props:MessageType) {
    return (<div>
            <p className={classes.name1}> {props.name}</p>
            <p className={classes.message1}> {props.message} <span className={classes.time1}> {props.time}</span>
            </p> </div>
    )
}
export function Message2 (props:MessageType) {
    return (<div>
            <p className={classes.name2}> {props.name}</p>
            <p className={classes.message2}> {props.message} <span className={classes.time2}> {props.time}</span>
            </p> </div>
    )
}



