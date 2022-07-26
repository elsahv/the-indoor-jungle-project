import SubscribeIndex from './SubscribeIndex'
import About from './About'
import styled from 'styled-components'
 



//STYLES
export const Wrapper = styled.div`
background: #2a9d8f;
border: solid 2px black;
margin: 100px 0px;
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
 


const Index = () => {
  return (
    <>  
    <Wrapper>
       <About />
       <SubscribeIndex />
     </Wrapper>
       {/* <Photogallery /> */}
</>
  )
}

export default Index