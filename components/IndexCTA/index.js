import ContactCTA from './ContactCTA/index.js'
import SubscribeCTA from './SubscribeCTA/index.js'
import styled from 'styled-components'


//STYLES
 const Wrapper = styled.section`

@media only screen and (max-width: 1024px) {
}
@media only screen and (max-width: 600px) {
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