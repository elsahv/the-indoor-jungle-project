import styled from 'styled-components'



export const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 margin:  30px 100px 30px 0px;
 width: 360px;

 @media only screen and (max-width: 1024px) {
 margin: auto;
 width: 100%;
}
`


export const Section = styled.div`
padding: 20px;
 background: orange;
 grid-area: b;
 border: solid 3px black;
 a {
   color: #000;
   text-decoration: none;
   padding: 3px;
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
 