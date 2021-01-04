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
import {connect, useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import { signInRequest } from '../../store/modules/auth/auth.actions'

const SignIn: React.FC = () => {
  const auth = useSelector((state: ApplicationState) => state.auth);
  const dispatch = useDispatch();
  return (
    <Container>
      <BagImage source={require('../../assets/food-bag.png')} />
      <Content>
        <Title>Get your groceries with nectar</Title>
        <Input keyboardType="numeric" mask={'([00]) 9 [0000]-[0000]'} />
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

const mapStateToProps = (state: ApplicationState) => ({
  auth: state.auth,
});

export default connect()(SignIn);
