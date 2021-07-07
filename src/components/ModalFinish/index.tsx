import React from 'react';
import LottieView from "lottie-react-native";
import TrophyLottie from '../../assets/trophy.json'
import Confeti from '../../assets/confeti.json'

import { Container, Header, Title, Footer, Button, TitleButton } from './styles';

interface Props {
  name: string;
  closeModalFinish: () => void;
}

export default function ModalFinish({ closeModalFinish, name }: Props) {
  return (
    <Container>

      <Header>
        <Title>Parabéns</Title>
        <Title>{name}</Title>
      </Header>

        <LottieView
          source={TrophyLottie}
          autoPlay
          style={{
            height: 800,
            zIndex: 1,
            marginBottom: -50,
            marginTop: -10,
          }}
        />

      <LottieView
        source={Confeti}
        autoPlay
        loop
        style={{
          position: 'absolute',
          height: 900,
          zIndex: 1,
        }}
      />

      <Footer>
        <Button onPress={closeModalFinish}>
          <TitleButton>Continuar Jogo</TitleButton>
        </Button>
      </Footer>
    </Container>
  );
}