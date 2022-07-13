import styled from 'styled-components'

export const Wrapper = styled.div`
@media only screen and (min-width: 835px) {

display: none;
}
@media only screen and (max-width: 834px) {
 display: flex;
 justify-content: center;
 width: 100%;

.nav-menu {
  background-color: #fff;
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 100%;
  transition: 850ms;

}
.nav-menu.active {
    right: 0;
    transition: 350ms;
  }
    
  .navbar-toggle {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  
@media only screen and (min-width: 769px) {
    display: none;
}
`

export const Logo = styled.h1`
font-size: 24px;
a {
  color: #2d6a4f;
 text-decoration: none;
}
`

export const MenuOpen = styled.div`
font-size: 1.5rem;
margin: 0 25px;
color: #6a040f;
cursor: pointer;
`

export const MenuClose = styled.div`
font-size: 2rem;
 width: 100%;
 display: flex;
 justify-content: flex-start;
 margin-right: 335px;
 padding: 10px;
 cursor: pointer;
`


export const SidebarLinks = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
font-size: 25px;
padding: 25px;
a {
    text-decoration: none;
    color: black;
} 

`


