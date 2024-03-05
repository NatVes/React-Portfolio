import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Footer() {
    return (
        <div className="footer">   
            <h4>GET IN TOUCH</h4>
            <div className="col d-flex justify-content-evenly mt-4">
                <a class="text-decoration-none" href="mailto:nat.veselowa2010@yandex.ru" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </a>
                <a class="text-decoration-none" href="https://github.com/NatVes" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
                <a class="text-decoration-none" href="https://www.linkedin.com/in/ves-na" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
            </div>     
            
        </div>
    )
}

export default Footer;