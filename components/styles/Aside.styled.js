import styled from 'styled-components'



export const Wrapper = styled.div`
padding: 100px;
background: orange;
border: solid 2px black;
margin: 15px 10px;
width: 300px;
padding: 0;
 display: grid;
 grid-template-column: 1fr;
 grid-template-rows: 100px 1fr 1fr;
 grid-template-areas:
 'a'
 'b'
 'c';

 @media only screen and (max-width: 1024px) {
  margin: auto;
  width: 650px;
  height: 400px;
  display: grid;
  grid-template-column: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:  
  'a b b'
  'c b b'
  ;
}

@media only screen and (max-width: 600px) {
  display: grid;
 grid-template-column: 1fr;
 grid-template-rows: 100px 1fr 1fr;
 grid-template-areas:
 'a'
 'b'
 'c';
 margin: auto;
 padding: auto;
}
`


export const Title = styled.h3`
grid-area: a;
padding: 20px;
@media only screen and (max-width: 1024px) {
  // background: green;
  margin-top: 55px;
}
@media only screen and (max-width: 600px) {
}
`

export const ImgWrapper = styled.div`
grid-area: b;
display: flex;
justify-content: center;
height: 300px;
@media only screen and (max-width: 1024px) {
  margin-right: 50px;
  margin-top: 50px;
}
`

export const About = styled.div`
grid-area: c;
font-size: 18px;
line-height: 1.5em; 
padding: 25px;
a {
  color: #000;
  padding: 3px;
}

@media only screen and (max-width: 1024px) {
  padding: 10px 25px;

}
@media only screen and (max-width: 600px) {
  padding: 0;
}
`