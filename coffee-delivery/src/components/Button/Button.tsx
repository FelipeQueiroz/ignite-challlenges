import { ButtonContainer } from './Button.styled'
import React from 'react'

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'icon-primary' | 'icon-secondary'
  disabled?: boolean
}
export function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...props}>
      {children}
    </ButtonContainer>
  )
}
