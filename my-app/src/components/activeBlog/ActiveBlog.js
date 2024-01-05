import React from "react";

/*img import*/

import activeBlogImg from '../../assets/img/tech-girl-img.png'
import jasonImg from '../../assets/img/jason.png'
/*img import*/

/*style import */

import classes from './activeBlog.module.scss'

/*style import */

const ActiveBlog = () =>{
    return(
        <div className={classes.activeBlog} >
            <div className={classes.activeBlogContainer} >
                <img src={activeBlogImg} alt="active blog img" className={classes.activeBlogImg}/>
                <div className={classes.activeBlogPlate} >
                    <div className={classes.blogCategory} >
                        <p>Technology</p>
                    </div>
                    <h1>The Impact of Technology on <br/> the Workplace:  How <br/> Technology is Changing</h1>
                    <div className={classes.blogAuthorContainer} >
                        <div className={classes.personalInfo}>
                            <img src={jasonImg} alt="jason img" className={classes.authorImg}/>
                            <p>Jason Francisco</p>
                        </div>
                        <p>August 20, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveBlog