import styled from 'styled-components'
import { ThemeType } from '../../../../@types/styles'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 40%;

    h3 {
      margin-top: 1rem;
    }
  }
`
export const HomeImage = styled.img`
  width: 30rem;
  height: 22.5rem;
`

export const FeatureList = styled.ul`
  list-style: none;
  columns: 2 auto;
  margin-top: 4.125rem;
`

export const FeatureItem = styled.li`
  margin-bottom: 1.25rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`

interface IStyledIcon {
  color: keyof ThemeType
}
export const StyledIcon = styled.span<IStyledIcon>`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 2rem;
  background-color: ${(props) => props.color && props.theme[props.color]};
`
