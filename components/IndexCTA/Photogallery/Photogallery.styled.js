import styled from "styled-components";





export const PhotosSection = styled.div`
margin: 50px 20px;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-areas:
'a b c d';
`

export const Photo1 = styled.div`
grid-area: a;
width: 400px;
height: 420px;

`
 
export const Photo2 = styled.div`
grid-area: b;
width: 400px;
height: 420px;
`
export const Photo3 = styled.div`
grid-area: c;
width: 400px;
height: 420px;
`
export const Photo4 = styled.div`
grid-area: d;
width: 400px;
height: 420px;
`