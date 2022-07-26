import styled from 'styled-components'


export const Wrapper = styled.div`
background: #2a9d8f;
border: solid 2px black;
margin: 100px 0px 0;
// height: 300px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: 
'left right';

@media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
grid-template-areas: 
'left'
'right';
}
`


//about

export const AboutContainer = styled.div`
grid-area: left;
// background: gray;
display: flex;
border-right: solid 2px black;
    
@media only screen and (max-width: 1024px) {
display: flex;
padding: 30px 50px;
border-bottom: solid 2px black;
}

@media only screen and (max-width: 600px) {
 display: flex;
flex-direction: column;
  }
`



export const ImgWrapper = styled.div`
border-right: solid 2px black; 
width: 270px;
height: 350px;
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



 

//mailchimp

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

export const MailchimpContainer = styled.div`

@media only screen and (max-width: 531px) {
  }
`

export const PhotosSection = styled.div`
// background-image: url('/images/plants.jpg');
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-areas:
'a b c d';




`


export const Photo1 = styled.div`
grid-area: a;
background-image: url('/images/plant1.jpg');
width: 400px;
height: 420px;
`
 
export const Photo2 = styled.div`
grid-area: b;
background-image: url('/images/plant2.jpg');
width: 400px;
height: 420px;

`
export const Photo3 = styled.div`
grid-area: c;
background-image: url('/images/plants.jpg');
width: 400px;
height: 420px;
`
export const Photo4 = styled.div`
grid-area: d;
background-image: url('/images/plant6.jpg');
width: 400px;
height: 420px;
`
 