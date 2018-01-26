import React from 'react'
import './takesProps.css'

export default class TakesProps extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:null
        }
    }
    render(){
        return(
            <div className="TakesProps">
                <div className="small-container">
                    <p>this component takes these props from parent:</p>
                    <p>Num: {this.props.num}</p>  {/*38D */}
                </div>
            </div> 
        )
    }
}