import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import { sanityClient, urlFor } from "../client"
import Aside from '../components/Aside'
import {
  BlogWrapper
} from '../components/styles/Banner.styled'

import MailchimpForm from '../components/MailchimpForm'
import {
  PostTitle,
  IndexWrapperGrid,
  IndexPostGrid,
  TestWrapper,
  AsideMailchimp
} from '../components/styles/IndexGrid.styled'





export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Indoor Jungle | Plants</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogWrapper>
        Plants  
     </BlogWrapper>

   
      <IndexWrapperGrid>  
      <TestWrapper>
        
      <IndexPostGrid> 
        {posts &&
        posts.map((post, index) => (   
          // eslint-disable-next-line react/jsx-key
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
          </IndexPostGrid>


      </TestWrapper>
      <AsideMailchimp>
      <MailchimpForm />
      <Aside />
      </AsideMailchimp>
      
      </IndexWrapperGrid>
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
 