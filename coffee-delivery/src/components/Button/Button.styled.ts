import styled, { css } from 'styled-components'
import { ButtonProps } from './Button'

const variants = {
  primary: css`
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.yellow};
    :hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  `,
  secondary: css`
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};
    :hover {
      background-color: ${(props) => props.theme['base-hover']};
    }
  `,
  'icon-primary': css`
    max-height: 2.375rem;
    max-width: 2.375rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};

    :hover {
      background-color: ${(props) => props.theme.purple};
    }
  `,
  'icon-secondary': css`
    max-height: 2.375rem;
    max-width: 2.375rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    position: relative;

    span {
      position: absolute;
      top: -0.7rem;

      background-color: ${(props) => props.theme['yellow-dark']};
      padding: 0.2rem 0.4rem;
      font-size: 0.75rem;
      border-radius: 1rem;
      color: ${(props) => props.theme.white};
    }
  `,
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100px;
  cursor: pointer;
  border-radius: 0.5rem;
  height: 40px;
  border: none;
  background-color: ${(props) => props.theme['base-button']};

  ${(props) => props.variant && variants[props.variant]}
`
