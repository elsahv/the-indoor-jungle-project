import styled from "styled-components";



export const Wrapper = styled.div`
display: flex;
justify-content: center;

`


export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 320px);
grid-gap: 1em;
grid-template-areas:
'a b c d';
grid-gap: 1em;

@media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 320px);
    grid-template-areas:
    'a b'
    'c d';
}

@media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 220px);
}

@media only screen and (max-width: 531px) {
    grid-template-columns: 300px;
    grid-template-areas: 
    'a'
    'b'
    'c'
    'd';
}
`

export const Photo1 = styled.div`
grid-area: a;
border: solid 2px black;
position: relative;
height: 425px;

@media only screen and (max-width: 600px) {
    height: 325px;
}
`
 
export const Photo2 = styled.div`
grid-area: b;
border: solid 2px black;
height: 425px;
position: relative;
@media only screen and (max-width: 600px) {
    height: 325px;
}
`
export const Photo3 = styled.div`
grid-area: c;
border: solid 2px black;
height: 425px;
position: relative;
@media only screen and (max-width: 600px) {
    height: 325px;
}

`
export const Photo4 = styled.div`
grid-area: d;
border: solid 2px black;
position: relative;
height: 425px;
@media only screen and (max-width: 600px) {
    height: 325px;
}
`