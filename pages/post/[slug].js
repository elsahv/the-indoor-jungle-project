import { sanityClient, urlFor } from "../../client"
import { PortableText } from '@portabletext/react'
import {
  Wrapper,
  // Breadcrumbs,
  ImageSection,
  Title,
  BodyContent
} from '../../components/styles/post.styled'
import {
  BlogWrapper
} from '../../components/styles/Banner.styled'


const Post = ({
  title,
  mainImage,
  body,
  publishedAt

 
}) => {
  return (
    <Wrapper>
   {/* <Breadcrumbs>
   breadcrumbs
   </Breadcrumbs> */}
     <BlogWrapper>
     </BlogWrapper>
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
      Published on: <div>{new Date(publishedAt).toDateString()}</div>

      <hr />
 
         <PortableText value={body} />
        </BodyContent>

      <hr />

    </Wrapper>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[_type in ["plants", "blogPosts"] && slug.current == $pageSlug][0]{
    title,
    mainImage,
    body,
    publishedAt

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
