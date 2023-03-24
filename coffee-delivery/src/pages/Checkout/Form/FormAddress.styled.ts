import styled from 'styled-components'

export const FormAddressContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 0.375rem;
  max-width: 40rem;
  margin-top: 1rem;
`

export const HeaderForm = styled.div`
  display: flex;
  align-items: flex-start;
`

export const TitleAddress = styled.p`
  display: grid;
  margin-left: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']} !important;
  font-size: 1rem;
  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const Form = styled.form`
  display: grid;
  margin-top: 1rem;

  #complement {
    width: 55.8%;
  }

  #city,
  #district,
  #number,
  #zipCode {
    width: 42%;
  }
  #city,
  #complement,
  #uf {
    margin-left: 0.75rem;
  }
  #uf {
    width: 11.5%;
  }
`

export const Input = styled.input`
  margin: 0.7rem 0;
  padding: 0.75rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
`
