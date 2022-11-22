import React from "react";
import Container from "../../hoc/Container";
import TextBox from "./TextBox/TextBox";
import Tour from "./Tour/Tour";
import "./Popular.css"

const Popular = () =>{
    return(
        <Container>
            <TextBox/>
            <Tour/>
        </Container>
    )
}

export default Popular;