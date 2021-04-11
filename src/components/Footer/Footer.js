import "./Footer.css";

function Footer() {

    return (
    <div className ="footer">
        <div className ="footer__container">
       <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
       <div className="footer__container-line" />
       <div className="footer__container__caption-and-links">
           <p className="footer__container__caption">&#169; 2020</p>
            <div className="footer__container__links">
                <a className="footer__container__link" href="https://praktikum.yandex.ru/profile/web">Яндекс.Практикум</a>
                <a className="footer__container__link" href="https://github.com/aaaengel?tab=repositories">Github</a>
                <a className="footer__container__link" href="https://vk.com/dengel1999">VK</a>
            </div>
       </div>
       </div>
    </div>
        );
    }
    
    export default Footer;