import MailchimpForm from '../MailchimpForm'
import {
  Wrapper,
  MailchimpWrapper,
  CTA,
  MailchimpContainer,

  AboutContainer,
  ContentWrapper,
  ContentTitle,
  ContentParagraph,

  PhotosSection,
  Photo1,
  Photo2,
  Photo3,
  Photo4
} from './About.styled'



 


const SubscribeCta = () => {
  return (
    <>  
    <Wrapper>
      <AboutContainer>
        <ContentWrapper>
        <ContentTitle>
          About
          </ContentTitle>
          <ContentParagraph>
            Welcome to the Indoor Jungle Project! I'm Elsa, the novice gardener who lives among houseplants and annoying squirrels. I've started this website to practice my web development skills, and to catalog everything I've learned about my growing plants indoors.</ContentParagraph>
            </ContentWrapper>
      </AboutContainer>
      <MailchimpWrapper>
      <CTA>
        <ContentTitle>
          Newsletter
          </ContentTitle>
        <ContentParagraph>
          Grow with me as I write about plants and fish keeping! Lorem ipsum dolor sit amet cons blanditiis, neque alias possimus excepturi veniam quae qui facere et temporibus deserunt nemo.
          </ContentParagraph>
        </CTA>
          <MailchimpContainer>
            <MailchimpForm />
          </MailchimpContainer>
       </MailchimpWrapper>
       </Wrapper>

       <PhotosSection>
        <Photo1>dfd</Photo1>
        <Photo2>dfd</Photo2>
        <Photo3>df</Photo3>
        <Photo4>dfd</Photo4>

       </PhotosSection>
</>
  )
}

export default SubscribeCta