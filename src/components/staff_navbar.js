import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class menubar extends Component {
    sign_out_handler = (e) => {
        e.preventDefault()

        localStorage.removeItem('token')
        localStorage.removeItem('uid')
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div>
                <nav class="nav-wrapper">
                    <div className="container">
                        <div className="cnav">
                            <NavLink className="" to="/staff/">Home</NavLink>
                            <NavLink className="" to="/staff/visitor/">Visitor</NavLink>
                            <NavLink className="" to="/staff/librarian/">Librarian</NavLink>
                            <NavLink className="" to="/staff/caffeteria/">Caffeteria</NavLink>
                            <NavLink className="" onClick={this.sign_out_handler} to="/staff/price/">Signout</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(menubar)