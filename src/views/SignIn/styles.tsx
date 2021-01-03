import styled from 'styled-components/native';
import {SocialIcon} from 'react-native-elements';

export const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
`;

export const BagImage = styled.Image`
  height: 41.75%;
  width: 100%;
`;

export const Content = styled.View`
  height: 58.25%;
  padding: 5.48% 5.93%;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 23px;
  width: 60.86%;
`;

export const Input = styled.TextInput`
  font-size: 17px;
  border-bottom-width: 1px;
  border-bottom-color: #e2e2e2;
`;

export const SubTitle = styled.Text`
  align-self: center;
  color: #828282;
  font-size: 13px;
`;

export const ActionContent = styled.View`
  height: 50%;
`;

const Button = styled(SocialIcon)`
  border-radius: 20px;
  height: 30%;
  font-size: 16px;
`;

export const GoogleSignInBtn = styled(Button)``;

export const FacebookSignInBtn = styled(Button)``;
