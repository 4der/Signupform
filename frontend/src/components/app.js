import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        Accept: "application/json, textplain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      if (response.status === 201) {
        this.setState({
          userName: "",
          email: "",
          password: ""
        })
      }
    }).catch(err => {
      // api down? request failed?
      console.log("Error!", err)
    })
  }

  handleName = event => {
    this.setState({
      userName: event.target.value
    })
  }

  handleHeadline = event => {
    this.setState({
      email: event.target.value
    })
  }

  handleContent = event => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="boxes">
            <label>
              <h3>Username:</h3>
              <input
                name="userName"
                type="text"
                value={this.state.userName}
                onChange={this.handleName} />
            </label>
            <label>
              <h3>Email:</h3>
              <input
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleHeadline} />
            </label>
            <label>
              <h3>Password:</h3>
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleContent} />
            </label>
          </div>
          <div className="submitButton">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
