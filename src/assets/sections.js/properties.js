import React from "react"
import HomeCard from "../components/homecards"
import Latest from "../components/latest"
import styles from "../styles/properties.module.css"



export default function Properties(prop){

    return(
        <>
            <div className={styles.container}>
                <div className={styles.header}><h1>{prop.properties}</h1></div>
                <HomeCard header={"Properties for Sale"}/>
            </div>
            <div>
                <Latest header = {"Latest Homes"}/>
            </div>
        </>
    )
}