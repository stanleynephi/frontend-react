//import the navigation funtion
import Navigations from "./navigationlinks"
import styles from "../styles/header.module.css"

//create a header content
export default function Headers({logo}){
    return(
        <div className={styles.header}>
        <img src={logo} alt="company logo"/>
        <Navigations/>
        </div>
    )
}