import React from "react";
import './fruitStyle.css'
class Fruit extends React.Component{
    render(){
        return(
            <div className="container">
                <img className="img" src={this.props.src} alt=""  />
                <h3>{this.props.title}</h3>
            </div>  
        )
    }
}
export default Fruit