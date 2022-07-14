import Image from 'next/image'
import profilePic from '../../../public/images/portfolio-pic.jpg'
import{
 AboutContainer,
 ImgWrapper,
 ContentTitle,
 ContentParagraph,
 ContentWrapper
} from './ContactCta.styled.js'

const ContactCTA = () => {
  return (
    <>
    <AboutContainer>

  <ImgWrapper>
          <Image
            src={profilePic}
            alt="Picture of the author"
            className="portfolio-pic"
            layout="fill"
              />
      </ImgWrapper>

    <ContentWrapper>
      <ContentTitle>About</ContentTitle>
      <ContentParagraph>Welcome to the Indoor Jungle Project! I'm Elsa, the  novice gardener who lives among houseplants and annoying squirrels. I've started this website to practice my web development skills, and to catalog everything I've learned about my growing plants indoors.</ContentParagraph>
        </ContentWrapper>


</AboutContainer>
    </>
  )
}

export default ContactCTA