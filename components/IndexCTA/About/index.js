import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../../public/images/about-img.jpg'
import {
  AboutContainer,
  ContentWrapper,
  ImgWrapper,
  ContentTitle,
  ContentSection,
  ContentBody
} from './About.styled' 



const SubscribeCta = () => {
  return (
    <>  
      <AboutContainer>
        <ContentWrapper>
          <ContentSection>
          <ContentTitle>
             About
          </ContentTitle>
           <ContentBody>
            Welcome to the Indoor Jungle Project! I'm
             <Link href="/contact">
             Elsa,
             </Link>
              the novice gardener who lives among houseplants and annoying squirrels. I've started this website to practice my web development skills, and to catalog everything I've learned about my growing plants indoors.
            </ContentBody>
            </ContentSection>
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