import React from 'react'
import './green.css'

export default class Green extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:null
        }
    }
    render(){
        return(
            <div className="container">
                <div className="Green">
                    <div className="x">
                        <p>a colr</p>
                    </div>
                </div>
            </div> 
        )
    }
}