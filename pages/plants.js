import Head from 'next/head'
import Link from "next/link"

import { sanityClient, urlFor } from "../client"  
import MailchimpForm from '../components/MailchimpForm'
import {
  BlogWrapper
} from '../components/styles/Banner.styled'

import {
  PostTitle,
  GridContainer,
  PostsGrid,
} from '../components/styles/IndexGrid.styled'




export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>The Indoor Jungle Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BlogWrapper>
        Plants  
     </BlogWrapper>

      <GridContainer>  
      <PostsGrid> 
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
          </PostsGrid>
          <MailchimpForm />
          {/* aside styles */}
      </GridContainer>
      

    </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[ _type == "plants"] | order(_createdAt desc)[0..9]'
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
 