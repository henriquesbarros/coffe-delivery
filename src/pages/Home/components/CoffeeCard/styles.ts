import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme.colors.card};

  figure {
    margin-top: -1.25rem;

    img {
      height: 7.5rem;
      width: 7.5rem;
    }
  }
`

export const CoffeeTags = styled.div`
  padding-top: 0.75rem;
  display: flex;
  gap: 0.25rem;

  p {
    background: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-size: ${(props) => props.theme['text-sizes']['text-bold-s']};
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    font-weight: 700;
  }
`

export const CoffeeName = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme['text-sizes']['title-s']};
  color: ${(props) => props.theme.colors.subtitle};
  line-height: 130%;
  padding: 1rem 0 0.5rem 0;
`

export const CoffeeDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme['text-sizes']['text-regular-s']};
  color: ${(props) => props.theme.colors.label};
  line-height: 130%;
  text-align: center;
  padding: 0 1.25rem 2rem 1.25rem;
`

export const AddToCartContainer = styled.div`
  display: flex;
`

export const CoffeePrice = styled.span`
  display: flex;
  align-items: center;

  margin-right: 1.5rem;

  p {
    font-size: ${(props) => props.theme['text-sizes']['text-regular-s']};
  }

  span {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: ${(props) => props.theme['text-sizes']['title-m']};

    margin-left: 0.2rem;
  }
`
