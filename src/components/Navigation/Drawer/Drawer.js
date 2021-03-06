import React, {Component} from 'react'
import classes from './Drawer.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import {NavLink} from 'react-router-dom'
//import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false}
] 
class Drawer extends Component {

    Clickhandler = () => {
        this.props.onClose()
    }

    renderLinks(){
        return links.map((link,index)=>{
            return (
                <li key = {index}>
                    <NavLink
                    to = {link.to}
                    exact = {link.exact}
                    activeClassName = {classes.active} 
                    onClick = {this.Clickhandler}                   
                    >{link.label}</NavLink>
                </li>
            )
        })
    }
    render() {
        const cls = [classes.Drawer]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        return(
            <React.Fragment>
            <nav className = {cls.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
            {this.props.isOpen?<BackDrop onClick = {this.props.onClose} />:null}
            </React.Fragment>
        )

    }
        
}

export default Drawer