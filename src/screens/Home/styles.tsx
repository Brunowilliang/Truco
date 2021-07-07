import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px 20px;
  justify-content: space-between;
  align-items: center;
`;


export const Content = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;


export const Divider = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primaryOpacity};
`;

export const Span = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;