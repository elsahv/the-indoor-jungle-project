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
    <p>Welcome to the Indoor Jungle Project!
      
    <Image
        src={profilePic}
        alt="Picture of the author"
        className="portfolio-pic"
      />
       I'm 
    <Link href="/contact">Elsa,</Link>
       I've created this blog about keeping plants and fish alive, and ideally thriving!</p>
    </Section>
    </Wrapper>
  )
}

export default Aside