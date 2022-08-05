import React from 'react'
import { BoxTitleContainer, TitleAndSubtitle } from './styles'

interface BoxTitleProps {
  icon: React.ReactNode
  sectionTitle: string
  sectionSubtitle: string
}

export function BoxTitle({
  icon,
  sectionTitle,
  sectionSubtitle,
}: BoxTitleProps) {
  return (
    <BoxTitleContainer>
      <div>{icon}</div>
      <TitleAndSubtitle>
        <p>{sectionTitle}</p>
        <p>{sectionSubtitle}</p>
      </TitleAndSubtitle>
    </BoxTitleContainer>
  )
}
