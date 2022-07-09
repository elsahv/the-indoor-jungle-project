import styled from 'styled-components'

//STYLES

const Wrapper = styled.div`

background: green;
`

const Content = styled.div`
background: teal;

`
const ContactForm = styled.div`

`


//END STYLES






const Contact = () => {
  return (
    <Wrapper>
    <Content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae dolore alias provident quod eligendi quasi, explicabo repellendus tempora placeat maxime, aperiam ab tempore inventore excepturi, vero nam perspiciatis ut.
    </Content>

<ContactForm>
        <h2>contact form</h2>
         <ul>
          <li>Name</li>
          <li>email</li>
          <li>message- tell me about your project</li>
          <button>Send Message</button>
         </ul>
         </ContactForm> 
    </Wrapper>
  )
}

export default Contact