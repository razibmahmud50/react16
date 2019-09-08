import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true,
        }
    }
    
    render() {
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //                  <h3>welcome razib</h3>
        //         </div>
        //     )
        // }else{
        //     return(
        //     <div>
        //           <h3> welcome guest</h3>
        //     </div>
        //     )
        // }
        // return(
        //         this.state.isLoggedIn?(
        //         <h3>welcome Razib</h3>
        //         ):(<h3>welcome guest</h3>)
        // )
        return this.state.isLoggedIn && <h3>welcome razib</h3>
        // return (
        //     <div>
        //         <h3>welcome razib</h3>
        //         <h3> welcome guest</h3>
        //     </div>
        // )
    }
}

export default UserGreeting
