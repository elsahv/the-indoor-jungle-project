import Photogallery from './Photogallery'
import SubscribeCTA from './SubscribeCTA'
import About from './About'
import styled from 'styled-components'
// import {
//   Wrapper,
//   AboutContainer,
//   ContentWrapper,
//   ContentTitle,
//   ContentParagraph,
// } from './About.styled'


//STYLES
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

//END STYLES
 


const SubscribeCta = () => {
  return (
    <>  
    <Wrapper>
       <About />
       <SubscribeCTA />
       </Wrapper>

       <Photogallery />
</>
  )
}

export default SubscribeCta