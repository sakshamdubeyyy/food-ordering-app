import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        console.log(this.props.name + "Child constructor called")
    }

    componentDidMount(){
        console.log(this.props.name + "Child component did mount")
    }

    componentDidUpdate(){
        console.log(this.props.name + "component updated")
    }

    componentWillUnmount(){
        console.log(this.props.name + "Unmounted")
    }

    render(){
        console.log(this.props.name + "Child render called")
        return( 
            <div className="user">
                <hr/>
                <h3>This is a class component</h3>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Increment </button>
                <h1>Name: {this.props.name}</h1>
                <h3>Location: Sultanpur</h3>
                <h3>Email: sakshamdubeyy23@gmail.com</h3>
                <hr/>
            </div>
        )
    }
}

export default UserClass;