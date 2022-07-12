import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/images/portfolio-pic.jpg'

import {
    Wrapper,
    Title,
     ImgWrapper,
     About
  } from './styles/Aside.styled'
  
  

const Aside = () => {
  return (
    <Wrapper>
    <Title>Welcome to the Indoor Jungle Project!</Title>

      <ImgWrapper>
    <Image
        src={profilePic}
        alt="Picture of the author"
        className="portfolio-pic"
        width="190"
        height="210"
      />
      </ImgWrapper> 

      <About>I'm
      <Link href="/contact">Elsa,</Link>
       I've created this blog about keeping plants and fish alive, and ideally thriving! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quia eaque soluta nulla. Officiis et inventore dignissimos nulla qui eum  </About>

    </Wrapper>
  )
}

export default Aside