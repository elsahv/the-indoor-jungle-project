import styled from 'styled-components'



export const Wrapper = styled.div`
grid-area: b;
padding: 105px;
display: flex;
justify-content: center;
align-items: center;
font-size: 35px;
background-image: url('/images/plants.jpg');
text-shadow: 2px 2px 2px #000;
color: #fff;
border-bottom: solid 2px #000;


@media only screen and (max-width: 1024px) {
    font-size: 23px;
    padding: 75px;
    
}
@media only screen and (max-width: 768px) {
}
`



export const BlogWrapper = styled.div`
grid-area: b;
padding: 25px;
display: flex;
justify-content: center;
align-items: center;
font-size: 35px;
background-image: url('/images/plants.jpg');
// background: #2d6a4f;
text-shadow: 2px 2px 2px #000;
color: #fff;
border-bottom: solid 2px #000;
text-transform: capitalize;


@media only screen and (max-width: 1024px) {
    font-size: 23px;
    // padding: 75px;
    
}
@media only screen and (max-width: 768px) {
}
`
 