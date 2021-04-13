import "./AboutProject.css";

function AboutProject() {

    return (
    <div className ="aboutproject">
        <div className="aboutproject__container">
            <p className="aboutproject__text">О проекте</p>
            <div className="aboutproject__container-line" />
            <div className="aboutproject__text-container">
                <div className="aboutproject__text-container__text">
                    <p className="aboutproject__text-container__header">Дипломный проект включал 5 этапов</p>
                    <p className="aboutproject__text-container__words">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutproject__text-container__text">
                    <p className="aboutproject__text-container__header aboutproject__text-container__words_deadlines">На выполнение диплома ушло 5 недель</p>
                    <p className="aboutproject__text-container__words">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="aboutproject__progress-bar">
                <div className="aboutproject__progress-bar_backend">
                    <p className="aboutproject__progress-bar_text aboutproject__progress-bar_text_backend">1 неделя</p> 
                </div>
                <div className="aboutproject__progress-bar_frontend">
                    <p className="aboutproject__progress-bar_text">4 недели</p>
                </div>
            </div>
            <div className="aboutproject__captions">
                <div className="aboutproject__captions_backend">
                    <p className="aboutproject__captions_text">Back-end</p> 
                </div>
                <div className="aboutproject__captions_frontend">
                    <p className="aboutproject__captions_text">Front-end</p>
                </div>
            </div>
        </div>
    </div>
        );
    }
    export default AboutProject;