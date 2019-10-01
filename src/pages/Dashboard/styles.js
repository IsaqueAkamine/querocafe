import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    padding: 0 24px 0 24px;
    background-color: #ded;
`;

export const SearchContainer = styled.View`
    margin-top: 16px;
`;

// export const CardGroup = styled.View`
export const CardGroup = styled.TouchableOpacity`
    margin-top: 24px;
    width: 100%;
    height: 150px;
    border-radius: 4px;
    border: solid 1px #AAA;
    padding: 10px;
`; // border: solid 1px #dee0e2;

export const CardGroupText = styled.TextInput`
    flex: 1;
    width: 100%;
    padding-left: 13px;
    padding-right: 13px;
    margin-right: 35px;
    color: #fff;
`;