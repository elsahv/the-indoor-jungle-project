import Image from 'next/image'
import profilePic from '../public/images/portfolio-pic.jpg'
import MailchimpForm from './MailchimpForm/index.js'

  import {
  Wrapper,
  MailchimpContainer,
  AboutContainer,
  Pic,
  About,
}
from './styles/IndexCta.styled' 



const SubscribeCta = () => {
  return (
    <>
    <Wrapper>
       <MailchimpContainer>
       <MailchimpForm />
       </MailchimpContainer>

    <AboutContainer>
    <Pic>
              <Image
            src={profilePic}
            alt="Picture of the author"
            className="portfolio-pic"
            layout="fill"
            // width="240px"  
            // height="350px"
              />
            </Pic>
    <About>
      <h2>About</h2>
      <p>Hi there, I'm Elsa. I'm a novice gardener who lives among houseplants and annoying squirrels, I've started this website to practive my web development skills, and to catalog everything I've learned about my growing professions.</p>
        </About>

         
 
</AboutContainer>
</Wrapper>
</>
  )
}

export default SubscribeCta