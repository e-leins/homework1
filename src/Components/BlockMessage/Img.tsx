import React from "react";
import img from "../../ava.jpg";
import classes from "./Img.module.css"
export  function Img (){
    return(
        <img src={img} className={classes.img} alt="avatar"/>
    )

}