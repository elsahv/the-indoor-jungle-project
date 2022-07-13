import styled from 'styled-components'




export const Title = styled.div` 
text-align: center;
font-size: 25px;
padding-top: 25px;  
`


export const PostTitle = styled.div` 
text-transform: capitalize;
font-size: 25px;
height: 100px;
width: 300px; 
position: absolute;
padding: 25px;
color: #fff;
text-shadow: 2px 2px 2px black;
@media only screen and (max-width: 1024px) {
  width: 200px;
}
`

 export const GridContainer= styled.div` 
 width: 100%;
 display: flex;
 justify-content: center;
 align-content: center;
 margin: 50px 0;
@media only screen and (max-width: 1024px) {
 
}
@media only screen and (max-width: 768px) {
}
`

 export const IndexGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 400px);
grid-gap: 1em;
grid-area: a;
  .square {
    cursor: pointer;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    border: solid 2px black;
    transition: all 0.3s ease;
    &:hover {
    transform: translate(10px, 10px) scale(0.95) rotate(1deg);
    }
    .image {
      object-fit: fill;
      border-radius: 25px;
      height: 305px;
  }
    a {
      text-decoration: none;
    }
    }

@media only screen and (max-width: 1024px) {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 340px);
  grid-gap: 1em;
}

@media only screen and (max-width: 600px) {
  display: grid;
  grid-template-columns: 320px;
  grid-gap: 1em;
  .square {
    background: #2d6a4f;
    display: flex;
    flex-direction: column;
    border: solid 2px black;
  }
  .image {
    border-radius: 25px;
    height: 25px;
  }
}
` 


//PAGES 

export const PostsGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 325px);
grid-gap: 1em;
grid-area: a;
  .square {
    cursor: pointer;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    border: solid 2px black;
    transition: all 0.3s ease;
    &:hover {
    transform: translate(10px, 10px) scale(0.95) rotate(1deg);
    }
    .image {
      object-fit: fill;
      border-radius: 25px;
      height: 305px;
  }
    a {
      text-decoration: none;
    }
    }

@media only screen and (max-width: 1024px) {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 340px);
  grid-gap: 1em;
}

@media only screen and (max-width: 600px) {
  display: grid;
  grid-template-columns: 320px;
  grid-gap: 1em;
  .square {
    background: #2d6a4f;
    display: flex;
    flex-direction: column;
    border: solid 2px black;
  }
  .image {
    border-radius: 25px;
    height: 25px;
  }
}
` 
 
export const AsideWrapper = styled.div`
background: green;
`

 
  