import styled from 'styled-components'



export const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin:  30px 100px 30px 0px;
 width: 320px;
 @media only screen and (max-width: 1024px) {
 margin: 0 50px;
}
`


export const Section = styled.div`
padding: 10px 45px;
background: blue;
 background: orange;
 grid-area: b;
 border: solid 3px black;
 h4 {
  padding: 10px;
 }
 .portfolio-pic {
 }
 a {
   color: #000;
   text-decoration: none;
   padding: 3px;
 }
 p {
  padding: 5px;
}
 

@media only screen and (max-width: 1024px) {
  margin: 20px 220px;
  .portfolio-pic {
    width: 100px;
    height: 200px;
  }
}
@media only screen and (max-width: 768px) {
  margin: 20px;
  
}
`
 