import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: center;
`;
