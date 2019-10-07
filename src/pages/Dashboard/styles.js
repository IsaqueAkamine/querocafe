import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #ded;
    justify-content: center;
    align-items: stretch;
`;

export const Body = styled.ScrollView`
    margin: 0 24px 0 24px;
    backgroundColor: #F5F5F5;
`;

export const SearchContainer = styled.View`
    marginTop: 16px;
    marginBottom: 16px;
`;

// export const CardGroup = styled.View`
export const CardGroup = styled.TouchableOpacity`
    width: 100%;
    border-radius: 4px;
    border: solid 1px #AAA;
    padding: 10px;
    marginBottom: 16px;
`; // border: solid 1px #dee0e2;

export const CardGroupText = styled.TextInput`
    width: 100%;
    padding-left: 13px;
    padding-right: 13px;
    margin-right: 35px;
    color: #fff;
`;