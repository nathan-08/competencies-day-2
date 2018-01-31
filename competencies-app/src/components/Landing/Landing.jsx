import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Landing.css'
import TakesProps from '../takesProps/takesProps'
import { setValue, callApi } from '../../ducks/reducer';
import {connect} from 'react-redux'

class Landing extends React.Component {  //37E-2
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            inputValue: '',
            fromServer: '',
            reduxInput: null
        }
        this.inputChange = this.inputChange.bind(this)
        this.enterClicked = this.enterClicked.bind(this)
        this.getRequest=this.getRequest.bind(this)
        this.setReduxValue=this.setReduxValue.bind(this)
        this.reduxInputChange=this.reduxInputChange.bind(this)
    }
    componentDidMount(){
        this.props.callApi();
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
    setReduxValue(){
        this.props.setValue(this.state.reduxInput)
        this.setState({reduxInput: null})
    }
    reduxInputChange(e){
        this.setState({reduxInput:e.target.value})
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
                        <p>got this: {JSON.stringify(this.state.fromServer)}</p>
                    </div>
                    <div>
                        <input style={{ height: "60px", width: 320, margin:20 }} onChange={this.reduxInputChange} value={this.state.reduxInput} placeholder={"type a value"}></input>
                        <div>
                            <button  onClick={this.setReduxValue}>click to set redux value</button>
                            <p>redux value: {this.props.value}</p>
                            <p>from swapi: {this.props.apicall}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        value: state.value,
        apicall: state.apicall
    }
}

export default connect(mapStateToProps, { setValue, callApi })(Landing)