import { Container } from './styles'

import { Intro } from './components/Intro/Intro'
import { CoffeeList } from './components/CoffeeList/CoffeeList'

export function Home() {
  return (
    <Container>
      <Intro />
      <CoffeeList />
    </Container>
  )
}
