import React from "react";
import classes from "./Message.module.css"

export function Message() {
    return (<div>
            <p className={classes.name}> Elena Valiuk</p>
            <p className={classes.message}> Наконец-то получилось!!!<span> 00.44</span>
            </p> </div>
    )
}



