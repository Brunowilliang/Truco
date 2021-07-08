import React from 'react';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BackgrounOpactity, Container, Header, Title, Footer, CloseButton, Button, ButtonTitle } from './styles';
import { useTheme } from 'styled-components';

interface Props {
  closeModalSettings: () => void;
}

function Donation(){
  Alert.alert(
    'Para doar é só fazer um PIX',
    'Sirlene A. B. Garcia | 097.659.228-25',
    [
      { text: '❤️', onPress: () => {} }
    ]
  );
}

export default function ModalSettings({ closeModalSettings }: Props) {
  const theme = useTheme();

  return (
    <BackgrounOpactity>
      <Container>
        <CloseButton onPress={closeModalSettings}>
          <Ionicons name="close-sharp" size={30} color={theme.colors.white} />
        </CloseButton>
        <Header>
          <Title>
            Esse App foi desenvolvido{'\n'}
            com muito amor por um{'\n'}
            jovem programador.
          </Title>
          <Button>
            <ButtonTitle onPress={Donation}>faça uma doação ❤️</ButtonTitle>
          </Button>
        </Header>
        <Footer>
          <Title>Developed by Bruno Garcia</Title>
        </Footer>
      </Container>
    </BackgrounOpactity>
  );
}