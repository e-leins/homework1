import React from "react";
import {BlockMessage1, BlockMessage2, BlockMessage3} from "../BlockMessage/BlockMessage";
import {Img1} from "../BlockMessage/Img";
import {Img2} from "../BlockMessage/Img";
import classes from "./BlockBack.module.css"

export function BlockBack1() {
    return (
        <div className={classes.blockBack}>
            <Img1 />
            <BlockMessage1/>
         </div>
    )
}
export function BlockBack2() {
    return (
        <div className={classes.blockBack}>
            <BlockMessage2/>
            <Img2 />

        </div>
    )
}
export function BlockBack3() {
    return (
        <div className={classes.blockBack}>
            <Img1 />
            <BlockMessage3/>


        </div>
    )
}