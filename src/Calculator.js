import React from 'react'
import {useState} from 'react'


export default function Calculator(){

const [count, setCount] = useState({
    changeFirstValue: 0,
    changeSecondValue: 0

})


function changeFirstValue(e) { 
const firstValue = e.target.value
setState({
    input1: firstValue
})
}

function changeSecondValue(e) {
    const secondValue = e.target.value
    setState({
        input2: secondValue
    })
}

function sumValues(){
    let sum = parseFloat(state.input1) + parseFloat(state.input2)
    setState({
        results: sum
    })
}

       return ( 

       <div className="container">
        <h1>Add with React!</h1>
            <div>
                <input type="text" onChange={count.changeFirstValue} />+
                <input type="text" onChange={count.changeSecondValue} />
                <button onClick={sumValues}>=</button>
                {state.results}
            </div>
        </div>

       )
}



// export default class Calculator extends Component {
    
// constructor(props){
//     super()
//     this.state = {
//         input1: 0,
//         input2: 0,
//         results: ''
//     }
// }

// changeFirstValue = (e) => { 
//         const firstValue = e.target.value
//        this.setState({
//            input1: firstValue
//        })
//     }

// changeSecondValue = (e) => {
//     const secondValue = e.target.value
//     this.setState({
//         input2: secondValue
//     })
// }

// sumValues = () => {
//     let sum = parseFloat(this.state.input1) + parseFloat(this.state.input2)
//     this.setState({
//         results: sum
//     })
// }

//     render(){

//        return ( 

//        <div className="container">
//         <h1 style={{fontSize: '62px'}}>Add with React!</h1>
//         <div>
//             <input style={{border: 'none', outline: 'none'}} type="text" onChange={this.changeFirstValue} />
//             <span style={{fontSize: '62px', fontWeight: 'bold', marginLeft: '12px'}}>+</span>
//             <input style={{marginBottom: '23px', border: 'none', outline: 'none'}} type="text" onChange={this.changeSecondValue} />
//             <button onClick={this.sumValues} style={{backgroundColor: '#b7b7a4', color: 'white', border: 'none', marginLeft: '12px'}}><span style={{
// padding: '12px', fontSize: '52px', fontWeight: 'bold'}}>=</span></button>
//             <span style={{fontSize: '62px', paddingLeft: '23px'}}>{this.state.results}</span>
//             </div>
//         </div>

//        )
//     }
// }