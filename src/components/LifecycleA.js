import React, { Component } from 'react'

 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'Razib'
         }
         console.log('from constructor')
     }
     static getDeriveStateFromProps(props, state){
         console.log('from deriveState')
         return null
     }
     componentDidMount(){
         console.log('from component did mount')
     }
    render() {
        console.log('from render')
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default LifecycleA