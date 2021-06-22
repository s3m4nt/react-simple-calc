import React, {Component} from 'react'
import './App.css'
import Calculator from './Calculator'

export default class App extends Component {

constructor(props){
//   super()
//   this.state = {}
// }

render () {
  return(
    <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
    <Calculator/>
    </div>
  )
}

}
