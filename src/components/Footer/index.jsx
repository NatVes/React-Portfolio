import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Footer() {
    return (
        <div className="footer">   
            <h4>Get in touch</h4>
            <div className="col d-flex justify-content-evenly">
                <a class="text-decoration-none" href="mailto:nat.veselowa2010@yandex.ru" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a class="text-decoration-none" href="mailto:nat.veselowa2010@yandex.ru" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a class="text-decoration-none" href="mailto:nat.veselowa2010@yandex.ru" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>     
            
        </div>
    )
}

export default Footer;