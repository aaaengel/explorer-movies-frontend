import "./Techs.css";

function Techs() {

    return (
    <div className ="techs">
        <div className="techs__container">
            <p className="techs__text">Технологии</p>
            <div className="techs__container-line" />
            <div className="techs__text-container">
                <p className="techs__text-container_header">7 технологий</p>
                <p className="techs__text-container_text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <div className="techs__container__techs">
                <button className="techs__container__techs__item">
                    <a className="techs__container__techs__item__link" href="https://habr.com/ru/company/vdsina/blog/500190/" target="_blank">HTML</a>
                </button>
                <button className="techs__container__techs__item">
                    <a className="techs__container__techs__item__link" href="https://ru.wikipedia.org/wiki/CSS" target="_blank">CSS</a>
                </button>
                <button className="techs__container__techs__item">
                    <a className="techs__container__techs__item__link" href="https://promo.ingate.ru/seo-wikipedia/java-script/" target="_blank">JS</a>
                </button>
                <button className="techs__container__techs__item">
                    <a className="techs__container__techs__item__link" href="https://reactjs.org/" target="_blank">React</a>
                </button>
                <button className="techs__container__techs__item">
                    <a className="techs__container__techs__item__link" href="https://git-scm.com/" target="_blank">Git</a>
                </button>
                <button className="techs__container__techs__item">
                    <a className="techs__container__techs__item__link" href="https://expressjs.com/ru/" target="_blank">Express.js</a>
                </button>
                <button className="techs__container__techs__item">
                    <a className="techs__container__techs__item__link" href="https://www.mongodb.com/" target="_blank">mongoDB</a>
                </button>
            </div>
        </div>
    </div>
        );
    }

export default Techs;