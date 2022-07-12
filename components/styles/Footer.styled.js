import styled from 'styled-components'



//STYLES
export const FooterBanner = styled.footer`
width: 100%;
height: 500px;
background: orange;
border-top: solid 2px black;
@media only screen and (max-width: 768px) {
 
}
`


export const FooterSection = styled.footer`
background: teal;
// border-top: solid 3px black;
display: flex;
justify-content: space-around;
align-items: center;
padding: 10px;
@media only screen and (max-width: 1024px) {
 padding: auto;
 margin: auto;
}
@media only screen and (max-width: 768px) {
 
}
`


export const FooterMenu1 = styled.ul`
a {
  color: black;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
`
export const FooterMenu2 = styled.ul`
a {
  color: #000;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
@media only screen and (max-width: 768px) {
padding-left: 13px;
}
`
export const FooterMenuTitle = styled.span`
@media only screen and (max-width: 768px) {
font-size: 15px;
}
`
export const FooterMenuItem = styled.li`
list-style: none;
  a{
  color: #2d6a4f;
}

@media only screen and (max-width: 768px) {
  text-align: left;
}
`


//END STYLES