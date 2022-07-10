import styled from 'styled-components'


export const Wrapper = styled.section`
 background: #2d6a4f;
 border: solid 2px black;
 height: 300px;
 width: 100%;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-template-areas: 
 'a b';
    
@media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'a'
    'b';
}
`
export const Content = styled.section`
grid-area: a;
background-image: url('/images/plants.jpg');
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 color: #fff;
 text-shadow: 2px 2px 2px #000;
 h4 {
     font-size: 30px;
 }
`

export const FormWrapper = styled.section`
grid-area: b;
 display: flex;
 justify-content: center;
 align-items: center;
`