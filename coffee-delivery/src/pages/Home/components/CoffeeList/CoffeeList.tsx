import { CoffeeContainer, CoffeeContainerList, SectionTitle } from './styles'
import { coffees } from '../../../../mock/coffees.mock'
import { Coffee } from './Coffee'

export function CoffeeList() {
  return (
    <CoffeeContainer>
      <SectionTitle>Nossos cafés</SectionTitle>
      <CoffeeContainerList>
        {coffees.map((coffee) => {
          return <Coffee coffee={coffee} key={coffee.id} />
        })}
      </CoffeeContainerList>
    </CoffeeContainer>
  )
}
