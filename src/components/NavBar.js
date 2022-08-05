import {NavLink} from "react-router-dom";

function NavBar() {
    const activeStyle = {
        color: "red"
    };

    const inactiveStyle = {
        color: "green"
    }

    return (
        <ul>
            <li><NavLink to="/"
                  style={({isActive}) => {return isActive? activeStyle : inactiveStyle}}  
            >Home</NavLink></li>
            <li><NavLink 
                              style={({isActive}) => {return isActive? activeStyle : inactiveStyle}}  
            to="/todo">To Do</NavLink></li>
            <li><NavLink 
                              style={({isActive}) => {return isActive? activeStyle : inactiveStyle}}  
            to="/done">Done</NavLink></li>
        </ul>
    )
}

export default NavBar;