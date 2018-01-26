import React from 'react'


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
            </div>
        )
    }
}

export default About;