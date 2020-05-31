import React from "react";
import {Message} from "../Message/Message";
import classes from "./BlockMessage.module.css"

export function BlockMessage(){
    return (
        <div className ={classes.blockMessages}>
        <Message/>
        </div>
    )
}