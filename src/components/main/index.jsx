import { Component } from "react"
import img from '../img/hamburguer.png'


class Main extends Component{
    render(){
        return(
            <div>
                <img align="center" height="240" width="240" src={img} alt=""/>
            </div>
            
        )
    }
}

export default Main