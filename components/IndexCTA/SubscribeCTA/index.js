import MailchimpForm from '../../MailchimpForm'


import {
    MailchimpWrapper,
    CTA,
    MailchimpContainer,
} from './SubscribeCTA.styled.js'



const SubscribeCTA = () => {
  return (
    <>

      <MailchimpWrapper>
      <CTA>
        <h2>Newsletter</h2>
        Grow with me as I write about plants and fish keeping!
        </CTA>

          <MailchimpContainer>
            <MailchimpForm />
          </MailchimpContainer>
       </MailchimpWrapper>


    </>
  )
}

export default SubscribeCTA