import React from "react";
import Container from "../../hoc/Container";
import Country from "./Country/Country";
import Explore from "./Explore/Explore";
import "./World.css"

const World = () =>{
    return(
        <Container>
            <Explore/>
            <Country/>
        </Container>
    )
}

export default World;