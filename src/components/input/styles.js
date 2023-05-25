import styled from 'styled-components/native'

export const Container = styled.TextInput`
  width: 100%;
  height: 72px;
  font-size: 16px;
  color: #000000;
  background-color: #F8F8FA;
  padding: 0px 15px;
  font-family: proximaNovaRegular;
  border: ${({error=''})=> error.length? '1px solid #EE0F1C': '1px solid rgba(82, 94, 125, 0.3)' };
  border-radius: 10px;
`

