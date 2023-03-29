import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 0.375rem;
  max-width: 40rem;
  margin-top: 1rem;
`

export const HeaderPayment = styled.div`
  display: flex;
  align-items: flex-start;
`

export const TitlePayment = styled.p`
  display: grid;
  margin-left: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']} !important;
  font-size: 1rem;
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ListPayment = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  .selected {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
  li {
    cursor: pointer;
    min-width: 11rem;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};
    padding: 1rem;
    border-radius: 0.375rem;
    label {
      cursor: pointer;
      margin-left: 0.75rem;
      font-size: 0.75rem;
    }
  }
`
