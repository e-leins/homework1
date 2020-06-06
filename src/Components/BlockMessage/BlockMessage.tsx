import React from "react";
import { Message,Message2} from "../Message/Message";
import classes from "./BlockMessage.module.css"


export function BlockMessage1(){
    return (
        <div className ={classes.blockMessages1}>
        <Message name="Elena Valiuk" message="Наконец-то получилось" time="00.44"/>
        </div>
    )
}
export function BlockMessage2(){
    return (
        <div className ={classes.blockMessages2}>
            <Message2 name="Baby Yoda" message="Пора спать, утро вечера мудренее. Как сказал великий мыслитель Платон 'Победа над самим собой есть первая и наилучшая из побед.'"time="00.50"/>
        </div>
    )
}
