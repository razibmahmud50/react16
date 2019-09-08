import React, { Component } from 'react';
import '../App.css';

class Greet extends Component{
    constructor(){
        super()
        this.state = {
            message: 'welcome to visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: 'thanks for subscribing'
        })
    }
    
    render(){
        return(
            <div>
                 <h3>hello{this.state.message} </h3>
                 <button onClick = {() => this.changeMessage()}>subscribe</button>
            </div>
          
        );
    }
}
export default Greet;