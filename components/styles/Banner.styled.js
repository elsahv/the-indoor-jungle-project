import styled from 'styled-components'



export const Wrapper = styled.div`
grid-area: b;
padding: 245px;
display: flex;
justify-content: center;
align-items: center;
font-size: 35px;
background-image: url('/images/plants.jpg');
text-shadow: 2px 2px 2px #000;
color: #fff;

@media only screen and (max-width: 1024px) {
    font-size: 23px;
    padding: 125px;
    
}
@media only screen and (max-width: 768px) {
}
`