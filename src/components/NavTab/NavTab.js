import "./NavTab.css"

function NavTab() {

    return (
    <div className ="navtab">
        <nav className="navtab__link-container">
            <a className="navtab__link-container_link" href="#aboutproject">О проекте</a>
            <a className="navtab__link-container_link" href="#techs">Технологии</a>
            <a className="navtab__link-container_link" href="#aboutme">Студент</a>
        </nav>
    </div>
        );
    }
    
    export default NavTab;