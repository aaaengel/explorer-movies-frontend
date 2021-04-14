import "./Portfolio.css";
import arrow from "../../images/arrow.svg"

function Portfolio() {

    return (
    <div className ="portfolio">
        <div className="portfolio__container">
            <p className="portfolio__header">Портфолио</p>
            <div className="portfolio__container__links">
                <div className="portfolio__container__link">
                    <a className="portfolio__container__link_text" href="https://github.com/aaaengel/how-to-learn" target="_blank">Статичный сайт</a>
                    <a className="portfolio__container__link_text" href="https://github.com/aaaengel/how-to-learn" target="_blank"><img src={arrow} alt="стрелка" /></a>
                </div>
                <div className="portfolio__container-line" />
                <div className="portfolio__container__link">
                    <a className="portfolio__container__link_text" href="https://github.com/aaaengel/russian-travel" target="_blank">Адаптивный сайт</a>
                    <a className="portfolio__container__link_text" href="https://github.com/aaaengel/russian-travel " target="_blank"><img src={arrow} alt="стрелка" /></a>
                </div>
                <div className="portfolio__container-line" />
                <div className="portfolio__container__link">
                    <a className="portfolio__container__link_text" href="https://github.com/aaaengel/mesto-react-api-full" target="_blank">Одностраничное приложение</a>
                    <a className="portfolio__container__link_text" href="https://github.com/aaaengel/mesto-react-api-full" target="_blank"><img src={arrow} alt="стрелка" /></a>
                </div>
            </div>
        </div>
    </div>
        );
    }
    
    export default Portfolio;