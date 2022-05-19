import {
  FooterBanner,
    FooterSection,
    FooterMenu1, 
    FooterMenu2,
    FooterMenuTitle,
    FooterMenuItem
} from './styles/Footer.styled'





export default function Footer() {
  return (
    <>
        <FooterBanner> 
          Footer Banner
        </FooterBanner>
    <FooterSection>

    <FooterMenu1>
    <FooterMenuItem>
    <a href="/contact">
        Contact
        </a>
        </FooterMenuItem> 
    <FooterMenuTitle>The Indoor Jungle Project- Copyright @2022</FooterMenuTitle>
    </FooterMenu1>


    <FooterMenu2>
      <FooterMenuItem>
      <a href="http://elsahovey.com">
          created by Elsa Hovey
          </a>
          </FooterMenuItem> 
      </FooterMenu2>
      
  </FooterSection>
  </>

  )
}
