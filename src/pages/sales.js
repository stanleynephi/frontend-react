//import the navigation
import Headers from "../assets/components/header"
import Footer from "../assets/sections.js/footer"
import logo from "../assets/images/logo.svg"
import HomeCard from "../assets/components/homecards"
import styles from "../assets/styles/agent.module.css"

export default function Sales(){

    //return the details for about
    return(
        <div>
             <Headers logo={logo}/>
            <div className={styles.sales}>
                <HomeCard header={"Properties For Sale"}/>
            </div>
            <Footer/>
        </div>
    )
}