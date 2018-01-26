import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Landing.css'
import TakesProps from '../takesProps/takesProps'

export default class Landing extends React.Component {  //37E-2
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            inputValue: '',
            fromServer: ''
        }
        this.inputChange = this.inputChange.bind(this)
        this.enterClicked = this.enterClicked.bind(this)
        this.getRequest=this.getRequest.bind(this)
    }
    inputChange(e) {
        this.setState({ inputValue: e.target.value })
    }
    enterClicked() {
        this.props.history.push('/About/' + this.state.inputValue)
        this.setState({ inputValue: '' })
    }
    getRequest() {
        axios.get('http://localhost:3049/api/get').then(res => this.setState({ fromServer: res.data }))
    }
    componentDidMount(){
        this.getRequest()
    }
    render() {
        return (
            <div className="Landing">
                <div className="container">
                    <div>
                        <input style={{ height: "60px", width: 320 }} onChange={this.inputChange} value={this.state.inputValue} placeholder={"enter a number to travel through space and time."}></input>
                        <button onClick={this.enterClicked}>Enter</button>
                    </div>
                    <div>
                        <button onClick={this.getRequest}>click to get from server</button>
                        <p>got this: {this.state.fromServer}</p>
                    </div>
                </div>
            </div>
        )
    }
}