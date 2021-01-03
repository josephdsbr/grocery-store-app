import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Background,
  Container,
  Content,
  ForwardButton,
  Logo,
  SubTitle,
  Title,
  ButtonText,
} from './styles';

interface OnBoardingScreenProps {
  navigation: StackNavigationProp;
}

const OnBoarding: React.FC<OnBoardingScreenProps> = (props) => {
  const {navigation} = props;
  return (
    <Container>
      <Background source={require('../../assets/get-started-bg.png')}>
        <Content>
          <Logo />
          <Title>Welcome to our Store</Title>
          <SubTitle>Get your groceries in as fast as one hour</SubTitle>
          <ForwardButton onPress={() => navigation.push('SignIn')}>
            <ButtonText>Get Started</ButtonText>
          </ForwardButton>
        </Content>
      </Background>
    </Container>
  );
};

export default OnBoarding;
