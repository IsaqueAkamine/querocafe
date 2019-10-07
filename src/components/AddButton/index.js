import React from 'react';

import {
    Container,
    FloatingButton
} from './styles';

export default function Addbutton() {
    return (
        // onPress={this.SampleFunction}
        <Container activeOpacity={0.5} >
            <FloatingButton source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png' }} />
        </Container>
    );
}

