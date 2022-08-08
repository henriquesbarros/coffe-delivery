import styled from 'styled-components'

export const BoxTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const TitleAndSubtitle = styled.div`
  p:first-child {
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${(props) => props.theme['text-sizes']['text-bold-m']};
    color: ${(props) => props.theme.colors.subtitle};
    line-height: 130%;

    margin-bottom: 0.125rem;
  }

  p:last-child {
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: ${(props) => props.theme['text-sizes']['text-regular-s']};
    color: ${(props) => props.theme.colors.text};
    line-height: 130%;
  }
`
