//create a section for and add components
import Intro from "../components/welcomecontent";
import Properties from "./properties";
import Testimony from "../components/testimonycards";
import styles from "../styles/testimonies.module.css"

export default function Main(){

    return(
        <>
         <Intro header={"luxury and affordable villas right in the heart of accra"} header2={"$4,500,000"} text={"I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you."} button={"Read More"}/>
         <Properties header1={"PROPERTIES FOR SALE"}/>
         <div  className={styles.usertestimony}>
            <h1 className={styles.title}>Testimonials</h1>
            <div className={styles.container}>
            <Testimony testimony={"Working with [Company Name] \
            was an absolute pleasure! \
            They guided us through every step of buying our first home,\
            making the process stress-free and enjoyable.\
            Their expertise and dedication truly set them apart."}
            username = {"Nuley Stanley Nephi"} style={styles.testimony}/>
            

          <Testimony testimony={"Working with [Company Name] \
            was an absolute pleasure! \
            They guided us through every step of buying our first home,\
            making the process stress-free and enjoyable.\
            Their expertise and dedication truly set them apart."}
            username = {"Nuley Stanley Nephi"} style={styles.testimony}/>
            

            <Testimony testimony={"Working with [Company Name] \
            was an absolute pleasure! \
            They guided us through every step of buying our first home,\
            making the process stress-free and enjoyable.\
            Their expertise and dedication truly set them apart."}
            username = {"Nuley Stanley Nephi"} style={styles.testimony}/>
            
         </div>
         </div>
        </>
    )
}