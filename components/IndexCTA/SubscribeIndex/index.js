import MailchimpForm from '../../MailchimpForm'
import styled from 'styled-components'


//STYLES
export const MailchimpWrapper = styled.div`
grid-area: right;
// border: solid 2px black;
display: grid;
// grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr;
grid-template-areas:
'a'
'b';
 

@media only screen and (max-width: 1024px) {
}
@media only screen and (max-width: 531px) {
 
}
`

export const CTA = styled.div`
padding: 20px;  
grid-area: a;
// background: #2a9d8f;
display: flex;
justify-content: flex-end;
flex-direction: column;

@media only screen and (max-width: 531px) {
padding: 15px;
}
`

export const ContentTitle = styled.h4`
font-size: 20px;
 

@media only screen and (max-width: 768px) {
    font-size: 25px;
    margin: 0;
}

@media only screen and (max-width: 531px) {
    font-size: 20px;
    text-align: center;
    margin: 5px;
}
`



export const ContentParagraph = styled.p`
font-size: 18px;
padding-top: 10px;
color: #000;

@media only screen and (max-width: 834px) {
   font-size: 18px;
}

@media only screen and (max-width: 531px) {
  font-size: 18px;
}
`


export const MailchimpContainer = styled.div`

@media only screen and (max-width: 531px) {
  }
`
//END STYLES
 

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