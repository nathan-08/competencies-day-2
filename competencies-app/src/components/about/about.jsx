import React from 'react'
import TakesProps from '../takesProps/takesProps'


class About extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data: null
        }
    }
    render(){
        return(
            <div className="About">
                <div className="container">
                    <TakesProps num={this.props.match.params.number}/> {/*38C */}
                    
                </div>
            </div>
        )
    }
}

export default About;