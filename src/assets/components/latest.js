import React from "react";
import styles from "../styles/homecards.module.css"
import HomesInfo from "./newhomes";


const Latest = (prop) =>{

    const latesthomes = {

        "home1" : {
            "name" : "3 bedroom",
            "price" : "$1,000,000",
            "location" : "New York",
            "image" : "https://source.unsplash.com/1600x900/?house",
            "description": "This is a new home"
            },

        "home2":{
            "name" : "4 bedroom",
            "price" : "$1,500,000",
            "location" : "Los Angeles",
            "image" : "https://source.unsplash.com/1600x900/?house",
            "description": "This is a new home"
        },
        "home3":{
            "name" : "4 bedroom",
            "price" : "$1,500,000",
            "location" : "Los Angeles",
            "image" : "https://source.unsplash.com/1600x900/?house",
            "description": "This is a new home"
        },
        "home4":{
            "name" : "4 bedroom",
            "price" : "$1,500,000",
            "location" : "Los Angeles",
            "image" : "https://source.unsplash.com/1600x900/?house",
            "description": "This is a new home"
        }
        }


    //call the homecard and make a few tweeks to match what you want
    return(
            <>  
                 <h1>{prop.header}</h1>
                <div className={styles.latesthomes}>
                {Object.values(latesthomes).map((house,index) => (
                    <HomesInfo
                    key={index}
                    img={house.image}
                    hometype={house.name}
                    homeamount={house.price}
                    location={house.location}
                    homedetails={house.description
                    }
                    styles = {styles.latesthome}
                />
                ))}
            </div>
            </>
    )

}


export default Latest