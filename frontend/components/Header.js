import Link from 'next/link'
import { FaFacebookF,
    FaInstagram,
    FaPinterestP } from "react-icons/fa";
import Sidebar from './Sidebar';
import {
  NavSection,
   NavLinks,
    Logo, SmIcons
} from './styles/Header.styled'


const Header = () => {
  return (
    <NavSection>
<Sidebar />
     <NavLinks>
 <Logo> 
 <Link href="/">
   The Indoor Jungle Project
   </Link>
   </Logo> 
       <Link href="/plants">Plants</Link>
       <Link href="/fish">Fish</Link>
       <Link href="/outdoor-section">The Outdoor Section</Link>
          <SmIcons> 
          <a href="http://pinterest.com"> 
        <FaPinterestP />
        </a>  
        <a href="http://facebook.com"> 
        <FaFacebookF />
        </a>
      <a href="https://www.instagram.com"> 
        <FaInstagram />
        </a>
        </SmIcons>
     </NavLinks>
     </NavSection>
  )
}

export default Header