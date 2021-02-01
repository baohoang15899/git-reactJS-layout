import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../../css/main.css'

export default class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            menuStatus : false
        }
        this.handleClick = this.handleClick.bind(this)
        this.preventDefault = this.preventDefault.bind(this)
    }

    handleClick(){
        this.setState(prev =>{
            return {menuStatus: !prev.menuStatus}
        })
    }

    preventDefault(e){
        e.preventDefault()
        this.setState(prev =>{
            return {menuStatus: !prev.menuStatus}
        })
    }

    render(){
        return (
            <div className="header">
                <div className="container">
                    <div className="header__content">
                        <a href="index.html" className="header__content-logo">
                            Start Bootstrap
                        </a>
                        <div className="header__content-mobile">
                            <FontAwesomeIcon icon={faBars} onClick = {this.handleClick}/>   
                        </div>
                        <ul className = {this.state.menuStatus ? "header__content-menu show" : "header__content-menu"} >
                            <li className="header__content-item"><a href="" className="header__content-link" onClick={this.preventDefault}>Sign In</a></li>
                            <li className="header__content-item"><a href="" className="header__content-link" onClick={this.preventDefault}>Log In</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}