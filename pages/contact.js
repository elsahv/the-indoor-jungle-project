import React from 'react'
// import BusinessCard from '../components/BusinessCard'
 
import styled from 'styled-components'


//STYLES

const Wrapper = styled.div`
display: flex;
justify-content: center;
padding: 25px;
@media only screen and (max-width: 1024px) {
}
`


const Grid = styled.div`
padding-top: 20px;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-template-areas: 
'a b'
'c d';
grid-gap: 1em;

@media only screen and (max-width: 1024px) {
display: grid;
grid-template-columns: 1fr;
grid-template-areas: 
'a'
'b'
'c'
'd'
;
}
`
const Title = styled.h2`
 
@media only screen and (max-width: 1024px) {
}
`

const About = styled.div`
grid-area: a;
background: teal;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 10px;
height: 450px;
width: 650px;
`

const SquareB = styled.div`
grid-area: b;
background-image: url('/images/plants.jpg');
`
const SquareC = styled.div`
grid-area: c;
background-image: url('/images/plants.jpg');
`
const Email = styled.div`
grid-area: d;
background: maroon;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`


//END STYLES




const contact = () => {
  return (
    <>
    <Wrapper>
      <Grid>
        <About>
          <Title>
          About
          </Title>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, recusandae.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, nemo. Facere ex doloribus cupiditate accusantium! Incidunt placeat, fuga eos delectus at corrupti pariatur ducimus exercitationem repudiandae, esse vitae numquam fugiat.</p>
        </About>

              <SquareB>  
              Photo
              </SquareB>  
                  <SquareC>
                  Photo
                </SquareC>
                    <Email>  
                      <Title>
                      Contact 
                      </Title>
                      Email form
                    </Email>  

      </Grid>
      </Wrapper>
    </>
  )
}

export default contact