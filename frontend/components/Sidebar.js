
import React, {useState} from 'react'
import Link from 'next/link'

import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import {
    Wrapper,
    Logo,
    MenuOpen,
    MenuClose,
    SidebarLinks
  } from './styles/Sidebar.styled'


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <Wrapper>
      <MenuOpen>
      <FaBars onClick={showSidebar} />  
      </MenuOpen>

     <Logo>
       <Link href='/'>
       The Indoor Jungle Project
       </Link>
       </Logo>

     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className="nav-menu-items" onClick={showSidebar}>
          <div className="navbar-toggle">
          <MenuClose>
              <AiOutlineClose />
          </MenuClose>  
              </div>
              <SidebarLinks>
              <Link href="/">
                      <a>Home</a>
                    </Link>
                  <Link href="/plants">
                      <a>Plants</a>
                    </Link>
                    <Link href="/fish">
                      <a>Fish</a>
                    </Link>
                    <Link href="/outdoor-section">
                      <a>The Outdoor Section</a>
                    </Link>
              </SidebarLinks>
              </div>
              </nav>
    </Wrapper>
  )
}

export default Sidebar