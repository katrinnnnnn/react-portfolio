import vk from "../../img/icons/vk.svg";
import instagram from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import git from  "../../img/icons/gitHub.svg";
import "./styleFooter.css";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://github.com/katrinnnnnn" target="_blank" rel="noreferrer"><img src={git}  alt="Link"/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;