  import styled from 'styled-components'




export const AboutContainer = styled.section`
padding: 50px 150px;
background: teal;
display: flex;
border-top: solid 2px black;
    
@media only screen and (max-width: 1024px) {
display: flex;
padding: 30px 50px;
}

@media only screen and (max-width: 600px) {
 display: flex;
flex-direction: column;
 
  }
`



export const ImgWrapper = styled.div`
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


export const ContentWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 padding: 45px 25px;
 
@media only screen and (max-width: 1024px) {
  padding: 20px 0 0 25px;
}

@media only screen and (max-width: 531px) {
  padding: 0px;
}
`


export const ContentTitle = styled.div`
font-size: 35px;
margin: 10px 0;

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

export const  ContentParagraph = styled.p`
font-size: 20px;
color: #000;

@media only screen and (max-width: 834px) {
   font-size: 18px;
}

@media only screen and (max-width: 531px) {
  font-size: 18px;
}
`


