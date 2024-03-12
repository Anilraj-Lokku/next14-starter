import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
 // Check if post is undefined or null

 return (
  <div className={styles.container}>
   <div className={styles.top}>
    <div className={styles.imgContainer}>
     <Image
      src="https://images.pexels.com/photos/20291106/pexels-photo-20291106/free-photo-of-a-small-house-on-top-of-a-hill-with-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
      fill
      className={styles.img}
     />
    </div>
    <span className={styles.date}>12.03.2024</span>
   </div>
   <div className={styles.bottom}>
    {/* Check if post.title exists before accessing it */}
    <h1 className={styles.title}>{post.title}</h1>
    <p className={styles.desc}>{post.body}</p>
    <Link className={styles.Link} href={`/blog/${post.id}`}>
     READ MORE
    </Link>
   </div>
  </div>
 );
};

export default PostCard;
