import styled from "styled-components"




//STYLES
export const PhotosSection = styled.div`
// background-image: url('/images/plants.jpg');
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-areas:
'a b c d';
`


export const Photo1 = styled.div`
grid-area: a;
background-image: url('/images/plant1.jpg');
width: 400px;
height: 420px;
`
 
export const Photo2 = styled.div`
grid-area: b;
background-image: url('/images/plant2.jpg');
width: 400px;
height: 420px;

`
export const Photo3 = styled.div`
grid-area: c;
background-image: url('/images/plants.jpg');
width: 400px;
height: 420px;
`
export const Photo4 = styled.div`
grid-area: d;
background-image: url('/images/plant6.jpg');
width: 400px;
height: 420px;
`
//END STYLES




const Photogallery = () => {
  return (
       <PhotosSection>
        <Photo1>dfd</Photo1>
        <Photo2>dfd</Photo2>
        <Photo3>df</Photo3>
        <Photo4>dfd</Photo4>
       </PhotosSection> 
  )
}

export default Photogallery