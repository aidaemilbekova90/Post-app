import  React, { Component } from 'react';



class ClassComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        this.inc=this.inc.bind(this);
        this.dec=this.dec.bind(this)
    }

    inc=()=>{
        this.setState({count:this.state.count +1})
    }
    dec=()=>{
        this.setState({count:this.state.count -1})
    }
    render(){
        return(
            <div>
            <h2>{this.state.count}</h2>
            <button onClick={this.inc}>increment</button>
            <button onClick={this.dec}>decrement</button>
            </div>
        )
    }
}

export default ClassComponent