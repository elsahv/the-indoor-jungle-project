import styled from 'styled-components'



export const MailchimpWrapper = styled.section`
// background-image: url('/images/plants.jpg');
// background: #2d6a4f;
height: 170px;
margin-left: 500px;
margin-top: 100px;
border-bottom: solid 2px black;
display: flex;
justify-content: center;

@media only screen and (max-width: 1024px) {
  margin: auto;
  display: flex;
flex-direction: column;
}
@media only screen and (max-width: 531px) {
}
`

export const CTA = styled.div`
padding: 45px;
color: #000;
// text-shadow: 2px 2px 2px #000;
// background: maroon;
display: flex;
// justify-content: center;
// align-items: center;
flex-direction: column;
h2 {
  padding: 5px;
}
`

export const MailchimpContainer = styled.div`
  // width: 600px; 
  // background: #2d6a4f;
  padding: 55px 15px;
  display: flex;
justify-content: center;
// align-items: center;
`

