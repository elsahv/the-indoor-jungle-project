import { sanityClient, urlFor } from "../../client"
import { PortableText } from '@portabletext/react'
import {
  Wrapper,
  ImageSection,
  Title,
  ImagesWrapper,
  BodyContent
} from '../../components/styles/post.styled'
import {
  BlogWrapper
} from '../../components/styles/Banner.styled'
 

const PostComponents = {
  types: {
    image: ({value}) => {
      return (
        <ImagesWrapper>
        <img
          alt={value.alt || ' '}
          src={urlFor(value)}
          layout="responsive"
          className="images"
          />
          </ImagesWrapper>
      )
    }
  }
}




const Post = ({
  title,
  mainImage,
  images,
  body,
}) => {
  return (
    <Wrapper>
       <BlogWrapper>
     <Title>{title}</Title>
        </BlogWrapper>
      <ImageSection>
              <img
                 src={urlFor(mainImage)}
                 alt=""
                 className="img"
                 />
      </ImageSection>
     <br />
      <BodyContent>
      <hr />
      <PortableText value={body} components={PostComponents} />
      <hr />
      </BodyContent>
      <br />
    </Wrapper>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[_type in ["plants", "blogPosts"] && slug.current == $pageSlug][0]{
    title,
    mainImage,
    images,
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
        images: post.images,
        body: post.body,
      },
    }
  }
}

export default Post
