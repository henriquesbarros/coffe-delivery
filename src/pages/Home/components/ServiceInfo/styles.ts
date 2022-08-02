import styled from 'styled-components'

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface InfoIconProps {
  'bg-color': 'yellow-dark' | 'yellow' | 'text' | 'purple'
}

export const InfoIcon = styled.div<InfoIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;

  background: ${(props) => props.theme.colors[props['bg-color']]};
  svg {
    color: ${(props) => props.theme.colors.white};
  }
`
