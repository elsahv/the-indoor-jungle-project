import styled from 'styled-components'
 

export const Wrapper = styled.div`
// text-align: center;

@media only screen and (max-width: 1024px) {
}
`

 
export const ImageSection = styled.div`
display: flex;
justify-content: center;
background: teal;
padding: 25px 0;
border-bottom: solid 2px maroon;

.img{
  margin: 25px;
  border-radius: 45px;
  border: solid 2px black;
  width: 400px;
  height: 400px;
}

@media only screen and (max-width: 1024px) {
.img{
  width: 800px;
  height: 400px;
}
}
@media only screen and (max-width: 768px) {
.img{
  width: 300px;
  height: 200px;
}

}
`

  
export const Title = styled.h2`
// text-align: center;
padding-top: 50px;
padding-left: 340px;
margin: 10px;
font-size: 30px;
@media only screen and (max-width: 1024px) {
}
`

export const BodyContent = styled.div`
// background: green;
 font-size: 17px;
 line-height: 2em;
 margin: 30px 355px;

 @media only screen and (max-width: 1024px) {
   font-size: 15px;
   margin: 20px;
 
}
 
`

