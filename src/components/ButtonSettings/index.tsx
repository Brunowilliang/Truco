import React, { useState } from 'react';

import {  Modal, Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { Container } from './styles';
import ModalSettings from '../ModalSettings';

export function ButtonSettings(){
  const theme = useTheme();

  const [ modalSettings, setModalSettings ] = useState(false);

  function handleOpenModalSettings() {
    setModalSettings(true);
  }

  function handleCloseModalSettings() {
    setModalSettings(false);
  }


  return (
    <Container onPress={handleOpenModalSettings}>
      <Ionicons name="settings-sharp" size={24} color={theme.colors.white} />

      <Modal statusBarTranslucent={true} transparent={true} visible={modalSettings} animationType="fade" >
        <ModalSettings closeModalSettings={handleCloseModalSettings} />
      </Modal>
    </Container>
  );
}