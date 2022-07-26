import Head from 'next/head'
import Link from "next/link"


import { sanityClient, urlFor } from "../client"  
import IndexCTA from '../components/IndexCTA'
import {
  Wrapper
} from '../components/styles/Banner.styled'
import {
  Title,
  PostTitle,
  GridContainer,
  IndexGrid,
} from '../components/styles/IndexGrid.styled'





export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>The Indoor Jungle Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Wrapper>
    A blog about novice gardening... while living amongst houseplants and annoying squirrels... 
     </Wrapper>

      <Title>Most Recent Posts</Title>

      <GridContainer>  
      <IndexGrid> 
        {posts &&
        posts.map((post, index) => (   
          <Link href={`post/${post.slug.current}`}>
            <span key={index}>
              <div className="square"> 
              <img
               src={urlFor(post.mainImage)}
               alt="main pic"
               className="image"
               />
              <PostTitle>{post.title}</PostTitle>
              </div>
            </span>
           </Link>
        ))}
          </IndexGrid>
      </GridContainer>
           <IndexCTA />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type in ["blogPosts", "plants"]] | order(_createdAt desc)[0..5]'
  const posts = await sanityClient.fetch(query)

  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    }
  } else {
    return {
      props: {
        posts,
      },
    }
  }
}
 