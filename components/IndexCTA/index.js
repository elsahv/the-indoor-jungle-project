import ContactCTA from './ContactCTA/index.js'
import SubscribeCTA from './SubscribeCTA/index.js'
import styled from 'styled-components'


//STYLES
 const Wrapper = styled.section`
// background: silver; 
margin: 150px 0;
padding: 0 250px;
// border-top: solid 3px black;

@media only screen and (max-width: 1024px) {
  padding: 0 75px;
}
@media only screen and (max-width: 600px) {
  padding: 0 25px;
}
`
//END STYLES




const SubscribeCta = () => {
  return (
    <>  
    <Wrapper> 
       <SubscribeCTA />
       <ContactCTA /> 
    </Wrapper>
</>
  )
}

export default SubscribeCta