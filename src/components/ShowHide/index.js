// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  firstnameFunc = () => {
    this.setState(prevState => ({
      firstname: !prevState.firstname,
    }))
  }

  lastnameFunc = () => {
    this.setState(prevState => ({
      lastname: !prevState.lastname,
    }))
  }

  render() {
    const {firstname, lastname} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.firstnameFunc}
            >
              Show/Hide Firstname
            </button>
            {firstname && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.lastnameFunc}
            >
              Show/Hide Lastname
            </button>
            {lastname && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
