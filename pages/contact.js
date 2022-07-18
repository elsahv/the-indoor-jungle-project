import { 
  FaLinkedin,
  FaInstagram,
  FaGithub
 } from 'react-icons/fa'; 

 import {
  Title,
  Wrapper,
  SmIcons,
  ExternalWrapper
 } from '../components/styles/Contact.styled.js'

const ContactForm = () => {
  return (
    <>
    <ExternalWrapper>
    <Title>
    Contact Info
    </Title>
    <Wrapper>
       <p>I am currently available for work, you can reach me at:</p>
        <a href="mailto:elsahoveydevdesigns@gmail.com">elsahoveydevdesigns@gmail.com</a>
        </Wrapper>
        
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
            </ExternalWrapper>
    </>
  )
}
export default ContactForm