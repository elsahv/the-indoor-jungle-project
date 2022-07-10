import styled from 'styled-components'
 

export const Wrapper = styled.div`
padding-top: 100px;
@media only screen and (max-width: 1024px) {
}
`


export const Breadcrumbs = styled.h2`
background-color: #2d6a4f;
width: 100%;
height: 100px;
display: flex;
justify-content: flex-start;
padding: 5px;
align-items: center;
@media only screen and (max-width: 1024px) {
}
`

 
export const Title = styled.h2`
text-align: center;
padding: 10px;
font-size: 30px;
@media only screen and (max-width: 1024px) {
}
`
export const ImageSection = styled.div`
display: flex;
justify-content: center;
.img{
  margin: 25px;
  border-radius: 45px;
  border: solid 2px black;
  width: 800px;
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

 

export const BodyContent = styled.div`
 font-size: 17px;
 line-height: 2em;
 margin: 20px 85px;

 @media only screen and (max-width: 1024px) {
   font-size: 15px;
   margin: 20px;
 
}
 
`

