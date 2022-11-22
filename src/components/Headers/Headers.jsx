import React from "react";
import Menu from "./Menu/Menu";
import Text from "./Text/Text";
import SearchBox from "./SearchBox/SearchBox";
import Container from "../../hoc/Container";

const Headers = () => {
    return (
        <Container>
        <Menu/>
        <Text/>
        <SearchBox/>
        </Container>
    )
}

export default Headers;