import { 
  FaLinkedin,
  FaInstagram,
  FaGithub
 } from 'react-icons/fa'; 

 import {
  Title,
  Body,
  SmIcons,
  Wrapper
 } from '../components/styles/Contact.styled.js'

const ContactForm = () => {
  return (
    <>
    <Wrapper>

    <Title>
    Contact Info
    </Title>

    <Body>
      <p>I build websites for small businesses and creatives.</p>
       <p>For business inquiries... you can reach me at:</p>
        <a href="mailto:elsahoveydevdesigns@gmail.com">elsahoveydevdesigns@gmail.com</a>
        
        <p>You can also find me on:</p>

      <SmIcons>
       <a className="sm-icon" href="http://github.com/elsahv"> 
            <FaGithub />
            </a>
      <a className="sm-icon" href="https://linkedin.com/in/elsa-hovey"> 
            <FaLinkedin />
            </a>
      <a className="sm-icon" href="https://www.instagram.com/elsahoveydevdesign/"> 
            <FaInstagram />
            </a>
            </SmIcons>
              </Body>
            </Wrapper>
    </>
  )
}
export default ContactForm