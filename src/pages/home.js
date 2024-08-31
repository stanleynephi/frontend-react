//import the header
import Headers from "../assets/components/header"
import Main from "../assets/sections.js/main"
import Footer from "../assets/sections.js/footer"
import logo from "../assets/images/logo.svg"



// Sample components for routes
export default function Home() {
    return(
        <div>
            <Headers logo={logo}/>
            <Main/>
            <Footer/>
        </div>
    )
  }