import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Trail Finder</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item px-2">
                            <NavLink className="nav-Link" exact to="/"><span classname="navLink"> Home </span></NavLink>
                        </li>
                        {/* <li>
                           <p>_</p>
                        </li> */}
                        
                        <li className="nav-item px-2">
                            <NavLink className="nav-Link" to="/about"><span classname="navLink"> About </span></NavLink>
                        </li>
                        <li className="nav-item px-2">
                            <NavLink className="nav-Link" to="/hike"><span classname="navLink"> Hikes </span></NavLink>
                        </li>
                    </ul>
                    {
                        props.isAuth ? 
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/favetrails">My Trails</NavLink>
                            </li>
                            <li className="nav-item">
                                <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
                            </li>
                        </ul>
                        :<ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signup">Create Account</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;