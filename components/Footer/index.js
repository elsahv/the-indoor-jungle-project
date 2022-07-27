import Link from 'next/link'
import {
  Footer,
  Wrapper,
 Item
} from './Footer.styled'





export default function FooterSection() {
  return (
    <>
    <Footer>
      <Wrapper>
      <Item>
        <Link href="/contact">
        Contact
        </Link>
        </Item>

      <Item>The Indoor Jungle Project- Copyright @ 2022</Item>

        </Wrapper>
  </Footer>
  </>

  )
}
