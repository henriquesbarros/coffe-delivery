import styled from 'styled-components'

export const ListCoffeesContainer = styled.main`
  padding-top: 2rem;

  > h1 {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: ${(props) => props.theme['text-sizes']['title-l']};
    line-height: 130%;
  }
`

export const ListCoffees = styled.section`
  padding-top: 3.375rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`
