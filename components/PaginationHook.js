import React, { useState, useEffect } from "react";
import Pagination from "react-sanity-pagination";
import { sanityClient, urlFor } from "../client"
import Link from "next/link"
 




const PlantsPaginate = ({posts}) => {
const itemsToSend = [];

  const postsPerPage = 4;
  const [items, setItems] = useState([]);
 
 

  useEffect(() => {
    sanityClient.fetch(`*[_type == "plants"] | order(_createdAt) `).then(res => {
      itemsToSend.push(...res);   
    });
  }, []);

 
  const action = (page, range, items) => {
    console.log(page, range, items);
    setItems(items);
  };

  return (
    <div className="App">
      <h1>Plants</h1>

      <div style={{background: 'green'}}>
      {posts &&
        posts.map((post) => (   
          // eslint-disable-next-line react/jsx-key
          <Link href={`post/${post.slug.current}`}>
            <span key={index}>
              {/* <div>  */}
              {/* <img 
               src={urlFor(post.mainImage)}
               alt="main pic"
               className="image" 
               /> */}
              <div>{post.title}</div>
               {/* </div> */}
            </span>
            </Link>
        ))}

      </div>

      <Pagination
        items={itemsToSend}
        action={action}
        postsPerPage={postsPerPage}
      />
    </div>
  );
};
 
export default PlantsPaginate;