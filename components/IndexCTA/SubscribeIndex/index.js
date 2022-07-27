import MailchimpForm from '../../MailchimpForm'
import {
  MailchimpWrapper,
  CTA,
  ContentTitle,
  ContentParagraph,
  MailchimpContainer
} from './SubscribeIndex.styled'

 

const SubscribeCTA = () => {
  return (
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
  )
}

export default SubscribeCTA