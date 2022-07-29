import styled from 'styled-components'
 

export const Wrapper = styled.div`
@media only screen and (max-width: 1024px) {
}
`

 
export const ImageSection = styled.div`
display: flex;
justify-content: center;
// background: teal;
padding: 65px 0;
// border-bottom: solid 2px maroon;

.img{
  // margin: 25px;
  border-radius: 45px;
  border: solid 2px black;
  width: 800px;
  height: 600px;
}

@media only screen and (max-width: 1024px) {
.img{
    width: 500px;
    height: 400px;
}
}
@media only screen and (max-width: 415px) {
.img{
  width: 350px;
  height: 350px;
}

}
`

  
export const Title = styled.h2`
font-size: 30px;
text-align: center;
padding-top: 10px;
@media only screen and (max-width: 1024px) {
}
`

export const BodyContent = styled.div`
text-align: left;

 font-size: 17px;
 line-height: 2em;
 margin: 10px 505px 40px; 

 @media only screen and (max-width: 1024px) {
   margin: 20px 100px;
}
@media only screen and (max-width: 600px) {
  margin: 10px 40px;
}
`


export const ImagesWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
.images {
  border: solid 1px black;
  width: 400px;
  margin: 30px 0;
}

@media only screen and (max-width: 531px) {
.images {
  width: 250px;
}
}
`