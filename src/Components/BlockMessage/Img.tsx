import React from "react";
import img1 from "../../ava1.jpg";


import classes from "./Img.module.css"




export  function Img1 (){
    return(
        <img src={img1} className={classes.img} alt="avatar"/>
)
}
export  function Img2 (){
    return(
        <img src={"https://focus.ua/storage/pub/files/Files4/baby-yoda-001.jpg"} className={classes.img} alt="avatar"/>
    )
}