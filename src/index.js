import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import './css/main.css'

const element = <App /> 

ReactDom.render(element,document.getElementById('root'))