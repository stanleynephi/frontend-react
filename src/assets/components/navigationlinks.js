//import links from the react dom
import { Link } from "react-router-dom";
import styles from "../styles/navigation.module.css"

//use this link in an exported navigation function
export default function Navigations(){

        //return the needed links
        return(
            <nav className={styles.nav}>
                <ul className={styles.links}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sales">Sales</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to= "/agents">Agents</Link></li>
                </ul>
            </nav>
        )
}