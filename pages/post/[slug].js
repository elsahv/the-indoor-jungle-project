import { sanityClient, urlFor } from "../../client"
import { PortableText } from '@portabletext/react'
import styled from 'styled-components'


//STYLES

const Wrapper = styled.div`
width: 100%;
@media only screen and (max-width: 1024px) {
}
 `

const ImageSection = styled.div`
display: flex;
justify-content: center;
.img {
  border: solid 3px black;

}
@media only screen and (max-width: 1024px) {
  .img {
    width: 600px;
    height: 400px;
  }
}
@media only screen and (max-width: 1024px) {
  .img {
    width: 350px;
    height: 200px;
  }
}
`

const Title = styled.h2`
text-align: center;
font-size: 25px;
@media only screen and (max-width: 1024px) {
}
`

const BodyContent = styled.div`
 text-align: left;
 margin: 170px;
 font-size: 25px;
 @media only screen and (max-width: 1024px) {
   margin: 50px;
   padding-left: 35px;
}
@media only screen and (max-width: 768px) {
 margin: 10px;
 padding: 0;

}
`
//END STYLES




const Post = ({
  title,
  mainImage,
  body,
 
}) => {
  return (
    <Wrapper>
   
      <ImageSection>
              <img
                 src={urlFor(mainImage)}
                 alt=""
                 className="img"
                 width={1000}
                 height={500}
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
