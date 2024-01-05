import React from "react";
import classes from './viewAll.module.scss'

const ViewAllBtn = () =>{
    return(
        <div className={classes.buttonContainer}>
            <button className={classes.viewAll}>View All Posts</button>
        </div>
    )
}

export default ViewAllBtn