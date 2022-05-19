import styled from 'styled-components'



//STYLES
export const NavSection = styled.header`
width: 100%;
top: 0;
position: sticky;
border-bottom: solid 2px #6a040f;
background: #fff;
z-index: 5000;  
padding: 45px 0 20px 0;

`

export const NavLinks = styled.section`
padding-top: 8px;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
a {
  margin:0 10px;
  text-decoration: none;  
  color: #6a040f;
  &:hover{
    color: #2d6a4f;
    transition: 1s;
  }
}
@media only screen and (max-width: 1024px) {
  font-size: 18px;
}

@media only screen and (max-width: 768px) {
  display: none;
}
 
`


export const Logo = styled.h1`
font-size: 30px;
margin-right: 55px;
 a{
   color: #2d6a4f;
   text-decoration: none;
}

@media only screen and (max-width: 1024px) {
  font-size: 18px;
  a {
  }
 }
 
`

export const SmIcons = styled.section`
width: 100px;
margin-left: 15px;
margin-top: 10px;
 a {
   margin: 2px;
   color: #6c757d;
   &:hover{
    color: #2d6a4f;
    transition: 1s;
  }
 }
 @media only screen and (max-width: 768px) {
  display: none;
}
`
//END STYLES