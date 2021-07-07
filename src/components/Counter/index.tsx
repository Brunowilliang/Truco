import React, { useEffect, useState } from 'react';
import { Alert, Modal } from 'react-native';
import { useTheme } from 'styled-components';
import ModalFinish from '../ModalFinish';

import {
  Container,
  Header,
  Score,
  NameLabel,
  NameInput,
  ContentButton,
  Button,
  Title,
  Footer,
  ButtonZerar,
} from './styles';


export function Counter(){

  const theme = useTheme();
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);
  const [name, setName] = useState('');

  const [ modalFinish, setModalFinish ] = useState(false);

  function handleOpenModalFinish() {
    setModalFinish(true);
  }

  function handleCloseModalFinish() {
    setModalFinish(false);
  }


  function increment1() {
    if (name === '') {
      Alert.alert('Por Favor, informe o nome dos times');
      return;
    }
    setCount( count + 1 );
  }

  function increment3() {
    if (name === '') {
      Alert.alert('Por Favor, informe o nome dos times');
      return;
    }
    setCount( count + 3 );
  }

  function decrement1() {
    if (name === '') {
      Alert.alert('Por Favor, informe o nome dos times');
      return;
    }
    setCount( count - 1 );
  }

  function decrement3() {
    if (name === '') {
      Alert.alert('Por Favor, informe o nome dos times');
      return;
    }
    setCount( count - 3 );
  }

  function reset() {
    if (name === '') {
      Alert.alert('Por Favor, informe o nome dos times');
      return;
    }
    setCount(0);
  }

  useEffect(() => {
    finish();
  }, [count]);

  function finish() {
    if (count >= 12) {
      setCount(12);
      handleOpenModalFinish();
    }
    if (count < 0) {
      setCount(0);
    }
    setResult(count);
  }

  return (
    <Container>
      <Header>
        <Score>{result}</Score>
        <NameLabel>Equipe</NameLabel>
        <NameInput
          returnKeyType="done"
          maxLength={18}
          autoCapitalize="words"
          numberOfLines={1}
          placeholder="ex: Bruno e Mario"
          placeholderTextColor={theme.colors.primaryOpacity}
          onChangeText={text => setName(text)}
          value={name}
        >
        </NameInput>
      </Header>

      <ContentButton>
        <Button onPress={decrement3}>
          <Title>-3</Title>
        </Button>
        <Button onPress={increment3}>
          <Title>+3</Title>
        </Button>
      </ContentButton>

      <ContentButton>
        <Button onPress={decrement1}>
          <Title>-1</Title>
        </Button>
        <Button onPress={increment1}>
          <Title>+1</Title>
        </Button>
      </ContentButton>

      <Footer>
        <ButtonZerar onPress={reset}>
          <Title>Zerar</Title>
        </ButtonZerar>
      </Footer>

      <Modal statusBarTranslucent={true} visible={modalFinish} animationType="fade" >
        <ModalFinish name={name} closeModalFinish={handleCloseModalFinish} />
      </Modal>
    </Container>
  );
}