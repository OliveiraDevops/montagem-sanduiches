import { Component } from "react"
import Header from "../header"
import Main from "../main"

class Body extends Component{
    render(){
        return(
           <div>
               <Header />
               <Main />
    
           </div>
        )
    }
}

export default Body