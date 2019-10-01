import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    flex-direction: row;
    align-items: center;
    background-color: #FFF;
    width: 100%;
    height: 44px;
    border-radius: 22px;
    border: solid 1px rgba(0, 0, 0, 0.1);
`;

export const ImageSearch = styled.Image`
    margin-left: 15px;
    height: 20px;
    width: 20px;
`;

export const FieldSearch = styled.TextInput`
    flex: 1;
    width: 100%;
    padding-left: 13px;
    padding-right: 13px;
    margin-right: 35px;
`;
