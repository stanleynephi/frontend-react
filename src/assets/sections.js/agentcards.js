/* create a card that takes images props, names, positions
email address and telephone number*/
import styles from "../styles/agent.module.css"


const Agentcards = (props) => {

    return(

        <> 
            <div className={styles.agentcard}>
            <img src={props.agentsimage}/>
            <h4>{props.agentname}</h4>
            <p>{props.position}</p>
            <div className={styles.agentcontact}>
            <a href={`mailto:${props.email}`} className="agent-email">Email: {props.email}</a>
            <a href={`tel:${props.phone}`} className="agent-phone">Tel: {props.phone}</a>
            </div>
            </div>

        </>
    )
}

export default Agentcards