import React from "react";
import HomesInfo from "./newhomes";
import styles from "../styles/homecards.module.css"


//create a card for the homes
const HomeCard = (prop) => {
    const houses = {
        "house1": {

            "name": "House 1",
            "price": "$100,000",
            "location": "123 Main St",
            "image": "https://picsum.photos/200/300",
            "description": "This is a house.",
            "bedrooms": 3,
            "bathrooms": 2,
        },

        "house2": {
            "name": "House 2",
            "price": "$200,000",
            "location": "456 Elm St",
            "image": "https://picsum.photos/200/300",
            "description": "This is another house.",
            "bedrooms": 4,
            "bathrooms": 3,
            },
        
        "house3": {
                "name": "House 3",
                "price": "$200,000",
                "location": "456 Elm St",
                "image": "https://picsum.photos/200/300",
                "description": "This is another house.",
                "bedrooms": 4,
                "bathrooms": 3,
                },
                
        "house4": {
            "name": "House 4",
            "price": "$200,000",
            "location": "456 Elm St",
            "image": "https://picsum.photos/200/300",
            "description": "This is another house.",
            "bedrooms": 4,
            "bathrooms": 3,
            },
            
        "house5": {
            "name": "House 5",
            "price": "$200,000",
            "location": "456 Elm St",
            "image": "https://picsum.photos/200/300",
            "description": "This is another house.",
            "bedrooms": 4,
            "bathrooms": 3,
            }
            
                
    }
    return (
            //populate the Homes card with data from the home object
            <div className={styles.homecards}>
                <h1 className={styles.header}>{prop.header}</h1>
                {Object.values(houses).map((house,index) => (
                    <HomesInfo
                    key={index}
                    img={house.image}
                    hometype={house.name}
                    homeamount={house.price}
                    location={house.location}
                    homedetails={house.descriptionw
                    }
                    styles={styles.home}
                />
                ))}
            </div>
        )
    
}

export default HomeCard
