import "./styleNavbar.css";
import { NavLink } from "react-router-dom";
import ButtonDarkMode from "./buttonMode/BtnDarkMode";


const Navbar = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const unactiveLink = "nav-list__link"


    return(
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to={"/"} className="logo">
                     <strong>Portfolio</strong>
                    </NavLink>
    
                   <ButtonDarkMode/>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                         <NavLink to={"/"} className={({isActive}) => isActive ? activeLink : unactiveLink}>Home</NavLink>
                        </li>
                        
                        <li className="nav-list__item">
                         <NavLink to={"/projects"} className={({isActive}) => isActive ? activeLink : unactiveLink}>Projects</NavLink>
                        </li>

                        <li className="nav-list__item">
                         <NavLink to={"/contacts"} className={({isActive}) => isActive ? activeLink : unactiveLink}>Contacts</NavLink>
                        </li>                    
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

