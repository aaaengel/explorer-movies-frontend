import "./NavTab.css"

function NavTab() {

    return (
    <div className ="navtab">
        <nav className="navtab__link-container">
            <a className="navtab__link-container_link" href="#">О проекте</a>
            <a className="navtab__link-container_link" href="#">Технологии</a>
            <a className="navtab__link-container_link" href="#">Студент</a>
        </nav>
    </div>
        );
    }
    
    export default NavTab;