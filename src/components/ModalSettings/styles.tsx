import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';


export const BackgrounOpactity = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.blackOpacity};
`;

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  height: 350px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 60px 20px 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
`;


export const Footer = styled.View``;


export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
`;


export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;


export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

