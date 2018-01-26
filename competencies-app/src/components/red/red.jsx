import React from 'react'
import './red.css'

export default class Red extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:null
        }
    }
    render(){
        return(
            <div className="container">
                <div className="Red">
                    <div className="x">
                        <p>a colr</p>
                        <p>{this.props.match.params && console.log(this.props.match.params)}</p>
                    </div>
                </div>
            </div> 
        )
    }
}