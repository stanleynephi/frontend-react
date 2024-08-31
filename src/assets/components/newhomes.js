import React from "react";
import styles from "../styles/homecards.module.css"
//a function for all the homes listed

const HomesInfo = (prop) =>{

    //create an image, hometype, location, home details and an amount
    return (
        <div className={prop.styles}>
            <img src={prop.image} alt="house"/>
            <div className={styles.homeinfo}>
            <h2>{prop.hometype}</h2>
            <h1>{prop.location}</h1>
            <p>{prop.homedetails}</p>
            <h3>{prop.homeamount}</h3>
            </div>
        </div>
    )
}


export default HomesInfo