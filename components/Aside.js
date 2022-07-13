import MailchimpForm from '../components/MailchimpForm'
import styled from 'styled-components'

//STYLES
const Wrapper = styled.div`
border: solid 2px black;
background: orange;
margin: 40px 10px 0 20px;
// padding-left: 30px;
width: 420px;
height: 120px;
`

//END STYLES



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