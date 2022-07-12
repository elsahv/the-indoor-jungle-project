
import MailchimpForm from '../components/MailchimpForm'
import {
  Wrapper,
  Content,
  FormWrapper
}
from './styles/IndexCta.styled' 

 


const SubscribeCta = () => {
  return (
    <Wrapper>

    <Content>
    <h4>Email Form</h4>  
    <p>subscribe for future post updates!!</p>
    <p>tie in contact, newsletter content</p>
    <p>contact, about</p>

    </Content>


    
    <FormWrapper>
    <MailchimpForm />
    </FormWrapper>

</Wrapper>
  )
}

export default SubscribeCta