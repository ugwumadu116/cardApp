import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  min-width: 100px;
  min-height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.moneyWorksPrimary};
  border-radius: 10px;
  width: 100%;
`

