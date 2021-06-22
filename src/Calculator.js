import React, {Component} from 'react'

export default class Calculator extends Component {
    
    constructor(props){
        super()
        this.state = {
            input1: 0,
            input2: 0,
            results: 0
        }
    }

changeFirstValue = (e) => { 
        const firstValue = e.target.value
       this.setState({
           input1: firstValue
       })
    }

changeSecondValue = (e) => {
    const secondValue = e.target.value
    this.setState({
        input2: secondValue
    })
}

sumValues = () => {
    let sum = parseFloat(this.state.input1) + parseFloat(this.state.input2)
    this.setState({
        results: sum
    })
}

    render(){

       return ( 

       <div className="container">
        <h1 style={{fontSize: '62px'}}>Add with React!</h1>
        <div className="add">
            <input type="text" onChange={this.changeFirstValue} />
            <span style={{fontSize: '62px'}}>+</span>
            <input style={{marginBottom: '23px'}} type="text" onChange={this.changeSecondValue} />
            <button onClick={this.sumValues}><span class="operator" style={{
padding: '12px'}}>=</span></button>
            {/* <h2>Addition results go here!</h2> */}<br></br>
            <span class="result">{this.state.results}</span>
            </div>
        </div>

       )
    }
}