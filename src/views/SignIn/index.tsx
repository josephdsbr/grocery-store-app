import React from 'react';
import {
  ActionContent,
  BagImage,
  Container,
  Content,
  FacebookSignInBtn,
  GoogleSignInBtn,
  Input,
  SubTitle,
  Title,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <BagImage source={require('../../assets/food-bag.png')} />
      <Content>
        <Title>Get your groceries with nectar</Title>
        <Input keyboardType="numeric" />
        <SubTitle>Or connect with Social Media</SubTitle>
        <ActionContent>
          <GoogleSignInBtn type="google" title="Continue with Google" button />
          <FacebookSignInBtn
            type="facebook"
            title="Continue with Facebook"
            button
          />
        </ActionContent>
      </Content>
    </Container>
  );
};

export default SignIn;
