
import styled from 'styled-components'



//STYLES

export const Wrapper = styled.div`
// background: teal;
text-align: center;
font-weight: bold;
margin-bottom: 350px;
h2 {
  padding: 10px;
}

@media only screen and (max-width: 1024px) {
  margin-bottom: 500px;
}

@media only screen and (max-width: 600px) {
  margin-bottom: 400px;
}
`

export const Body = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding-top: 50px;
a {
  font-size: 30px;
  margin: 20px 10px;
  color: #007ba5;
}
p {
  font-size: 20px;
}

@media only screen and (max-width: 600px) {
  a {
    font-size: 20px;
  }
  p {
    font-size: 15px;
  }
}

@media only screen and (max-width: 531px) {
  p {
    font-size: 12px;
  }
  a {
   font-size: 15px;
  }
  
}
`

export const Title = styled.h2`  
margin: 75px 0 0 0;
font-size: 35px;

@media only screen and (max-width: 1024px) {
  margin: 275px 0 0 0;
}

@media only screen and (max-width: 600px) {
  margin: 45px 0 0 0;
  font-size: 20px;
}
`

export const SmIcons = styled.div`
font-size: 35px;
padding: 10px;
a {
  color: #000;
  margin: 5px;
  &:hover{
    color: #3aa1aa;
    transition: 1s;
  }
}
`


//END STYLES