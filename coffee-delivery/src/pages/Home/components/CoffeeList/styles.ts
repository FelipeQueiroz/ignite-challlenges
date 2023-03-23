import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  margin: 4rem 0;
`

export const SectionTitle = styled.h2`
  margin-bottom: 3.375rem;
`

export const CoffeeContainerList = styled.ul`
  list-style: none;
  columns: 4 auto;
  gap: 1rem;
`

export const CoffeeContainerItem = styled.li`
  display: inline-grid;
  justify-content: center;
  position: relative;
  align-items: center;
  text-align: center;
  margin: 2.5rem 0;
  padding: 0 1.25rem;

  background-color: ${(props) => props.theme['base-card']};

  width: 16rem;
  height: 19.375rem;

  border-radius: 0.375rem 2.25rem;
`

export const CoffeeImage = styled.img`
  position: absolute;
  top: -2rem;
  left: 50%;
  margin-left: -60px;
`

export const TagsContainer = styled.ul`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  list-style: none;
`

export const Tag = styled.li`
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  font-weight: 700;
  border-radius: 2rem;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
export const CoffeeTitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1rem;
`
export const CoffeeDescription = styled.p`
  color: ${(props) => props.theme['base-label']} !important;
  font-size: 0.875rem;
`
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Amount = styled.span``