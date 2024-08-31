//create a function for the welcome and intro
//import the button 
import React from 'react';
import Button from "../components/button";
import styles from "../styles/heropage.module.css"



export default function HeroPage({header,header2,text,button}){

    return (
        <div className={styles.heropage}>
            <h1>{header}</h1>
            <h3>{header2}</h3>
            <p>{text}</p>
            <Button>{button}</Button>
        </div>
    )
}