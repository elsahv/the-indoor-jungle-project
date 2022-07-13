import Image from 'next/image'
import profilePic from '../../../public/images/portfolio-pic.jpg'


import{
 AboutContainer,
 Pic,
 About
} from './ContactCta.styled.js'

const ContactCTA = () => {
  return (
    <>
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
      <h2>About the Indoor Jungle Project</h2>
      <p>Hi there, I'm Elsa... I'm a novice gardener who lives among houseplants and annoying squirrels. I've started this website to practice my web development skills, and to catalog everything I've learned about my growing plants indoors.</p>
        </About>
</AboutContainer>
    </>
  )
}

export default ContactCTA