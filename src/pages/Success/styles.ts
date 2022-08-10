import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin-top: 5rem;
`
export const ConfirmationFeedbackTitles = styled.div`
  h1 {
    font-family: ${(props) => props.theme.fonts.title};
    font-size: ${(props) => props.theme['text-sizes']['title-l']};
    color: ${(props) => props.theme.colors['yellow-dark']};
    line-height: 130%;
  }

  p {
    font-size: ${(props) => props.theme['text-sizes']['text-bold-l']};
    color: ${(props) => props.theme.colors.subtitle};
  }

  margin-bottom: 2.5rem;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DeliveryInfos = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme.colors['yellow-dark']};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;

  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`

export const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconWrapperProps {
  variant: 'purple' | 'yellow' | 'yellow-dark'
}

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  background: ${(props) => props.theme.colors[`${props.variant}`]};
  border-radius: 50%;

  svg {
    color: ${(props) => props.theme.colors.white};
  }
`
