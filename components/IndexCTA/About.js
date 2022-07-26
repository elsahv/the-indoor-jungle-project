import styled from 'styled-components' 




//STYLES
export const AboutContainer = styled.div`
grid-area: left;
// background: gray;
display: flex;
border-right: solid 2px black;
    
@media only screen and (max-width: 1024px) {
display: flex;
padding: 30px 50px;
border-bottom: solid 2px black;
}

@media only screen and (max-width: 600px) {
 display: flex;
flex-direction: column;
  }
`



export const ImgWrapper = styled.div`
border-right: solid 2px black; 
width: 270px;
height: 350px;
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


export const ContentWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 padding: 45px 25px;
 
@media only screen and (max-width: 1024px) {
  padding: 20px 0 0 25px;
}

@media only screen and (max-width: 531px) {
  padding: 0px;
}
`


export const ContentTitle = styled.h4`
font-size: 20px;
 

@media only screen and (max-width: 768px) {
    font-size: 25px;
    margin: 0;
}

@media only screen and (max-width: 531px) {
    font-size: 20px;
    text-align: center;
    margin: 5px;
}
`

export const ContentParagraph = styled.p`
font-size: 18px;
padding-top: 10px;
color: #000;

@media only screen and (max-width: 834px) {
   font-size: 18px;
}

@media only screen and (max-width: 531px) {
  font-size: 18px;
}
`
//END STYLES




const SubscribeCta = () => {
  return (
    <>  
      <AboutContainer>
        <ContentWrapper>
        <ContentTitle>
          About
          </ContentTitle>
          <ContentParagraph>
            Welcome to the Indoor Jungle Project! I'm Elsa, the novice gardener who lives among houseplants and annoying squirrels. I've started this website to practice my web development skills, and to catalog everything I've learned about my growing plants indoors.</ContentParagraph>
            </ContentWrapper>
      </AboutContainer>
</>
  )
}

export default SubscribeCta