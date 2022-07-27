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
        A weekly newsletter about finding creativity
        </ContentTitle>

      <ContentParagraph>
        I like to write about creating things... whether it involves gardening, or posting updates about 
        <a href="https://elsahovey.com/#portfolio">
        my other website projects. 
        </a>
        </ContentParagraph>
      </CTA>
        <MailchimpContainer>
          <MailchimpForm />
        </MailchimpContainer>
     </MailchimpWrapper>
  )
}

export default SubscribeCTA