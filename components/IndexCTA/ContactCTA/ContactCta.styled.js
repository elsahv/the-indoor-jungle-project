import styled from 'styled-components'

//ABOUT SECTION

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
@media only screen and (max-width: 531px) {
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