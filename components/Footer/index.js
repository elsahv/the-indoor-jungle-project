import Link from 'next/link'
import {
  FooterWrapper,
 Item
} from './Footer.styled'





export default function Footer() {
  return (
    <>
    <FooterWrapper>
      <Item>The Indoor Jungle Project- Copyright @ 2022</Item>
      <Item>
        <Link href="/contact">
        Contact
        </Link>
        </Item>
  </FooterWrapper>
  </>

  )
}
