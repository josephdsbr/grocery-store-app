import React from 'react';
import {
  ActionContent,
  BagImage,
  Container,
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
      <Title>Get your groceries with nectar</Title>
      <Input />
      <SubTitle>Or connect with Social Media</SubTitle>
      <ActionContent>
        <GoogleSignInBtn type="google" title="Continue with Google" button />
        <FacebookSignInBtn
          type="facebook"
          title="Continue with Facebook"
          button
        />
      </ActionContent>
    </Container>
  );
};

export default SignIn;
