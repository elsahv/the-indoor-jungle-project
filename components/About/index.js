
import Image from 'next/image'
import profilePic from '../../public/images/portfolio-pic.jpg'
import MailchimpForm from '../MailchimpForm'
import {
  Wrapper,
  MailchimpWrapper,
  CTA,
  MailchimpContainer,

  AboutContainer,
  ImgWrapper,
  ContentWrapper,
  ContentTitle,
  ContentParagraph
} from './About.styled'



 


const SubscribeCta = () => {
  return (
    <>  
    <Wrapper>

      <AboutContainer>
      {/* <ImgWrapper>
              <Image
                src={profilePic}
                alt="Picture of the author"
                className="portfolio-pic"
                layout="fill"
                  />
          </ImgWrapper> */}

        <ContentWrapper>
        <ContentTitle>About</ContentTitle>
          <ContentParagraph>
            Welcome to the Indoor Jungle Project! I'm Elsa, the novice gardener who lives among houseplants and annoying squirrels. I've started this website to practice my web development skills, and to catalog everything I've learned about my growing plants indoors.</ContentParagraph>
            </ContentWrapper>
      </AboutContainer>





      <MailchimpWrapper>
      <CTA>
        <ContentTitle>Newsletter</ContentTitle>
        <ContentParagraph>
          Grow with me as I write about plants and fish keeping! Lorem ipsum dolor sit amet cons blanditiis, neque alias possimus excepturi veniam quae qui facere et temporibus deserunt nemo.
          </ContentParagraph>
        </CTA>

          <MailchimpContainer>
            <MailchimpForm />
          </MailchimpContainer>

       </MailchimpWrapper>

       </Wrapper>
</>
  )
}

export default SubscribeCta