import styled from 'styled-components';


//STYLES

export const ContactSection = styled.div`
@media only screen and (min-width: 769px) {
  margin-right: 45px;
    display: flex;
    justify-content: center;
    background: teal;
    border: solid 2px #000;
    width: 550px;
    height: 410px;
    grid-area: a; 
  }
@media only screen and (max-width: 1024px) {
  margin-top: 100px;
  width: 450px;
  height: 300px;


}
@media only screen and (max-width: 768px) {
  display: flex;
  justify-content: center;
  background: teal;
  border: solid 2px black;
  margin-top: 150px;q
  margin-bottom: 50px;
  height: 304px;
  border-left: 0;
  border-right: 0;
}
`;

export const ImageSection = styled.div`
 

@media only screen and (max-width: 1024px) {
  .img {
    width: 165px;
    height: 300px; 
  }
}
@media only screen and (max-width: 768px) {
   .img {
   width: 255px;
   height: 304px; 
 }
}
`


export const ContactInfo = styled.div`
@media only screen and (min-width: 769px) {
padding: 5px;
margin-top: 35px;
h4 {
  font-size: 30px;
  color: aquamarine;
}
p {
  font-size: 20px;  
}
    .contact-list {
        color: aquamarine;
      font-size: 20px;
      text-align: center;
  } 
}
@media only screen and (max-width: 768px) {
  width: 300px;
  font-size: 15px;
  margin-left: 5px;
  
  h4 {
    font-size: 20px;
    color: aquamarine;
    text-align: center;
    padding-top: 25px;
  }
 

 .contact-list {  
  color: aquamarine;
font-size: 20px;
text-align: left;
}
}
  
`;

//END STYLES