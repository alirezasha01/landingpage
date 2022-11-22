import React from "react";
import Container from "../../hoc/Container";
import Country from "./Country/Country";
import Explore from "./Explore/Explore";

const World = () =>{
    return(
        <Container>
            <Explore/>
            <Country/>
        </Container>
    )
}

export default World;