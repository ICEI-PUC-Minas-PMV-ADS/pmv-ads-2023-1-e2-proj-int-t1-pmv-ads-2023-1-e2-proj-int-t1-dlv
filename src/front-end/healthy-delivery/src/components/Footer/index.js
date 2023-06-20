import twitter from "../../images/twitter.png"
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"

import FooterStyle from "./style";

const Footer = () => {

    return(
        <FooterStyle>
            <div className="footer-bar"> 
                <div className="social-media">
                    <a href="#">
                        <img  src={twitter} />
                    </a>
                    <a href="#">
                        <img  src={facebook}/>
                    </a>
                    <a href="#">
                        <img  src={instagram}/>
                    </a>
                </div>
            </div>
        </FooterStyle>
    )
};

export default Footer;