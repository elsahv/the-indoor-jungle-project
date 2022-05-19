import styled from 'styled-components'



export const Breadcrumbs = styled.h2`
background-color: #2d6a4f;
width: 100%;
height: 100px;
display: flex;
padding-left: 200px;
align-items: center;
@media only screen and (max-width: 1024px) {
}
`

 

 
export const Wrapper = styled.div`
margin: 45px;
@media only screen and (max-width: 1024px) {
  margin: 20px;
}
`
export const Title = styled.h2`
text-align: center;
padding: 10px;
font-size: 30px;
@media only screen and (max-width: 1024px) {
}
`
export const ImageWrapper = styled.div`
display: flex;
justify-content: center;
.img{
  margin: 25px;
  border-radius: 45px;
  border: solid 2px black;
  width: 1400px;
  height: 1000px;
}

@media only screen and (max-width: 1024px) {
.img{
  width: 800px;
  height: 400px;
}
}
@media only screen and (max-width: 768px) {
.img{
  width: 600px;
  height: 300px;
}

}
`

export const Image = styled.div`
 margin: 25px;
 border-radius: 45px;
 border: solid 2px black;
 width: 1400px;
 height: 1000px;
 
 @media only screen and (max-width: 1024px) {
  width: 800px;
  height: 400px;

}
@media only screen and (max-width: 768px) {
  width: 600px;
  height: 300px;

}
`

export const BodyContent = styled.div`
 font-size: 23px;
 line-height: 2em;
 margin: 0 55px;

 @media only screen and (max-width: 1024px) {
   font-size: 17px;
   margin: auto;
   padding: auto;
}
@media only screen and (max-width: 768px) {
 margin: 10px;
 margin: auto;
 padding: auto;

}
`

