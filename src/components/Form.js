import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             topic: 'react'
        }
    }
    handleUsernameChange = event =>{
       this.setState({
           username: event.target.value
       })
    }
    commentChangeHandler = event => {
        this.setState({
            comment : event.target.value
        })
    }
    topicChangeHandler = event =>{
      this.setState({
          topic : event.target.value
      })
    }
    formSubmitaHandler= event =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.formSubmitaHandler}>
                    <div>
                        <label>username</label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                    <div>
                        <label>comment</label>
                        <textarea value={this.state.comment} onChange={this.commentChangeHandler}></textarea>
                    </div>
                    <div>
                        <label>topic</label>
                        <select value={this.state.topic} onChange={this.topicChangeHandler}>
                            <option value="react">react</option>
                            <option value="vue">vue</option>
                            <option value="angular">angular</option>
                        </select>
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default Form
