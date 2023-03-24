import styled from 'styled-components'

export const CounterContainer = styled.div`
  padding: 0.35rem 0.8rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  width: fit-content;
  button {
    border: none;
    color: ${(props) => props.theme.purple};
    background-color: transparent;
    cursor: pointer;
  }
  p {
    margin: 0 0.5rem;
  }
`

export const MinusButton = styled.button`
  font-size: 1.5rem;
`

export const PlusButton = styled.button`
  font-size: 1.2rem;
`
