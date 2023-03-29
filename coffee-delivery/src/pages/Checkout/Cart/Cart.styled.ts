import styled from 'styled-components'

export const CartContainer = styled.div``

export const CartList = styled.ul`
  list-style: none;
`

export const CartItem = styled.li``

export const InfoItemContainer = styled.div`
  display: flex;
`

export const Amount = styled.p``

export const ActionsContainer = styled.div`
  display: block;
  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const ButtonRemove = styled.button`
  border: none;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 0.375rem;

  svg {
    margin-right: 0.25rem;
  }
`
