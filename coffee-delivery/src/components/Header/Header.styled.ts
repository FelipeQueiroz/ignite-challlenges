import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  margin-bottom: 5.8rem;

  .logo {
    width: 85px;
    height: 40px;
    cursor: pointer;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Location = styled.div`
  margin-right: 0.75rem;
  background-color: ${(props) => props.theme['purple-light']};
  padding: 0.5rem;
  align-items: center;
  display: flex;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme['purple-dark']};
`
