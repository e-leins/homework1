import React from "react";
import {BlockMessage} from "../BlockMessage/BlockMessage";
import {Img} from "../BlockMessage/Img";
import classes from "./BlockBack.module.css"


export function BlockBack() {
    return (
        <div className={classes.blockBack}>
            <Img />
            <BlockMessage/>
         </div>
    )
}