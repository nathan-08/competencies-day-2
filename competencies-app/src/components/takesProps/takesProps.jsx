import React from 'react'
import './takesProps.css'

export default class TakesProps extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div className="TakesProps">
                <div className="small-container">
                    <p>this component takes these props from parent:</p>
                    
                    {this.props.num && <div><p>Num: {this.props.num}</p> <p>Neat, huh?</p></div>}  {/*38D */}
                </div>
            </div> 
        )
    }
}