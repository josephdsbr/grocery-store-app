import styled from 'styled-components/native';
import ReducedLogo from '../../assets/reduced-logo.svg';

export const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const Content = styled.View`
  height: 50%;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled(ReducedLogo)`
  min-height: 12.75%;
`;

const Color = styled.Text`
  color: #ffffff;
`;

export const Title = styled(Color)`
  font-size: 45px;
  text-align: center;
  width: 62%;
  font-family: 'Gilroy-Bold';
`;

export const SubTitle = styled(Color)``;

export const ForwardButton = styled.TouchableOpacity`
  width: 85%;
  height: 15%;
  background: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const ButtonText = styled(Color)`
  font-size: 16px;
`;
