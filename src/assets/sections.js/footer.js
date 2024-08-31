//create the footer comonents
//import the links from react dom
import Form from "../components/forms";
import styles from "../styles/footer.module.css"

//create the function
export default function Footer({Logo}){



    //return
    return(
        <div className={styles.footer} id="footer">
            <div>
                <h1>TO CONTACT OUR RENTAL OR SALES TEAM 
                    PLEASE CALL OR EMAIL US:</h1>
                <div className={styles.contact}>
                    <div className={styles.links}>
                        <a href="tel: +233 24-560-2312">Tel: +233 (0)24-560-2312</a>
                        <a href="mailto:stanleynuley@gmail.com">Email: stanleynuley@gmail.com</a>
                        <p>&copy; 2035 by Colton Properties. Powered and secured by Wix</p>
                    </div>
                    <div>
                        <address>
                            <strong>Company Name</strong>
                                    1234 Main Street
                                    Accra, Ghana
                                    P.O. Box 5678
                        </address>
                    </div>
                </div>
            </div>

            <div className={styles.forms}>
                <h3>ALTERNATIVELY YOU CAN FILL
                    IN THE FOLLOWING CONTACT FORM:</h3>
                <Form/>
            </div>
        </div>
    )
}