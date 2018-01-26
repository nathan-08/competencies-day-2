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
                About page
                <div className="container">
                    <TakesProps num={42}/> {/*38C */}
                </div>
            </div>
        )
    }
}

export default About;