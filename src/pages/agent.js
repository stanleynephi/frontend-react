//import the navigation
import Agentcards from "../assets/sections.js/agentcards";
import Headers from "../assets/components/header";
import Footer from "../assets/sections.js/footer";
import logo from "../assets/images/logo.svg";
import styles from "../assets/styles/agent.module.css";

const Agents = () => {
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
                "description": "Sales",
                "email":"stanleynuley@gmail.com",
                "tel": "+233 (0)20 117 2848"
                },
                


            
                
    }
    return (
            <>
                <Headers logo={logo}/>
                    <div className={styles.agents}>
                    <h1>Our Agents</h1>
                    <div className={styles.agentcontainer}>
                    {Object.values(houses).map((house,index) => (
                    <Agentcards 
                    key={index}
                    agentsimage={house.image}
                    agentname={house.name}
                    position={house.description}
                    email={house.email}
                    phone = {house.tel}
                    />
                    ))}
                    </div>
                    </div>


                <Footer/>
            </>
        )
    
}

export default Agents