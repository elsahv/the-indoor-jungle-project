import Image from 'next/image'
import profilePic from '../../../public/images/about-img.jpg'
import {
  AboutContainer,
  ContentWrapper,
  ImgWrapper,
  ContentTitle,
  ContentParagraph
} from './About.styled' 


 


const SubscribeCta = () => {
  return (
    <>  
      <AboutContainer>

        <ContentWrapper>

          <ContentParagraph>
          <ContentTitle>
             About
          </ContentTitle>
            Welcome to the Indoor Jungle Project! I'm Elsa, the novice gardener who lives among houseplants and annoying squirrels. I've started this website to practice my web development skills, and to catalog everything I've learned about my growing plants indoors.</ContentParagraph>
          
           <ImgWrapper>
            <Image
              src={profilePic}
              alt="about-me"
              layout="responsive"
          />
          </ImgWrapper>
          
            </ContentWrapper>

      </AboutContainer>
</>
  )
}

export default SubscribeCta