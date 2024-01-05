import React from "react";

/* Style Import */

import classes from './latestPosts.module.scss'

/* Style Import */
/* Img Import */

    /*person Img import */
        import jasonImg from '../../assets/img/jason.png'
        import traceyImg from '../../assets/img/tracey.png'
        import elizabethImg from '../../assets/img/elizabeth.png'
        import ericImg from '../../assets/img/eric.png'
        import ernieImg from '../../assets/img/ernie.png'
    /*person Img import */

    /*post unique Img import */
    import beachPostImg from '../../assets/img/beachPostImg.png'
    import veneziaImg from '../../assets/img/venezia.png'
    import girlWithCarImg from '../../assets/img/girlWithCar.png'
    import carImg from '../../assets/img/car.png'
    import rocksImg from '../../assets/img/rocks.png'
    import greenHouseImg from '../../assets/img/greenHouse.png'
    import appleTechImg from '../../assets/img/appleTech.png'
    import islandImg from '../../assets/img/island.png'
    import psJoystickImg from '../../assets/img/PsJoystick.png'
    /*post unique Img import */

/* Img Import */

const LatestPosts = () =>{
    return(
        <div className={classes.latestPosts} >
            <div className={classes.latestPostsContainer} >
                {/*1st post */}
                <div className={classes.post}>
                    <img src={beachPostImg} alt="beach post img" />
                    <div className={classes.postText}>
                        <div className={classes.postCategory}>
                            <p>Technology</p>
                        </div>
                        <h3 className={classes.postTheme}>
                        The Impact of Technology on <br/> the Workplace: How <br/> Technology is Changing
                        </h3>
                    </div>
                    <div className={classes.blogAuthorContainer} >
                        <div className={classes.personalInfo}>
                            <img src={traceyImg} alt="jason img" className={classes.authorImg}/>
                            <p>Tracey Wilson</p>
                        </div>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                {/*1st post */}
                {/*2nd post */}
                <div className={classes.post}>
                    <img src={veneziaImg} alt="beach post img" />
                    <div className={classes.postText}>
                        <div className={classes.postCategory}>
                            <p>Technology</p>
                        </div>
                        <h3 className={classes.postTheme}>
                        The Impact of Technology on <br/> the Workplace: How <br/> Technology is Changing
                        </h3>
                    </div>
                    <div className={classes.blogAuthorContainer} >
                        <div className={classes.personalInfo}>
                            <img src={jasonImg} alt="jason img" className={classes.authorImg}/>
                            <p>Jason Francisco</p>
                        </div>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                {/*2nd post */}
                {/*3rd post */}
                <div className={classes.post}>
                    <img src={girlWithCarImg} alt="beach post img" />
                    <div className={classes.postText}>
                        <div className={classes.postCategory}>
                            <p>Technology</p>
                        </div>
                        <h3 className={classes.postTheme}>
                        The Impact of Technology on <br/> the Workplace: How <br/> Technology is Changing
                        </h3>
                    </div>
                    <div className={classes.blogAuthorContainer} >
                        <div className={classes.personalInfo}>
                            <img src={elizabethImg} alt="jason img" className={classes.authorImg}/>
                            <p>Elizabeth Slavin</p>
                        </div>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                 {/*3rd post */}
                 {/*4th post */}
                <div className={classes.post}>
                    <img src={greenHouseImg} alt="beach post img" />
                    <div className={classes.postText}>
                        <div className={classes.postCategory}>
                            <p>Technology</p>
                        </div>
                        <h3 className={classes.postTheme}>
                        The Impact of Technology on <br/> the Workplace: How <br/> Technology is Changing
                        </h3>
                    </div>
                    <div className={classes.blogAuthorContainer} >
                        <div className={classes.personalInfo}>
                            <img src={ernieImg} alt="jason img" className={classes.authorImg}/>
                            <p>Ernie Smith</p>
                        </div>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                {/*4th post */}
                {/*5th post */}
                <div className={classes.post}>
                    <img src={rocksImg} alt="beach post img" />
                    <div className={classes.postText}>
                        <div className={classes.postCategory}>
                            <p>Technology</p>
                        </div>
                        <h3 className={classes.postTheme}>
                        The Impact of Technology on <br/> the Workplace: How <br/> Technology is Changing
                        </h3>
                    </div>
                    <div className={classes.blogAuthorContainer} >
                        <div className={classes.personalInfo}>
                            <img src={ericImg} alt="jason img" className={classes.authorImg}/>
                            <p>Eric Smith</p>
                        </div>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                {/*5th post */}
                {/*6th post */}
                <div className={classes.post}>
                    <img src={carImg} alt="beach post img" />
                    <div className={classes.postText}>
                        <div className={classes.postCategory}>
                            <p>Technology</p>
                        </div>
                        <h3 className={classes.postTheme}>
                        The Impact of Technology on <br/> the Workplace: How <br/> Technology is Changing
                        </h3>
                    </div>
                    <div className={classes.blogAuthorContainer} >
                        <div className={classes.personalInfo}>
                            <img src={traceyImg} alt="jason img" className={classes.authorImg}/>
                            <p>Tracey Wilson</p>
                        </div>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                {/*6th post */}
                {/*7th post */}
                <div className={classes.post}>
                    <img src={appleTechImg} alt="beach post img" />
                    <div className={classes.postText}>
                        <div className={classes.postCategory}>
                            <p>Technology</p>
                        </div>
                        <h3 className={classes.postTheme}>
                        The Impact of Technology on <br/> the Workplace: How <br/> Technology is Changing
                        </h3>
                    </div>
                    <div className={classes.blogAuthorContainer} >
                        <div className={classes.personalInfo}>
                            <img src={jasonImg} alt="jason img" className={classes.authorImg}/>
                            <p>Jason Francisco</p>
                        </div>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                {/*7th post */}
                {/*8th post */}
                <div className={classes.post}>
                    <img src={islandImg} alt="beach post img" />
                    <div className={classes.postText}>
                        <div className={classes.postCategory}>
                            <p>Technology</p>
                        </div>
                        <h3 className={classes.postTheme}>
                        The Impact of Technology on <br/> the Workplace: How <br/> Technology is Changing
                        </h3>
                    </div>
                    <div className={classes.blogAuthorContainer} >
                        <div className={classes.personalInfo}>
                            <img src={elizabethImg} alt="jason img" className={classes.authorImg}/>
                            <p>Elizabeth Slavin</p>
                        </div>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                {/*8th post */}
                {/*9th post */}
                <div className={classes.post}>
                    <img src={psJoystickImg} alt="beach post img" />
                    <div className={classes.postText}>
                        <div className={classes.postCategory}>
                            <p>Technology</p>
                        </div>
                        <h3 className={classes.postTheme}>
                        The Impact of Technology on <br/> the Workplace: How <br/> Technology is Changing
                        </h3>
                    </div>
                    <div className={classes.blogAuthorContainer} >
                        <div className={classes.personalInfo}>
                            <img src={ernieImg} alt="jason img" className={classes.authorImg}/>
                            <p>Ernie Smith</p>
                        </div>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                {/*9th post */}
            </div>
            
        </div>
    )
}


export default LatestPosts