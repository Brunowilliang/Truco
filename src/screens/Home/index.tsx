import React, { useState } from 'react';
import { StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native'

import { Counter } from '../../components/Counter';

import { Container, Content, Divider, Span } from './styles';

export function Home(){
  

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Content>

          <Counter/>
            <Divider />
          <Counter/>

        </Content>

        <Span>Developed by Bruno Garcia</Span>
      </Container>
    </TouchableWithoutFeedback>
    </>
  );
}