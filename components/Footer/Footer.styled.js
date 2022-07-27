import styled from 'styled-components'



 

export const Footer = styled.footer`
 width: 100%;
 margin-top: 200px;
@media only screen and (max-width: 1024px) {
  margin-bottom: 5px;  
}

    @media only screen and (max-width: 531px) {
       padding: 10px 4px;
    }
`

export const Wrapper = styled.div`
display: flex;
justify-content: center;

@media only screen and (max-width: 531px) {
flex-direction: column;   
}
`

export const Item = styled.div`
color: maroon;
padding: 15px;
a {
    color: #2d6a4f;
    text-decoration: none;
    margin: 0 25px;
}
@media only screen and (max-width: 531px) {
  padding: 5px;  
 a {
    margin: 0;
}
}

`
 