import "./AboutMe.css";
import myAvatar from "../../images/myAvatar.jpg"

function AboutMe() {

    return (
    <div className ="aboutme">
        <div className="aboutme__container">
        <p className="aboutme__text">Студент</p>
        <div className="aboutme__container-line" />
        <div className="aboutme__container_description-and-photo">
            <img className="aboutme__container_image" src={myAvatar} alt="me" />
            <div className="aboutme__container_description">
                <h2 className="aboutme__container_description_name">Данила</h2>
                <p className="aboutme__container_description_caption">Фронтенд-разработчик, 16 лет</p>
                <p className="aboutme__container_description_text">Меня зовут Данила, я учащийся 10-го класса. Идея стать программистом пришла ко 
                мне летом 2020-го года, и я решил не медлить и поступил на курс веб-разработки. Таким образом я собираюсь себе облегчить задачу в становлении профессионалом в будущем. Помимо этого я занимаюсь баскетболом и стараюсь
                успевать в шкое по всем предметамю. Хочу сдать егэ на высший балл и поступить в престижный ВУЗ.</p>
                <div className="aboutme__container_description_links">
                    <a className="aboutme__container_description_link" href="https://vk.com/dengel1999">VK</a>
                    <a className="aboutme__container_description_link" href="https://github.com/aaaengel?tab=repositories">Github</a>
                </div>
            </div>
        </div>
        </div>
    </div>
        );
    }
    
    export default AboutMe;