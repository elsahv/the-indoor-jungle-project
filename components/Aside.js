import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/images/portfolio-pic.jpg'

import {
    Wrapper,
    Section
  } from './styles/Aside.styled'
  
  

const Aside = () => {
  return (
    <Wrapper>
      <Section>
    <h4>Welcome to the Indoor Jungle Project!</h4>
      
    <Image
        src={profilePic}
        alt="Picture of the author"
        className="portfolio-pic"
        width="200"
        height="300"
      />
      <p>I'm
      <Link href="/contact">Elsa,</Link>
       I've created this blog about keeping plants and fish alive, and ideally thriving!</p>
    </Section>
    </Wrapper>
  )
}

export default Aside