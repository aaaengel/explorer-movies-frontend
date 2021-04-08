import "./NavTab.css"
import { NavLink } from "react-router-dom"

function NavTab() {

    return (
    <div className ="navtab">
        <nav className="navtab__link-container">
            <div className="navtab__link-container_block">
                <a className="navtab__link-container_link" href="#aboutproject">О проекте</a>
            </div>
            <div className="navtab__link-container_block">
                <a className="navtab__link-container_link" href="#techs">Технологии</a>
            </div>
            <div className="navtab__link-container_block">
                <a className="navtab__link-container_link" href="#aboutme">Студент</a>
            </div>
        </nav>
    </div>
        );
    }
    
    export default NavTab;