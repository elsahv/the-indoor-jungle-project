import { sanityClient, urlFor } from "../../client"
import { PortableText } from '@portabletext/react'

import {
  Wrapper,
  Breadcrumbs,
  ImageSection,
  Title,
  BodyContent

} from '../../components/styles/post.styled'
 




const Post = ({
  title,
  mainImage,
  body,
 
}) => {
  return (
    <Wrapper>
   <Breadcrumbs>
   breadcrumbs
   </Breadcrumbs>
      <ImageSection>
              <img
                 src={urlFor(mainImage)}
                 alt=""
                 className="img"
                //  width={1000}
                //  height={500}
                 />
      </ImageSection>

      <BodyContent>

      <Title>{title}</Title>
      Published on: date
      <hr />
 
         <PortableText value={body} />
        </BodyContent>

      <hr />

    </Wrapper>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[_type in ["plants", "fish", "outdoorSection"] && slug.current == $pageSlug][0]{
    title,
    mainImage,
    body
  }`

  const post = await sanityClient.fetch(query, { pageSlug })

  if (!post) {
    return {

      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        title: post.title,
        mainImage: post.mainImage,
        body: post.body,
      },
    }
  }
}

export default Post
