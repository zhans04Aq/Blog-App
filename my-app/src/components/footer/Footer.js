import React from "react";

import classes from './footer.module.scss'

/* img import*/

import emailIcon from '../../assets/icons/emailIcon.png'
import copyrightLogo from '../../assets/icons/Copyright Info.png'

/* img import*/

export const Footer = () =>{
    return(
        <div className={classes.footer}>
            <div v className={classes.footerContainer}>
                <div className={classes.about}>
                    <h4>About</h4>
                    <p>Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit, sed do <br/>
                    eiusmod tempor incididunt ut labore <br/>
                    et dolore magna aliqua. Ut enim ad <br/>
                    minim veniam</p>
                    <div className={classes.contacts}>
                        <div className={classes.contactInfo}>
                            <h4>Email:</h4>
                            <p> info@jstemplate.net</p>
                        </div>
                        <div className={classes.contactInfo}>
                            <h4>Phone:</h4>
                            <p>880 123 456 789</p>
                        </div>
                    </div>
                </div>
                <div className={classes.quickLink}>
                    <h4>Quick Link</h4>
                    <p>Home</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Archived</p>
                    <p>Author</p>
                    <p>Contact</p>
                </div>
                <div className={classes.category}>
                    <h4>Category</h4>
                    <p>Lifestyle</p>
                    <p>Technology</p>
                    <p>Travel</p>
                    <p>Business</p>
                    <p>Economy</p>
                    <p>Sports</p>
                </div>
                <div className={classes.newsLetter}>
                    <div className={classes.newsLetterContainer}>
                        <div className={classes.newsLetterText}>
                            <h3>Weekly Newsletter</h3>
                            <p>Get blog articles and offers via email</p>
                        </div>
                        <div className={classes.emailInputContainer}>
                            <input type="email" placeholder="Your Email" className={classes.emailInput}/>
                            <img src={emailIcon} alt="email icon" className={classes.emailIcon}/>
                        </div>
                        <button className={classes.subscribeBtn}>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className={classes.additionalInfo}>
                <img alt="" src={copyrightLogo} className={classes.copLogo}/>
                <div className={classes.policyInfo}>
                    <p>Terms of Use</p>
                    <p className={classes.centerWord}>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    )
}