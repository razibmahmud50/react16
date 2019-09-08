import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }
     }
     icrement(){
         this.setState({
             count : this.state.count +1
         })
     }
     decrement(){
        this.setState({
            count : this.state.count -1
        })
    }
     
    render() {
        return (
            <div>
                <button onClick={()=> this.icrement()}>increment</button>
                <h3>{this.state.count}</h3>
                <button onClick={()=> this.decrement()}>decrement</button>

            </div>
        )
    }
}

export default Counter
