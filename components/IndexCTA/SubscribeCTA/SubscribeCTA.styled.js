import styled from 'styled-components'



export const MailchimpWrapper = styled.section`
margin: 70px 480px;
border: solid 2px black;
display: flex;

@media only screen and (max-width: 1024px) {
  margin: 50px;  
  display: flex;
}
@media only screen and (max-width: 531px) {
  display: flex;
  flex-direction: column;
}
`

export const CTA = styled.div`
padding: 45px;
background: #2a9d8f;
display: flex;
flex-direction: column;
h2 {  
}
span {
}
@media only screen and (max-width: 531px) {
padding: 15px;
}
`

export const MailchimpContainer = styled.div`
  display: flex;
justify-content: center;
align-items: center;
border-left: solid 2px black;
padding: 25px auto;
@media only screen and (max-width: 531px) {
  border-top: solid 2px black;
  }
`

