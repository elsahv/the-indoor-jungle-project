import styled from 'styled-components'


export const Wrapper = styled.section`
// background: silver ; 
margin: 150px 0;
padding: 0 250px;
border-top: solid 3px black;

@media only screen and (max-width: 1024px) {
  padding: 0 75px;
}
@media only screen and (max-width: 600px) {
  padding: 0 25px;
}
`



export const MailchimpWrapper = styled.section`
background-image: url('/images/plants.jpg');
height: 200px;
margin-left: 500px;
margin-top: 100px;
border: solid 2px black;
display: flex;
justify-content: center;
`

export const CTA = styled.div`
padding: 45px;
color: #fff;
text-shadow: 2px 2px 2px #000;
`

export const MailchimpContainer = styled.div`
  width: 600px; 
  background: green;
  padding: 55px 15px;

`



export const AboutContainer = styled.section`
height: 400px;
margin: 100px 0;
// background: maroon;
display: flex;
// border: solid 2px black;
 
    
@media only screen and (max-width: 1024px) {
display: flex;
// flex-direction: column;
}
@media only screen and (max-width: 600px) {
  display: flex;
  flex-direction: column;
height: 700px;
width: 320px;
margin: 50px auto;

  }
`
 

export const About = styled.div`
//  background: pink;
 width: 100%;
 display: flex;
 flex-direction: column;
 padding: 45px 25px;
h2 {
  font-size: 35px;
  margin: 10px 0;
}
p {
  font-size: 20px;
  color: #000;
}
@media only screen and (max-width: 1024px) {
  padding: 0 15px;
}
@media only screen and (max-width: 600px) {
  h2 {
    font-size: 15px;
  }
  p {
    font-size: 18px;
  }
}
`
export const Pic = styled.div`
border: solid 2px black; 
width: 310px;
height: 400px;
position: relative;
@media only screen and (max-width: 1024px) {
  width: 310px;
height: 360px;
}
@media only screen and (max-width: 600px) {
  width: 210px;
height: 350px;
margin: 10px auto;
}

`



 