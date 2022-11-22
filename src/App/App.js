import React from "react";
import Container from "../hoc/Container";
import Headers from "../components/Headers/Headers";
import World from "../components/World/World";
import Travel from "../components/Travel/Travel";
import Popular from "../components/Popular/Popular";
import Blog from "../components/Blog/Blog";
import Comments from "../components/Comments/Comments";
import StartTravel from "../components/StartTravel/StartTravel";
import Footer from "../components/Footer/Footer";

const App = () =>{
    return(
        <Container>
        <Headers/>
        <World/>
        <Travel/>
        <Popular/>
        <Blog/>
        <Comments/>
        <StartTravel/>
        <Footer/>
        </Container>
    )
};

export default App;