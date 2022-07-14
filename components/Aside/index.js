import MailchimpForm from '../MailchimpForm'
import {
 AsideTitle,
Wrapper
} from './Aside.styled' 


const Aside = () => {
  return (
    <>
    <Wrapper>
        <AsideTitle>Subscribe for post updates</AsideTitle>
        <MailchimpForm />
        </Wrapper>
    </>
  )
}

export default Aside