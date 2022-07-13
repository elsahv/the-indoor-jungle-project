import MailchimpForm from '../MailchimpForm'
import {Wrapper} from './Aside.styled' 


const Aside = () => {
  return (
    <>
    <Wrapper>
        <div>Subscribe for post updates</div>
        <MailchimpForm />
        </Wrapper>
    </>
  )
}

export default Aside