import React from "react";
import { Container, FieldSearch, ImageSearch } from "./styles";
import { Image } from "react-native";
import search from "../../assets/SearchBar/ic-search.png";

export default function SearchBar() {
    return (
        <Container>
            <ImageSearch source={ search } />
            <FieldSearch placeholder="Buscar" />
        </Container>
    );
}