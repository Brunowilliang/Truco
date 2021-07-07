import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 150px;
  align-items: center;
`;

export const Score = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(70)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 0px;
`;

export const NameLabel = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;


export const NameInput = styled.TextInput`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContentButton = styled.View`
  width: 150px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtonZerar = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold}
`;

export const Footer = styled.View`
  width: 150px;
`;