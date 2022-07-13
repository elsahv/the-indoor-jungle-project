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
              />
      </Pic>
    <About>
      <h2>About</h2>
      <p>Welcome to the Indoor Jungle Project! I'm Elsa, the  novice gardener who lives among houseplants and annoying squirrels. I've started this website to practice my web development skills, and to catalog everything I've learned about my growing plants indoors.</p>
        </About>
</AboutContainer>
    </>
  )
}

export default ContactCTA