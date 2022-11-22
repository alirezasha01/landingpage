import React from "react";
import Container from "../../hoc/Container";
import About from "./About/About";
import ContentWeb from "./ContentWeb/ContentWeb";
import Language from "./Language/Language";
import Terms from "./Terms/Terms";
import "./Footer.css"

const Footer = () =>{
    return(
        <Container>
            <About/>
            <ContentWeb/>
            <Terms/>
            <Language/>
        </Container>
    )
}

export default Footer;