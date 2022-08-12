import styled from 'styled-components'

export const IntroductionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-left: 0;

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;

    figure img {
      width: 28.5rem;
      height: 25.25rem;

      margin-top: 4rem;
    }
  }
`

export const MainText = styled.div`
  h1 {
    font-family: ${(props) => props.theme.fonts.title}, cursive;
    font-size: ${(props) => props.theme['text-sizes']['title-xl']};
    line-height: 130%;
    color: ${(props) => props.theme.colors.title};
  }

  p {
    font-family: ${(props) => props.theme.fonts.regular}, sans-serif;
    font-size: ${(props) => props.theme['text-sizes']['text-regular-l']};
    color: ${(props) => props.theme.colors.subtitle};
    line-height: 130%;

    margin: 1rem 0 4.125rem 0;
  }
`

export const ServicesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
