import styled from 'styled-components'



export const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 margin:  30px 0px 30px 0px;

 @media only screen and (max-width: 1024px) {
 margin: auto;
}
`


export const Section = styled.div`
 background: orange;
 grid-area: b;
 border: solid 3px black;

@media only screen and (max-width: 1024px) {
  margin: 20px;
}
@media only screen and (max-width: 768px) {
}
`