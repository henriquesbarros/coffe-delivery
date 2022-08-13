import styled from 'styled-components'

export const AddressInputsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  margin-top: 2rem;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media (max-width: 390px) {
    grid-template-columns: 19.5rem 5rem;

    .cep {
      grid-column: span 2;
      max-width: 12.5rem;
    }

    .street {
      grid-column: span 1;
    }

    .complement {
      grid-column: span 2;
    }

    .district {
      grid-column: span 2;
    }
  }
`
