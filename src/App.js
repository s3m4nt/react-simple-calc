import React, {Component} from 'react'
import './App.css'
import Calculator from './Calculator'

export default class App extends Component {

constructor(props){
  super()
  this.state = {}
}

render () {
  return(
    <Calculator/>
  )
}

}
