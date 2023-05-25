import styled from 'styled-components/native'

export const TextContainer = styled.Text`
    font-size: 36px;
    color: ${({theme}) => theme.colors.black2};
    display: flex;
    justify-content: center;
    align-items:center;
    font-family: ${({family}) => family==='proximaNovaLightItalic'?'proximaNovaLightItalic':family==='proximaNovaRegular'?'proximaNovaRegular':family==='proximaNovaLight'?'proximaNovaLight':family==='proximaNovaSemiBold'?'proximaNovaSemiBold':family==='proximaNovaRegularItalic'?'proximaNovaRegularItalic':'proximaNovaRegular'};
`

