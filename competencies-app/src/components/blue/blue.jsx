import React from 'react'
import './blue.css'

export default class Blue extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:null
        }
    }
    render(){
        return(
            <div className="container">
                <div className="Blue">
                    <div className="x">
                        <p>a colr</p>
                    </div>
            </div>
            </div> 
        )
    }
}