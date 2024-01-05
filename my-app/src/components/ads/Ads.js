import React from "react";

import classes from './ads.module.scss'

const Ads = () => {
    return (
        <div className={classes.ads}>
            <div className={classes.adsContainer} >
                <p>Advertisement</p>
                <h4>You can place ads</h4>
                <p>750x100</p>
            </div>
        </div>
    )
}

export default Ads