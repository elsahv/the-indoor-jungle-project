import Link from 'next/link'

import {
    Wrapper,
    Section
  } from './styles/Aside.styled'
  
  

const Aside = () => {
  return (
    <Wrapper>
      <Section>
    <h2>About</h2>
    <p>Welcome to the Indoor Jungle Project! I'm 
    <Link href="/contact">Elsa,</Link>
       I've created this blog about keeping plants and fish alive, and ideally thriving!</p>
    </Section>
    </Wrapper>
  )
}

export default Aside