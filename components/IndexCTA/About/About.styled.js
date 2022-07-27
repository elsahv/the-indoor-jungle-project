import styled from 'styled-components' 



//STYLES  
export const AboutContainer = styled.div`
padding: 25px 45px;
grid-area: left;
background: gray;
border-right: solid 2px black;
    
@media only screen and (max-width: 1024px) {
padding: 30px 50px;
border-bottom: solid 2px black;
}

@media only screen and (max-width: 600px) {
 display: flex;
flex-direction: column;
  }
`


export const ContentWrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-template-areas: 
 'img content';
 margin-top: 20px;
 
@media only screen and (max-width: 1024px) {
  grid-template-columns: 1fr;
  grid-template-areas: 
  'img'
  'content';
}

@media only screen and (max-width: 531px) {
}
`

export const ImgWrapper = styled.div`
// width: 270px;
// height: 350px;
grid-area: img;
background: green;
 
@media only screen and (max-width: 1024px) {
 
}

@media only screen and (max-width: 600px) {
 
}
`
 

export const ContentTitle = styled.h4`
font-size: 25px;
// text-align: center;
padding-top: 55px
 

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

export const ContentSection = styled.div`
padding: 25px;
font-size: 18px;
grid-area: content;
// background: pink;

@media only screen and (max-width: 834px) {
  padding: 10px 0;
}

@media only screen and (max-width: 531px) {
}
`

export const ContentBody = styled.p`
a {
  color: #000;
  padding: 0 5px;
}
`

//END STYLES
