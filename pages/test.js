import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//STYLES
 

const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 200px);
grid-gap: 1em;
`


const Card = styled.div`
padding: 20px;
background: teal;
color: #fff;
`


const Id = styled.div`
width: 40px;
height: 40px;
border: 2px solid #fff;
border-radius: 50%;
display: flex;

span {
  margin: auto;
  font-size: 17px;
}
`

//END STYLES



const test = () => {
  const [items, setItems] = useState([])
  const [visible, setVisible] = useState(3)
  

 const showMoreItems = () => {
   setVisible(prevValue => prevValue + 3)
 }


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setItems(data))
  }, []);


  return (
      <Container>
        {items.slice(0,visible).map(item => (
          <Card>
            <Id>
              <span>{item.id}</span>
            </Id>
            <p>{item.body}</p>
          </Card>
        ))}
        <button onClick={showMoreItems}>load more</button>
      </Container>
  )
}

export default test