import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  align-items: center;
  top: 150px;
  z-index: 2;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;


export const Button = styled.TouchableOpacity`
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TitleButton = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Footer = styled.View`
  width: 100%;
  bottom: 150px;
  z-index: 2;
`;

