import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async (slug) => {
 const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

 if (!res.ok) {
  throw new Error("Failed to fetch data");
 }

 return res.json();
};

const SinglePostpage = async ({ params }) => {
 const { slug } = params;
 // FETCH DATA WITH AN API
 const post = await getData(slug);

 // FETCH DATA WITHOUT AN API
 //  const post = await getPost(slug);

 return (
  <div className={styles.container}>
   <div className={styles.imgContainer}>
    <Image
     src="https://images.pexels.com/photos/20291106/pexels-photo-20291106/free-photo-of-a-small-house-on-top-of-a-hill-with-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     alt=""
     fill
     className={styles.img}
    />
   </div>
   <div className={styles.textContainer}>
    <h1 className={styles.title}>{post.title}</h1>
    <div className={styles.detail}>
     <Image
      src="https://images.pexels.com/photos/20291106/pexels-photo-20291106/free-photo-of-a-small-house-on-top-of-a-hill-with-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
      width={50}
      height={50}
     />

     <Suspense fallback={<div>Loading..</div>}>
      <PostUser userId={post.userId} />
     </Suspense>

     <div className={styles.detailText}>
      <span className={styles.detailTitle}>Published</span>
      <span className={styles.detailValue}>12-03-2024</span>
     </div>
    </div>
    <div className={styles.content}>{post.body}</div>
   </div>
  </div>
 );
};

export default SinglePostpage;
